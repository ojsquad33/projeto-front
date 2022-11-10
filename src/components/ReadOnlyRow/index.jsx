import React from "react";

const ReadOnlyRow = ({ trilha, handleEditClick, handleDeleteClick }) => {
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
};

export default ReadOnlyRow;