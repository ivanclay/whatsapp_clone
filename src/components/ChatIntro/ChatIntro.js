import React from 'react';
import './ChatIntro.css'

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
    return (
        <div className="chatIntro">
            {/* <img src="https://web.whatsapp.com/img/intro-connection-hq-light_9466a20e6d2921a21ac7ab82419be157.jpg" alt=""/> */}
            <img 
                src="https://niceideaapps.com.br/imgs/intro-connection-hq-light.jpg"
                alt=""
            />
            <h1>Mantenha seu celular conectado</h1>
            <h2>O CloneZap conecta ao seu telefone para sincronizar suas mensagens.
                Para reduzir o uso de dados, conecte seu telefone a uma rede Wi-Fi.
            </h2>
        </div>
    );
}