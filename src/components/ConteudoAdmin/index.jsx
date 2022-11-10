import "./style/style.css";
import trilhasSemPaginacao from "../../services/database_all";
import React, { useState } from "react";
import ReadOnlyRow from "../ReadOnlyRow";
import EditableRow from "../EditableRow";

const ConteudoAdmin = () => {
  const [trilha, setTrilhas] = useState(0);

  const [addFormData, setAddFormData] = useState({
    titulo: "",
    descricao: "",
  });

  const [editFormData, setEditFormData] = useState({
    titulo: "",
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
      id: "0",
      titulo: addFormData.titulo, 
      descricao: addFormData.descricao,
    };

    const newTrilhas = [...trilha, newTrilha];
    setTrilhas(newTrilhas);
  };

  const handleEditFormSubmit = (event) => {
    event.preventDefault();

    const editedTrilha = {
      id: editTrilhaId, 
      titulo: editFormData.titulo,
      descricao: editFormData.descricao,
    };

    const newTrilhas = [...trilha];
    const index = trilha.findIndex((trilha) => trilha.id === editTrilhaId);
    newTrilhas[index] = editedTrilha; 

    setTrilhas(newTrilhas);
    setEditTrilhaId(null);
  };

  const handleEditClick = (event, trilha) => {
    event.preventDefault(); // ???

    setEditTrilhaId(trilha.id);
    const formValues = {
      titulo: trilha.titulo,
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

  return (
    <div className="app-container">
      <form onSubmit={handleEditFormSubmit}>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Trilha</th>
              <th>Descrição</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {trilhasSemPaginacao.map((trilha) => (
              <>
                {editTrilhaId === trilha.id ? (
                  <EditableRow
                    editFormData={editFormData}
                    handleEditFormChange={handleEditFormChange}
                    handleCancelClick={handleCancelClick}
                  />
                ) : (
                  <ReadOnlyRow
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

      <h2 className="add">Adicione uma trilha</h2>
      <form onSubmit={handleAddFormSubmit}>
        <input
          type="text"
          name="titulo"
          required="required"
          placeholder="Digite o título..."
          onChange={handleAddFormChange}
        />
        <input
          type="text"
          name="descricao"
          required="required"
          placeholder="Digite uma descrição..."
          onChange={handleAddFormChange}
        />
        <button className="btn-add" type="submit">Adicionar</button>
      </form>
    </div>
  );
};

export default ConteudoAdmin