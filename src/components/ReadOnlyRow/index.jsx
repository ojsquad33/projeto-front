import {React, useState} from "react";

const ReadOnlyRow = ({ trilha, handleEditClick, handleDeleteClick, opcao }) => {
  {
    if (opcao == "Trilhas"){
      return (
        <tr>
          <td>{trilha.id}</td>
          <td>{trilha.trilha}</td>
          <td>{trilha.descricao}</td>
          <td>
            <button
              type="button"
              onClick={(event) => handleEditClick(event, trilha)}
            >
              Editar
            </button>
            <button type="button" onClick={() => handleDeleteClick(trilha.id)}>
              Deletar
            </button>
          </td>
        </tr>
      );
    }
    else if (opcao == "Cursos"){
      return (
        <tr>
          <td>{trilha.id}</td>
          <td>{trilha.nome}</td>
          <td>{trilha.aulas}</td>
          <td>
            <button
              type="button"
              onClick={(event) => handleEditClick(event, trilha)}
            >
              Editar
            </button>
            <button type="button" onClick={() => handleDeleteClick(trilha.id)}>
              Deletar
            </button>
          </td>
        </tr>
      );
    }
    else if (opcao == "Aulas") {
      return (
        <tr>
          <td>{trilha.id}</td>
          <td>{trilha.nome}</td>
          <td>{trilha.aulas}</td>
          <td>
            <button
              type="button"
              onClick={(event) => handleEditClick(event, trilha)}
            >
              Editar
            </button>
            <button type="button" onClick={() => handleDeleteClick(trilha.id)}>
              Deletar
            </button>
          </td>
        </tr>
      );
    }
    else if (opcao == "Usuários") {
      return (
        <tr>
          <td>{trilha.id}</td>
          <td>{trilha.nome}</td>
          <td>{trilha.email}</td>
          <td>
            <button
              type="button"
              onClick={(event) => handleEditClick(event, trilha)}
            >
              Editar
            </button>
            <button type="button" onClick={() => handleDeleteClick(trilha.id)}>
              Deletar
            </button>
          </td>
        </tr>
      );
    }
  }
};

export default ReadOnlyRow;