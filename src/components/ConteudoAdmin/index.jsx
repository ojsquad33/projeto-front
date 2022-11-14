import "./style.css";
import trilhasSemPaginacao from "../../services/database_all";
import cursos from "../../services/database_cursos";
import usuarios from "../../services/database_usuarios";
import { useState, useEffect } from "react";
import ReadOnlyRow from "../ReadOnlyRow";
import EditableRow from "../EditableRow";
import Formulario from "../Formulario";
import axios from "../../api/axios";

const ConteudoAdmin = () => {
  const [trilha, setTrilhas] = useState(0);
  const [length, setLength] = useState(0);
  const [trilhasSemPaginacao, setTrilhaSemPaginacao] = useState([]);
  const arrayTrilhas = [];

  const getTrilha = async () => {
    try {
      const { data } = await axios.get(`/trilhas`);
      setLength(data.totalPages);
      for (let i = 0; i < length; i++) {
        const { data } = await axios.get(`/trilhas?page=${i}`);
        data.content.forEach((item) => arrayTrilhas.push(item));
        setTrilhaSemPaginacao(arrayTrilhas);
        console.log("eu aqui");
      }
      console.log(trilhasSemPaginacao);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getTrilha();
  }, []);

  const [addFormData, setAddFormData] = useState({
    trilha: "",
    descricao: "",
  });

  const [editFormData, setEditFormData] = useState({
    trilha: "",
    descricao: "",
    nome: "",
    aulas: "",
    email: "",
  });

  const [editTrilhaId, setEditTrilhaId] = useState(null);

  const handleAddFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...addFormData };
    newFormData[fieldName] = fieldValue;

    setAddFormData(newFormData);
  };

  const handleEditFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...editFormData };
    newFormData[fieldName] = fieldValue;

    setEditFormData(newFormData);
  };

  const handleAddFormSubmit = (event) => {
    event.preventDefault();

    const newTrilha = {
      trilha: addFormData.trilha,
      descricao: addFormData.descricao,
    };

    const newTrilhas = [...trilha, newTrilha];
    setTrilhas(newTrilhas);
  };

  const handleEditFormSubmit = (event) => {
    event.preventDefault();

    const editedTrilha = {
      trilha: editFormData.trilha,
      descricao: editFormData.descricao,
      nome: editFormData.nome,
      email: editFormData.email,
      aulas: editFormData.aulas,
    };

    const newTrilhas = [...trilha];
    const index = trilha.findIndex((trilha) => trilha.id === editTrilhaId);
    newTrilhas[index] = editedTrilha;

    setTrilhas(newTrilhas);
    setEditTrilhaId(null);
  };

  const handleEditClick = (event, trilha) => {
    event.preventDefault();

    setEditTrilhaId(trilha.id);
    const formValues = {
      trilha: trilha.trilha,
      descricao: trilha.descricao,
      nome: trilha.nome,
      email: trilha.email,
      aulas: trilha.aulas,
    };
    setEditFormData(formValues);
  };

  const handleCancelClick = () => {
    setEditTrilhaId(null);
  };

  const handleDeleteClick = (trilhaId) => {
    const newTrilhas = [...trilha];
    const index = trilha.findIndex((trilha) => trilha.id === trilhaId);
    newTrilhas.splice(index, 1);
    setTrilhas(newTrilhas);
  };

  const [opcao, setOpcao] = useState("Trilhas");
  const [dados, setDados] = useState(trilhasSemPaginacao);
  const [coluna1, setColuna1] = useState("Trilha");
  const [coluna2, setColuna2] = useState("Descrição");
  const [coluna3, setColuna3] = useState("");
  const [coluna4, setColuna4] = useState("");
  const [coluna5, setColuna5] = useState("");

  return (
    <div className="app-container">
      <nav className="side-bar">
        <ul className="opcoes">
          <li>
            <a
              id="trilha"
              href="#"
              onClick={() => {
                setOpcao(document.getElementById("trilha").innerHTML);
                setDados(trilhasSemPaginacao);
                setColuna1("Trilha");
                setColuna2("URL-Imagem");
                setColuna3("Descrição");
                setColuna4("");
                setColuna5("");
              }}
            >
              Trilhas
            </a>
          </li>
          <li>
            <a
              id="cursos"
              href="#"
              onClick={() => {
                setOpcao(document.getElementById("cursos").innerHTML);
                setDados(cursos);
                setColuna1("Nome");
                setColuna2("Descrição");
                setColuna3("");
                setColuna4("");
                setColuna5("");
              }}
            >
              Cursos
            </a>
          </li>
          <li>
            <a
              id="aulas"
              href="#"
              onClick={() => {
                setOpcao(document.getElementById("aulas").innerHTML);
                setDados(cursos);
                setColuna1("Título");
                setColuna2("Descrição");
                setColuna3("Professor");
                setColuna4("URL");
                setColuna5("Tipo");
              }}
            >
              Aulas
            </a>
          </li>
          <li>
            <a
              id="usuarios"
              href="#"
              onClick={() => {
                setOpcao(document.getElementById("usuarios").innerHTML);
                setDados(usuarios);
                setColuna1("Nome");
                setColuna2("E-mail");
                setColuna3("");
                setColuna4("");
                setColuna5("");
              }}
            >
              Usuários
            </a>
          </li>
        </ul>
      </nav>
      <nav className="conteudo-admin">
        <form onSubmit={handleEditFormSubmit}>
          <table className="tabela">
            <thead className="tabela-cabecalho">
              <tr>
                <th id="coluna1">{coluna1}</th>
                <th id="coluna2">{coluna2}</th>
                <th id="coluna3">{coluna3}</th>
                <th id="coluna4">{coluna4}</th>
                <th id="coluna5">{coluna5}</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {dados.map((trilha) => (
                <>
                  {editTrilhaId === trilha.id ? (
                    <EditableRow
                      opcao={opcao}
                      editFormData={editFormData}
                      handleEditFormChange={handleEditFormChange}
                      handleCancelClick={handleCancelClick}
                    />
                  ) : (
                    <ReadOnlyRow
                      opcao={opcao}
                      trilha={trilha}
                      handleEditClick={handleEditClick}
                      handleDeleteClick={handleDeleteClick}
                    />
                  )}
                </>
              ))}
            </tbody>
          </table>
        </form>
        <div className="add-options">
          <h2 id="tipo" className="add">
            Adicionar {opcao}
          </h2>
          <Formulario
            opcao={opcao}
            coluna1={coluna1}
            coluna2={coluna2}
            coluna3={coluna3}
            coluna4={coluna4}
            coluna5={coluna5}
            handleAddFormSubmit={handleAddFormSubmit}
            handleAddFormChange={handleAddFormChange}
          />
        </div>
      </nav>
    </div>
  );
};

export default ConteudoAdmin;
