import React from 'react';

import whatsappIcon from './../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem() {
    return (
        <article className="teacher-item">
        <header>
          <img
            src="https://avatars2.githubusercontent.com/u/61763079?s=460&u=17e0f8ef85230b8d38e3427fecf76908d697fd24&v=4"
            alt="Henrique Lopes"
          />
          <div>
            <strong>Henrique Lopes</strong>
            <span>TI</span>
          </div>
        </header>
        <p>
          Entusiasta das melhores tecnologias <br /> <br />
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
          dapibus libero ac iaculis tristique. Donec varius, turpis ut tempus
          malesuada, odio lacus semper dui, id aliquet purus justo a turpis.
          Nunc tristique dolor at aliquam suscipit. Vestibulum auctor justo
          eget dignissim elementum. Vestibulum at lectus luctus, feugiat nisi
          vitae, faucibus nulla. Mauris nec justo libero. Praesent lacinia
          imperdiet quam, nec fermentum tellus pharetra vitae. Praesent
          tincidunt varius est, eu eleifend mi. Integer volutpat, mauris non
          congue viverra, neque leo viverra nunc, a consequat erat neque ac
          nunc. Pellentesque fringilla feugiat odio, in aliquet elit feugiat
          eget.
        </p>

        <footer>
          <p>
            Preco/Hora
            <strong>R$ 80,00</strong>
          </p>
          <button type="button">
            <img src={whatsappIcon} alt="WhatsApp Icon" />
            entrar em contato
          </button>
        </footer>
      </article>
    );
}

export default TeacherItem;