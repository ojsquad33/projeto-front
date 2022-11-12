import React from "react";
import "./style/style.css";

const EditableRow = ({
  opcao,
  editFormData,
  handleEditFormChange,
  handleCancelClick,
}) => {
  if (opcao == "Trilhas"){
    return (
      <tr>
        <td>
          <input
            type="text"
            required="required"
            placeholder="Digite o nome da trilha..."
            defaultValue={editFormData.trilha}
            onChange={handleEditFormChange}
          ></input>
        </td>
        <td>
          <input
            type="text"
            required="required"
            placeholder="Digite o nome da trilha..."
            defaultValue="URL - Imagem"
            onChange={handleEditFormChange}
          ></input>
        </td>
        <td>
          <input
            type="text"
            required="required"
            placeholder="Digite a descrição..."
            defaultValue={editFormData.descricao}
            onChange={handleEditFormChange}
          ></input>
        </td>
        <td>
          <button className="salvar" type="submit"></button>
          <button className="cancelar" type="button" onClick={handleCancelClick}></button>
        </td>
      </tr>
    );
  }
  else if (opcao == "Cursos"){
    return (
      <tr>
        <td>
          <input
            type="text"
            required="required"
            placeholder="Digite o nome do curso..."
            defaultValue={editFormData.nome}
            onChange={handleEditFormChange}
          ></input>
        </td>
        <td>
          <input
            type="text"
            required="required"
            placeholder="Digite o título das aulas..."
            defaultValue={editFormData.aulas}
            onChange={handleEditFormChange}
          ></input>
        </td>
        <td>
          <button className="salvar" type="submit"></button>
          <button className="cancelar" type="button" onClick={handleCancelClick}></button>
        </td>
      </tr>
    );
  }
  else if (opcao == "Aulas"){
    return (
      <tr>
        <td>
          <input
            type="text"
            required="required"
            placeholder="Digite o nome da aula..."
            defaultValue={editFormData.nome}
            onChange={handleEditFormChange}
          ></input>
        </td>
        <td>
          <input
            type="text"
            required="required"
            placeholder="Digite o conteúdo da aula..."
            defaultValue={editFormData.aulas}
            onChange={handleEditFormChange}
          ></input>
        </td>
        <td>
          <input
            type="text"
            required="required"
            placeholder="Digite o professor da aula..."
            defaultValue="Professor"
            onChange={handleEditFormChange}
          ></input>
        </td>
        <td>
          <input
            type="text"
            required="required"
            placeholder="Digite a URL da aula..."
            defaultValue="URL"
            onChange={handleEditFormChange}
          ></input>
        </td>
        <td>
          <input
            type="text"
            required="required"
            placeholder="Digite o tipo da aula..."
            defaultValue="Tipo"
            onChange={handleEditFormChange}
          ></input>
        </td>
        <td>
          <button className="salvar" type="submit"></button>
          <button className="cancelar" type="button" onClick={handleCancelClick}></button>
        </td>
      </tr>
    );
  }
  else if (opcao == "Usuários"){
    return (
      <tr>
        <td>
          <input
            type="text"
            required="required"
            placeholder="Digite o nome do usuário..."
            defaultValue={editFormData.nome}
            onChange={handleEditFormChange}
          ></input>
        </td>
        <td>
          <input
            type="text"
            required="required"
            placeholder="Digite o e-mail do usuário..."
            defaultValue={editFormData.email}
            onChange={handleEditFormChange}
          ></input>
        </td>
        <td>
          <button className="salvar" type="submit"></button>
          <button className="cancelar" type="button" onClick={handleCancelClick}></button>
        </td>
      </tr>
    );
  }
};

export default EditableRow;