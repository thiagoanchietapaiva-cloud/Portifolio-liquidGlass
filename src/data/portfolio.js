export const ISLANDS = [
  { id: "sobre", label: "SOBRE", x: 0.12, y: 0.20, w: 0.18, h: 0.18, size: 92, color: "#8b5cf6", floatSpeed: 0.0007, floatOffset: 0 },
  { id: "projetos", label: "PROJETOS", x: 0.45, y: 0.62, w: 0.22, h: 0.22, size: 108, color: "#06ffa5", floatSpeed: 0.001, floatOffset: 2.5 },
  { id: "skills", label: "SKILLS", x: 0.78, y: 0.15, w: 0.16, h: 0.16, size: 76, color: "#f472b6", floatSpeed: 0.0008, floatOffset: 5 },
  { id: "contato", label: "CONTATO", x: 0.80, y: 0.60, w: 0.14, h: 0.14, size: 66, color: "#fbbf24", floatSpeed: 0.0011, floatOffset: 1.2 },
];

export const SKILLS = [
  { name: "JavaScript", color: "#facc15", icon: "JS" },
  { name: "React", color: "#22d3ee", icon: "⚛" },
  { name: "Node.js", color: "#06ffa5", icon: "⬢" },
  { name: "TypeScript", color: "#3b82f6", icon: "TS" },
  { name: "Python", color: "#60a5fa", icon: "Py" },
  { name: "Git", color: "#f05032", icon: "⎇" },
  { name: "Tailwind", color: "#06b6d4", icon: "≋" },
  { name: "SQL", color: "#8b5cf6", icon: "◫" },
];

export const PROJECTS = [
  {
    id: "01",
    title: "Fresh Tomatoes - Avaliação de Filmes",
    desc: "Aplicação web de filmes feita com React e Tailwind CSS, consumindo a API do TMDB para listar lançamentos, populares e mais bem avaliados, com busca, página de detalhes e nota em tomates. Conta com cadastro e login de usuários através de uma API própria, desenvolvida por mim em Node.js, que armazena e-mail, usuário e senha.",
    stack: ["React", "Tailwind CSS", "Vite", "React Router", "API TMDB", "Node.js", "Express", "Prisma", "PostgreSQL"],
    color: "#f97316",
    github: "https://github.com/thiagoanchietapaiva-cloud/Frash-Tomates-2.1",
    demo: "https://react-todolist-35pu.onrender.com"
  },
  {
    id: "02",
    title: "Landing Page - ANIMEWEAR",
    desc: "Landing page fictícia de uma loja de camisas de anime. Inspirada na mesma estrutura do projeto Meow Café, mas com identidade totalmente nova voltada para o público geek. Foco em conversão com botões com micro-interações, grade de produtos responsiva e hero com modelo vestindo a peça.",
    stack: ["HTML5", "CSS3", "Javascript", "React"],
    color: "#06ffa5",
    github: "https://github.com/thiagoanchietapaiva-cloud/React-Anime-Wear",
    demo: "https://lojageek.onrender.com"
  },
  {
    id: "03",
    title: "Online Stores - Loja",
    desc: "Aplicação web de e-commerce construída do zero utilizando React. Este projeto demonstra a criação de uma loja virtual completa e escalável, com foco em design responsivo. Inclui recursos como catálogo de produtos, sistema de busca e persistência de dados no carrinho.",
    stack: ["HTML5", "CSS3", "Javascript", "React"],
    color: "#f472b6",
    github: "https://github.com/thiagoanchietapaiva-cloud/reactFakeStore",
    demo: "https://reactfakestore.onrender.com/"
  },
];

export const BIO = "Sou Thiago Anchieta, dev Fullstack focado em criar interfaces que as pessoas realmente gostam de usar. Transformo ideias em produtos funcionais com Java, JavaScript, HTML, CSS, React, TypeScript e Tailwind. Apaixonado por resolver problemas, deixar tudo fluido e entregar deploy que funciona de verdade. Atualmente construindo projetos reais e cursando Análise e Desenvolvimento de Sistemas.";