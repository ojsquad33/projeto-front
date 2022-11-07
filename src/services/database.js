import ImageFullStack from "../assets/fullstack.png";
import ImageQA from "../assets/qa.png";
import ImageUXUI from "../assets/ui_ux.png";

const trilhas = [
  {
    page: 1,
    content: [
      {
        id: 1,
        trilha: "Desenvolvimento Full Stack",
        imagem: ImageFullStack,
        descricao:
          "Nesta trilha, você encontrará materiais sobre lógica de programação, git e github, java, typescript, python e muito mais!",
        selected: false,
        modulos: [
          {
            nome: "Geral",
            aulas: [
              "Lógica de Programação e Algoritmos",
              "Shell Script: Introdução e Como Automatizar Tarefas",
              "Versionamento com Git",
              "Git e Github para iniciantes",
              "Introdução a Banco de Dados e Linguagem SQL",
            ],
          },
          {
            nome: "Typescript",
            aulas: [
              "Typescript Básico",
              "Typescript Intermediário",
              "Typescript Avançado",
            ],
          },
          { nome: "Python" },
          { nome: "C++" },
          { nome: "Java" },
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
            nome: "Trilha 1",
            aulas: ["Aula 1", "Aula 2", "Aula 3"],
          },
          { nome: "Trilha 2" },
          { nome: "Trilha 3" },
          { nome: "Trilha 4" },
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
            nome: "Trilha 1",
            aulas: ["Aula 1", "Aula 2"],
          },
          { nome: "Trilha 2" },
        ],
      },
    ],
  },
  {
    page: 2,
    content: [
      {
        id: 4,
        trilha: "Soft Skills",
        imagem: ImageFullStack,
        descricao: "Trilha sobre Soft Skills!",
        selected: false,
        modulos: [
          {
            nome: "Trilha 1",
            aulas: ["Aula 1", "Aula 2", "Aula 3", "Aula 4"],
          },
          { nome: "Trilha 2" },
          { nome: "Trilha 3" },
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
            nome: "Trilha 1",
            aulas: ["Aula 1", "Aula 2", "Aula 3", "Aula 4", "Aula 5"],
          },
          { nome: "Trilha 2" },
          { nome: "Trilha 3" },
          { nome: "Trilha 4" },
          { nome: "Trilha 5" },
        ],
      },
    ],
  },
];

export default trilhas;
