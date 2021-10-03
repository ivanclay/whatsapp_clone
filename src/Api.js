import firebase from 'firebase/app';
import 'firebase/firebase-auth';
import 'firebase/firebase-firestore';

import firebaseConfig from './firebaseConfig';

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

//eslint-disable-next-line import/no-anonymous-default-export
export default {
    fbPopup: async () => {
        const provider = new firebase.auth.FacebookAuthProvider();
        let result = await firebaseApp.auth().signInWithPopup(provider);
        return result;
    },
    addUser: async (u) => {
      await db.collection('users').doc(u.id).set({
        name: u.name,
        avatar: u.avatar
      },{merge:true});
  },
  getContactList: async (userId) => {
    let contacts = [];

    let result = await db.collection('users').get();
    result.forEach(res => {
      let data = res.data();
      if(res.id !== userId){
        contacts.push({
          id: res.id,
          name: data.name,
          avatar: data.avatar
        });
      }
    });

    return contacts;
},
addNewChat: async (user, userInvited) => {
  let newChat = await db.collection('chats').add({
    messages:[],
    users: [user, userInvited]
  });

  db.collection('users').doc(user.id).update({
    chats: firebase.firestore.FieldValue.arrayUnion({
      chatId: newChat.id,
      title: userInvited.name,
      image: userInvited.avatar,
      with: userInvited.id
    })
  });

  db.collection('users').doc(userInvited.id).update({
    chats: firebase.firestore.FieldValue.arrayUnion({
      chatId: newChat.id,
      title: user.name,
      image: user.avatar,
      with: user.id
    })
  });
},
onChatList: async (userId, setChatList) => {
  return db.collection('users').doc(userId).onSnapshot((doc)=>{
    if(doc.exists){
      let data = doc.data();
      if(data.chats){
        setChatList(data.chats);
      }
    }
  });
},
onChatContent: async (chatId, setTalkList) => {
  return db.collection('chats').doc(chatId).onSnapshot((doc)=>{
    if(doc.exists){
      let data = doc.data();
      // let teste = [];//new Array();
      const teste = data.messages.map(m =>( {... m,...{date: m.date.seconds}}) )
      //teste.push(data.messages);
      console.log(teste);
      setTalkList(teste);
    }
  });
},
sendMessage: async (chatData, userId, type, body) => {
  let now = new Date();
  await db.collection('chats').doc(chatData.chatId).update({
    messages: firebase.firestore.FieldValue.arrayUnion({
      type: type,
      author: userId,
      body: body,
      date: now
    })
   });
},
}