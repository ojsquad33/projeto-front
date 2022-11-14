import { React, useState } from "react";
import "./style.css";

const ReadOnlyRow = ({ trilha, handleEditClick, handleDeleteClick, opcao }) => {
  {
    if (opcao == "Trilhas") {
      return (
        <tr className="linha">
          <td>{trilha.trilha}</td>
          <td>URL - Imagem</td>
          <td>{trilha.descricao}</td>
          <td className="btn-action">
            <button
              type="button"
              className="button-editar"
              onClick={(event) => handleEditClick(event, trilha)}
            ></button>
            <button
              type="button"
              className="button-deletar"
              onClick={() => handleDeleteClick(trilha.id)}
            ></button>
          </td>
        </tr>
      );
    } else if (opcao == "Cursos") {
      return (
        <tr className="linha">
          <td>{trilha.nome}</td>
          <td>Descrição dos cursos</td>
          <td className="btn-action">
            <button
              type="button"
              className="button-editar"
              onClick={(event) => handleEditClick(event, trilha)}
            ></button>
            <button
              type="button"
              className="button-deletar"
              onClick={() => handleDeleteClick(trilha.id)}
            ></button>
          </td>
        </tr>
      );
    } else if (opcao == "Aulas") {
      return (
        <tr className="linha">
          <td>{trilha.nome}</td>
          <td>{trilha.aulas}</td>
          <td>Professor</td>
          <td>URL</td>
          <td>Tipo</td>
          <td className="btn-action">
            <button
              type="button"
              className="button-editar"
              onClick={(event) => handleEditClick(event, trilha)}
            ></button>
            <button
              type="button"
              className="button-deletar"
              onClick={() => handleDeleteClick(trilha.id)}
            ></button>
          </td>
        </tr>
      );
    } else if (opcao == "Usuários") {
      return (
        <tr className="linha">
          <td>{trilha.nome}</td>
          <td>{trilha.email}</td>
          <td className="btn-action">
            <button
              type="button"
              className="button-editar"
              onClick={(event) => handleEditClick(event, trilha)}
            ></button>
            <button
              type="button"
              className="button-deletar"
              onClick={() => handleDeleteClick(trilha.id)}
            ></button>
          </td>
        </tr>
      );
    }
  }
};

export default ReadOnlyRow;
