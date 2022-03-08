import React, { useState, useEffect, ChangeEvent } from "react";
import { Table, Button, Form } from "react-bootstrap";
import { useHistory, useParams } from "react-router-dom";

import api from "../../services/api";

import "./index.css";

interface IDoctor {
  ID: string;
  adress_id: string;
  NOME: string;
  CRM: number;
  TELFIXO: number;
  TELCELULAR: number;
  BAIRRO: string;
  UF: string;
  LOCALIDADE: string;
}

const Doctors: React.FC = () => {
  var num = 0;

  const [doctors, setDoctors] = useState<IDoctor[]>([]);
  const history = useHistory();

  useEffect(() => {
    loadDoctors("a");
  }, []);

  async function loadDoctors(search:string) {
    const response = await api.get(`/InfoDoctorsSpecialties/${search}`);
    console.log(response);

    setDoctors(response.data);
  }

  function newDoctor() {
    history.push("/doctors_register");
  }

  function SearchDoctors(e: ChangeEvent<HTMLInputElement>) {
    loadDoctors(e.target.value);
  }

  async function EditDoctor(ID: string, ID_adress: string) {
    history.push(`/doctors_register/${btoa(ID)}&&${btoa(ID_adress)}`);
  }

  async function DeleteDoctor(ID: string, ID_adress: string) {
    const responseAdress = await api.delete(`/Adress/${ID_adress}`);
    const responseDoctor = await api.delete(`/InfoDoctors/${ID}`);
    window.location.reload();
  }

  return (
    <div className="container">
      <br />
      <div className="Header-doctors">
        <h1>Medicos</h1>
        <Form.Group>
          <Form.Label>Pesquisar
          </Form.Label>
          <Form.Control 
          type="text"
          name="search"
          onChange={(e: ChangeEvent<HTMLInputElement>) => SearchDoctors(e)}/>
        </Form.Group>
        <Button variant="dark" size="sm" onClick={newDoctor}>
          Novo Medico
        </Button>
      </div>
      <br />
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Nome</th>
            <th>CRM</th>
            <th>Tel. Celular</th>
            <th>Tel. Fixo</th>
            <th>Bairro</th>
            <th>Cidade</th>
            <th>Estado</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {doctors.map((doctor) => (
            <tr key={num++}>
              <td>{doctor.NOME}</td>
              <td>{doctor.CRM}</td>
              <td>{doctor.TELCELULAR}</td>
              <td>{doctor.TELFIXO}</td>
              <td>{doctor.BAIRRO}</td>
              <td>{doctor.LOCALIDADE}</td>
              <td>{doctor.UF}</td>
              <td>
                <Button
                  size="sm"
                  variant="warning"
                  onClick={() => EditDoctor(doctor.ID, doctor.adress_id)}
                >
                  Editar
                </Button>{" "}
                <Button
                  size="sm"
                  variant="danger"
                  onClick={() => DeleteDoctor(doctor.ID, doctor.adress_id)}
                >
                  Remover
                </Button>{" "}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Doctors;
