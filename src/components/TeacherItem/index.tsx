import React from "react";

import whatsappIcon from "./../../assets/images/icons/whatsapp.svg";

import "./styles.css";

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
        <a target="_blank" rel="noopener noreferrer" href={`https://wa.me/${teacher.whatsapp}`} >
          <img src={whatsappIcon} alt="WhatsApp Icon" />
          entrar em contato
        </a>
      </footer>
    </article>
  );
};

export default TeacherItem;
