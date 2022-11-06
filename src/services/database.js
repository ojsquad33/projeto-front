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
            nome: "Javascript",
            aulas: [
              "Lógica de Programação e Algoritmos",
              "Shell Script: Introdução e Como Automatizar Tarefas",
              "Versionamento com Git",
              "Git e Github para iniciantes",
              "Introdução a Banco de Dados e Linguagem SQL",
            ],
          },
          { nome: "Typescript" },
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
      },
      {
        id: 3,
        trilha: "Quality Assurance (QA)",
        imagem: ImageUXUI,
        descricao: "Trilha sobre QA!",
        selected: false,
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
      },
      {
        id: 5,
        trilha: "PostgreSQL",
        imagem: ImageUXUI,
        descricao: "Trilha sobre Soft Skills!",
        selected: false,
      },
    ],
  },
];

export default trilhas;
