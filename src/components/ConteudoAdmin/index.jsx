import "./style/style.css";
import trilhasSemPaginacao from "../../services/database_all";
import cursos from "../../services/database_cursos";
import usuarios from "../../services/database_usuarios";
import React, { useState } from "react";
import ReadOnlyRow from "../ReadOnlyRow";
import EditableRow from "../EditableRow";

const ConteudoAdmin = () => {
  const [trilha, setTrilhas] = useState(0);

  const [addFormData, setAddFormData] = useState({
    id: "",
    trilha: "",
    descricao: "",
  });

  const [editFormData, setEditFormData] = useState({
    id: "",
    trilha: "",
    descricao: "",
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
      id: "",
      trilha: addFormData.trilha, 
      descricao: addFormData.descricao,
    };

    const newTrilhas = [...trilha, newTrilha];
    setTrilhas(newTrilhas);
  };

  const handleEditFormSubmit = (event) => {
    event.preventDefault();

    const editedTrilha = {
      id: editTrilhaId.id, 
      trilha: editFormData.trilha,
      descricao: editFormData.descricao,
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
      id: trilha.id,
      trilha: trilha.trilha,
      descricao: trilha.descricao,
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

  const [opcao, setOpcao] = useState("Trilhas")
  const [dados, setDados] = useState(trilhasSemPaginacao)
  const [coluna1, setColuna1] = useState("Trilha")
  const [coluna2, setColuna2] = useState("Descrição")

  return (
    <div className="app-container">
      <nav className="side-bar">
        <ul className="opcoes">
            <li><a id="trilha" href="#" onClick={() => {
                setOpcao(document.getElementById("trilha").innerHTML);
                setDados(trilhasSemPaginacao);
                setColuna1("Trilha");
                setColuna2("Descrição");
            }
            }>Trilhas</a></li>
            <li><a id="cursos" href="#" onClick={() => {
                setOpcao(document.getElementById("cursos").innerHTML);
                setDados(cursos);
                setColuna1("Nome");
                setColuna2("Aulas");
            }
            }>Cursos</a></li>
            <li><a id="aulas" href="#" onClick={() => {
                setOpcao(document.getElementById("aulas").innerHTML);
            }
            }>Aulas</a></li>
            <li><a id="usuarios" href="#" onClick={() => {
                setOpcao(document.getElementById("usuarios").innerHTML);
                setDados(usuarios);
                setColuna1("Nome");
                setColuna2("E-mail");
            }
            }>Usuários</a></li>
        </ul>
      </nav> 
      <nav className="conteudo-admin">
        <form onSubmit={handleEditFormSubmit}>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th id="coluna1">{coluna1}</th>
                <th id="coluna2">{coluna2}</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              {dados.map((trilha) => (
                <>
                  {editTrilhaId === trilha.id ? (
                    <EditableRow
                      editFormData={editFormData}
                      handleEditFormChange={handleEditFormChange}
                      handleCancelClick={handleCancelClick}
                    />
                  ) : (
                    <ReadOnlyRow
                      opcao = {opcao}
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
        <h2 className="add">Adicionar {opcao}</h2>
        <form onSubmit={handleAddFormSubmit}>
          <input
            type="text"
            name="trilha"
            required="required"
            placeholder={coluna1}
            onChange={handleAddFormChange}
          />
          <input
            type="text"
            name="descricao"
            required="required"
            placeholder={coluna2}
            onChange={handleAddFormChange}
          />
          <button className="btn-add" type="submit">Adicionar</button>
        </form>
      </nav>
    </div>
  );
};

export default ConteudoAdmin