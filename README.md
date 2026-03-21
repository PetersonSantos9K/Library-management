# 🚀 Sistema Full Stack - Gerenciador de Biblioteca

Aplicação full-stack desenvolvida para gerenciamento de uma biblioteca, com foco em organização, produtividade e boas práticas de arquitetura.

---

## 🧱 Arquitetura do Projeto

Este repositório segue o padrão **monorepo**, contendo:

* 📦 **backend-spring** → API principal (produção)
* 🧪 **backend-javalin-beta** → versão inicial (descontinuada)
* 🎨 **frontend** → interface do usuário

---

## 📌 Sobre o Projeto

O sistema foi inicialmente desenvolvido utilizando  **Javalin**, com o objetivo de validar rapidamente as regras de negócio e estrutura da aplicação.

Após essa fase inicial, o backend foi reestruturado utilizando **Spring Boot**, visando:

* Melhor organização do código
* Maior escalabilidade
* Uso de injeção de dependência
* Facilidade na construção de APIs REST robustas
  
---

## 🚀 Tecnologias Utilizadas

### Backend (versão final)

* Java
* Spring Boot
* Maven

### Backend (versão inicial)

* Java
* Javalin

### Frontend

* JavaScript
* React
  
---

## 🎯 Funcionalidades

* Cadastro de usuario
* Adicionar autor
* Adicionar livros
* Listagem de autores e livros
* Exclusão de autores ou livros

---

## ▶️ Como Executar o Projeto

### 🔹 Backend (Spring Boot)

```bash
cd backend-spring
./mvnw spring-boot:run
```

### 🔹 Frontend

```bash
cd frontend
npm install
npm run dev
```

---

## 🧪 Versão Beta (Javalin)

A versão com Javalin foi utilizada como base inicial do projeto.

Ela foi importante para:

* Validação das regras de negócio
* Testes rápidos de endpoints
* Definição da estrutura da aplicação

⚠️ Atualmente esta versão não é mais utilizada em produção.

---

## 📚 Aprendizados

Durante o desenvolvimento deste projeto, foram aplicados conceitos como:

* Arquitetura de APIs REST
* Separação de responsabilidades
* Diferença entre microframeworks e frameworks completos
* Evolução de projeto (refatoração e melhoria de stack)

---

## 🧠 Decisões Técnicas

* Utilização inicial do Javalin para rapidez no desenvolvimento
* Migração para Spring Boot visando escalabilidade e organização
* Separação entre backend e frontend para melhor manutenção

---

## 📁 Estrutura de Pastas

```bash
📁 projeto
 ┣ 📁 backend-javalin-beta
 ┣ 📁 backend-spring
 ┣ 📁 frontend
 ┣ 📁 docs
 ┗ 📄 README.md
```
---

