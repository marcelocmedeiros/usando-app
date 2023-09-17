# Curso de Next.JS

<p align="center">
<img src="./imagens/ApresentacaoExterna.png" alt="Tela incial" width="400px"></img>
<img src="./imagens/ApresentacaoInterna.png" alt="Tela incial" width="400px"></img>
<!-- <img src="./imagens/Movimentacao.gif" alt="Aplicação funcionando" width="421px"></img> -->
</p>

## 🤔 O que é este projeto

Este projeto foi desenvolvido para aprender como utilizar o Next.JS.

Este curso foi dividido em dois projetos feitos com Next.JS.

Esse projeto será voltado para pasta “app” que já está no modo full de produção. As rota estabelecidas dentro da pasta app mos muitos recursos interessantes inclusive um recurso que é do próprio react que é a questão de componentes do lado do servidor que é forma como vai ser construído os componentes, as páginas, layouts, rotas, tudo isso a parte dos links, navegação, a parte de carregar interface, manipulação de erro tudo isso será explorado nesse projeto.

Este projeto será construído como se fosse uma aplicação construindo uma landing page, e uma área administrativa. Não terá login. Mas terá dois templates diferentes, um interno e outro externo onde serão explorados os recursos da pasta app.

É necessário conhecimento prévio dos fundamentos de React.

Nas palavras do site do Next.JS:

“Next.JS são todas as ferramentas que você precisa para criar a Web. Mais rápido.”

“Next.js permite que você crie aplicativos Web full-stack, estendendo os recursos mais recentes do React e integrando poderosas ferramentas JavaScript baseadas em Rust para compilações mais rápidas.”

Este projeto faz parte do Módulo Especialista, na Trilha: React & Next, do curso Next.JS da Formação DEV.

## 🖥️ Como rodar este projeto

O projeto foi criado via terminal, inicialmente escolha onde a pasta do projeto será criada então direcione o seu terminal até lá para criar o projeto usando-app com Next.JS pelo comando: <code>npx create-next-app@latest usando-app</code>.

Em seguida vai abrir as configurações do projeto e escolher "yes" para todas as opções: TypeScrip, ESlint, Tailwind CSS, 'src/', .App Router e import alias.

Entre na pasta do projeto criado.

E cole o seguinte comando <code>npm install @tabler/icons-react</code>.

A partir daqui você pode copiar as pastas e arquivos para dentro do projeto que foi criado.

Para rodar o projeto use o comando <code>npm rum dev</code> dentro da pasta do projeto.

## 🕹️ Como usar este projeto

Uma vez que a aplicação esteja rodando, você pode navegar clicando no menu da aplicação onde é demonstrado alguns exemplos em forma de exercícios de como o Next.JS funciona com as rotas e renderização.

## ⚙️ Tecnologias usadas no projeto

- ![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=plastic&logo=html5&logoColor=white)
- ![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=plastic&logo=css3&logoColor=white)
- ![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?logo=tailwind-css&logoColor=white)
- ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?logo=javascript&logoColor=%23F7DF1E)
- ![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?logo=typescript&logoColor=white)
- ![React](https://img.shields.io/badge/react-%2320232a.svg?logo=react&logoColor=%2361DAFB)
- ![Next JS](https://img.shields.io/badge/Next-black?logo=next.js&logoColor=white)

## 🗒️ Features do projeto

<!-- caracteristicas do projeto resumidas mas não é necessaria-->

- No menu do projeto demonstra com exemplos práticos como aprendemos rotas e renderização com Next.JS na pasta app.

## 🗂️ Como este projeto está organizado

<!-- dar uma ideais geral não precisa ser detalhista -->

Na raiz do projeto existe uma pasta src e dentro dela pasta app é onde será organizado toda aplicação. Dentro da pasta app destacamos outras 3 pastas:

- Pasta (interna)-> contém os templates internos da aplicação e suas rotas.
- Pasta (externa) -> contém os templates externos da aplicação.
- Pasta shared -> contém os componentes compartilhados da aplicação.

## 👩‍💻 Como este projeto foi implementado

<!-- Aqui pode ser usado uma linguagem, mas técnica e não escrever demais-->

Este projeto foi implementado com HTML, CSS, JavaScript, TypeScript, TailwindCSS, React, todas essas tecnologias integradas pelo Next.JS.

A pasta (interna) vai tratar dos templates e rotas da aplicação.

A pasta (externa) vai tratar dos templates externos da aplicação.

Já pasta shared vamos utilizá-la para componentes que serão compartilhados por toda a aplicação.

## ⭐ Dependências principais

<!-- API's importantes-->

Quando da criação do projeto com Next.JS na parte de configuração colocamos "yes" para as seguintes dependências: ESlint, Tailwind CSS.

Além dessas dependências usamos uma dependência de ícones do site [tabler-icons.io](https://tabler-icons.io/).

## 🆘 Precisa de ajuda?

Você pode me contatar através desses contatos:

[![Linkedin](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/marcelocmdev/)
[![Gmail](https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white)](marcelocmdev@gmail.com)
[![Instagram](https://img.shields.io/badge/Instagram-%23E4405F.svg?style=for-the-badge&logo=Instagram&logoColor=white)](https://www.instagram.com/marcellocmedeiros/)
[![whatsapp](https://img.shields.io/badge/WhatsApp-25D366?style=for-the-badge&logo=whatsapp&logoColor=white)](https://api.whatsapp.com/send?phone=5583999666768)

---

<p align="center">Feito com 🧑‍💻 por Marcelo no Curso Navegação com React.JS da [Formação DEV](https://escola.formacao.dev/)</p>

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
