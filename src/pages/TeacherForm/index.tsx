import React from "react";

import PageHeader from "../../components/PageHeader";
import Input from "../../components/Input";
import TextArea from "../../components/TextArea";
import Select from "../../components/Select";

import warningIcon from "../../assets/images/icons/warning.svg";

import "./styles.css";

function TeacherForm() {
  return (
    <div id="page-teacher-form" className="container">
      <PageHeader
        title="Que incrível que você quer dar aulas."
        description="o primeiro passo, e preencher esse formulario de inscricao."
      />

      <main>
        <fieldset>
          <legend>Seus dados</legend>
          <Input name="name" label="Nome completo" />
          <Input name="avatar" label="Avatar" />
          <Input name="whatsapp" label="WhatsApp" />
          <TextArea name="bio" label="Biografia" />
        </fieldset>

        <fieldset>
          <legend>Sobre a aula</legend>
          <Select
            name="subject"
            label="Materia"
            options={[
              { value: "TI", label: "TI" },
              { value: "Biologia", label: "Biologia" },
              { value: "Matematica", label: "Matematica" },
              { value: "Fisica", label: "Fisica" },
              { value: "Portugues", label: "Portugues" },
              { value: "Ingles", label: "Ingles" },
              { value: "Artes", label: "Artes" },
              { value: "Geografia", label: "Geografia" },
              { value: "Historia", label: "Historia" },
            ]}
          />
          <Input type="number" name="cost" label="Custa da sua hora por aula" />
        </fieldset>

        <fieldset>
          <legend>
            Horarios Disponiveis<button type="button">+ novo horario</button>
          </legend>

          <div className="schedule-item">
            <Select
              name="week_day"
              label="Dia da semana"
              options={[
                { value: "0", label: "Domingo" },
                { value: "1", label: "Segunda" },
                { value: "2", label: "Terca" },
                { value: "3", label: "Quarta" },
                { value: "4", label: "Quinta" },
                { value: "5", label: "Sexta" },
                { value: "6", label: "Sabado" },
              ]}
            />
            <Input name="from" label="Das" type="time" />
            <Input name="to" label="Ate" type="time" />
          </div>
        </fieldset>

        <footer>
          <p>
            <img src={warningIcon} alt="Aviso Importante" />
            Importante <br />
            Preencha todos os dados
          </p>
          <button type="button">Salvar cadastro</button>
        </footer>
      </main>
    </div>
  );
}

export default TeacherForm;
