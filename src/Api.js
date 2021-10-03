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
}