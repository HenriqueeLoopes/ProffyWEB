import React from "react";

import PageHeader from "../../components/PageHeader";
import TeacherItem from "../../components/TeacherItem";

import "./styles.css";
import Input from "../../components/Input";
import Select from "../../components/Select";

function TeacherList() {
  return (
    <div id="page-teacher-list" className="container">
      <PageHeader title="Estes são os proffys disponíveis">
        <form action="" id="search-teachers">
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
          <Input type="time" name="time" label="Hora" />
        </form>
      </PageHeader>

      <main>
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
      </main>
    </div>
  );
}

export default TeacherList;
