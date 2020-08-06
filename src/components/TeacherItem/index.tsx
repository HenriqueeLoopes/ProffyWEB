import React from "react";

import whatsappIcon from "./../../assets/images/icons/whatsapp.svg";

import "./styles.css";
import api from "../../services/api";

interface TeacherItemProps {
  teacher: {
    id: number;
    avatar: string;
    bio: string;
    cost: number;
    name: string;
    subject: string;
    whatsapp: string;
    user_id: number;
  };
}

const TeacherItem: React.FC<TeacherItemProps> = ({ teacher }) => {
  async function addNewConnection(user_id: number){
    await api.post('/connections', { user_id });
  }

  return (
    <article className="teacher-item">
      <header>
        <img src={teacher.avatar} alt={teacher.name} />
        <div>
          <strong>{teacher.name}</strong>
          <span>{teacher.subject}</span>
        </div>
      </header>
      <p>
      {teacher.bio}
      </p>

      <footer>
        <p>
          Preco/Hora
          <strong>R$ {teacher.cost}</strong>
        </p>
        <a target="_blank" rel="noopener noreferrer" href={`https://wa.me/${teacher.whatsapp}`} onClick={() => { addNewConnection(teacher.user_id); }} >
          <img src={whatsappIcon} alt="WhatsApp Icon" />
          entrar em contato
        </a>
      </footer>
    </article>
  );
};

export default TeacherItem;
