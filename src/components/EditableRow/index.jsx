import React from "react";

const EditableRow = ({
  editFormData,
  handleEditFormChange,
  handleCancelClick,
}) => {
  var coluna1 = document.getElementById("coluna1").innerHTML;
  var coluna2 = document.getElementById("coluna2").innerHTML;
  return (
    <tr>
      <td>
        <input
          type="text"
          required="required"
          placeholder="ID"
          name="id"
          value={editFormData.id}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="text"
          required="required"
          placeholder={coluna1}
          name="trilha"
          value={editFormData.trilha}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="text"
          required="required"
          placeholder={coluna2}
          name="descricao"
          value={editFormData.descricao}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <button type="submit">Salvar</button>
        <button type="button" onClick={handleCancelClick}>
          Cancelar
        </button>
      </td>
    </tr>
  );
};

export default EditableRow;