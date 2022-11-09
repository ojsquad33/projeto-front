import ImageFullStack from "../assets/fullstack.png";
import ImageQA from "../assets/qa.png";
import ImageUXUI from "../assets/ui_ux.png";

const trilhasSemPaginacao = [
  {
    id: 1,
    trilha: "Desenvolvimento Full Stack",
    imagem: ImageFullStack,
    descricao:
      "Nesta trilha, você encontrará materiais sobre lógica de programação, git e github, java, typescript, python e muito mais!",
    selected: false,
    modulos: [
      {
        id: 1,
        nome: "Geral",
        aulas: [
          "Lógica de Programação e Algoritmos",
          "Shell Script: Introdução e Como Automatizar Tarefas",
          "Versionamento com Git",
          "Git e Github para iniciantes",
          "Introdução a Banco de Dados e Linguagem SQL",
        ],
        trilha_id: 1,
      },
      {
        id: 2,
        nome: "Typescript",
        aulas: [
          "Typescript Básico",
          "Typescript Intermediário",
          "Typescript Avançado",
        ],
        trilha_id: 1,
      },
      { id: 3, nome: "Python", trilha_id: 1 },
      { id: 4, nome: "C++", trilha_id: 1 },
      { id: 5, nome: "Java", trilha_id: 1 },
    ],
  },
  {
    id: 2,
    trilha: "UX/UI Designer",
    imagem: ImageQA,
    descricao: "Trilha sobre UX/UI!",
    selected: false,
    modulos: [
      {
        id: 6,
        nome: "Trilha 1",
        aulas: ["Aula 1", "Aula 2", "Aula 3"],
        trilha_id: 2,
      },
      { id: 7, nome: "Trilha 2", trilha_id: 2 },
      { id: 8, nome: "Trilha 3", trilha_id: 2 },
      { id: 9, nome: "Trilha 4", trilha_id: 2 },
    ],
  },
  {
    id: 3,
    trilha: "Quality Assurance (QA)",
    imagem: ImageUXUI,
    descricao: "Trilha sobre QA!",
    selected: false,
    modulos: [
      {
        id: 10,
        nome: "Trilha 1",
        aulas: ["Aula 1", "Aula 2"],
        trilha_id: 3,
      },
      { id: 11, nome: "Trilha 2", trilha_id: 3 },
    ],
  },

  {
    id: 4,
    trilha: "Soft Skills",
    imagem: ImageFullStack,
    descricao: "Trilha sobre Soft Skills!",
    selected: false,
    modulos: [
      {
        id: 12,
        nome: "Trilha 1",
        aulas: ["Aula 1", "Aula 2", "Aula 3", "Aula 4"],
        trilha_id: 4,
      },
      { id: 13, nome: "Trilha 2", trilha_id: 4 },
      { id: 14, nome: "Trilha 3", trilha_id: 4 },
    ],
  },
  {
    id: 5,
    trilha: "Banco de Dados",
    imagem: ImageUXUI,
    descricao: "Trilha sobre Soft Skills!",
    selected: false,
    modulos: [
      {
        id: 15,
        nome: "Trilha 1",
        aulas: ["Aula 1", "Aula 2", "Aula 3", "Aula 4", "Aula 5"],
        trilha_id: 5,
      },
      { id: 16, nome: "Trilha 2", trilha_id: 5 },
      { id: 17, nome: "Trilha 3", trilha_id: 5 },
      { id: 18, nome: "Trilha 4", trilha_id: 5 },
      { id: 19, nome: "Trilha 5", trilha_id: 5 },
    ],
  },
];

export default trilhasSemPaginacao;
