# 🏭 Metal Stock - Sistema de Gerenciamento de Estoque

> Sistema completo de gerenciamento de estoque desenvolvido para empresas do setor metalúrgico e distribuidoras de materiais metálicos.

![React](https://img.shields.io/badge/React-19.2.0-blue?style=flat&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9.3-blue?style=flat&logo=typescript)
![Vite](https://img.shields.io/badge/Vite-7.2.4-646CFF?style=flat&logo=vite)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4.1.18-38B2AC?style=flat&logo=tailwind-css)
![License](https://img.shields.io/badge/License-MIT-green?style=flat)

## 📋 Índice

- [Sobre o Projeto](#sobre-o-projeto)
- [Problema que Resolve](#problema-que-resolve)
- [Funcionalidades](#funcionalidades)
- [Telas Principais](#telas-principais)
- [Diferenciais](#diferenciais)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Instalação](#instalação)
- [Como Usar](#como-usar)
- [Estrutura do Projeto](#estrutura-do-projeto)

---

## 🎯 Sobre o Projeto

O **Metal Stock** é um sistema web moderno e intuitivo para gerenciamento de estoque, especialmente desenvolvido para atender as necessidades de empresas do setor metalúrgico, distribuidoras de materiais de construção e ferragens. O sistema oferece controle completo sobre produtos, movimentações de estoque e alertas de reposição.

### 🎥 Demonstração

[Em desenvolvimento - adicionar screenshots ou GIF do sistema em funcionamento]

---

## 💡 Problema que Resolve

Muitas empresas de pequeno e médio porte ainda utilizam **planilhas** ou **controles manuais** para gerenciar seus estoques, o que gera diversos problemas:

- ❌ **Falta de visibilidade em tempo real** sobre níveis de estoque
- ❌ **Ausência de alertas automáticos** para produtos com estoque baixo
- ❌ **Dificuldade em rastrear movimentações** (entradas e saídas)
- ❌ **Cálculo manual** do valor total do estoque
- ❌ **Perda de informações** por falta de centralização
- ❌ **Lentidão na busca** de informações de produtos
- ❌ **Falta de controle** sobre quem acessa e modifica o estoque

### ✅ Solução

O Metal Stock oferece uma solução completa e fácil de usar que:

- ✅ Centraliza todas as informações de estoque em um único lugar
- ✅ Fornece alertas automáticos de produtos com estoque baixo
- ✅ Permite rastreamento detalhado de todas as movimentações
- ✅ Calcula automaticamente o valor total do estoque
- ✅ Oferece busca rápida e eficiente de produtos
- ✅ Controla acesso através de sistema de autenticação
- ✅ Interface intuitiva que não requer treinamento complexo

---

## ⚙️ Funcionalidades

### 📊 Dashboard

- Visão geral do estoque com métricas em tempo real
- Total de produtos cadastrados
- Quantidade total de unidades em estoque
- Valor total do estoque (cálculo automático)
- Número de funcionários/usuários ativos
- **Alertas de estoque baixo** (produtos que atingiram o nível mínimo)

### 📦 Gerenciamento de Produtos

- **Cadastro completo** de produtos com:
  - Código único gerado automaticamente
  - Nome e descrição
  - Categoria
  - Localização no estoque
  - Quantidade inicial e mínima
  - Valor unitário
  - Fornecedor
- **Edição** de informações de produtos
- **Exclusão** de produtos
- **Listagem** com todos os produtos cadastrados
- **Busca e filtros** para encontrar produtos rapidamente

### 🔄 Movimentação de Estoque

- Registro de **entradas** (compras, devoluções)
- Registro de **saídas** (vendas, perdas, ajustes)
- Motivo da movimentação para rastreabilidade
- Cálculo automático do novo estoque
- Prevenção de estoque negativo

### 👥 Gerenciamento de Funcionários

- Cadastro de usuários do sistema
- Controle de tipos de acesso:
  - **ADMIN**: Acesso completo ao sistema
  - **EMP** (Funcionário): Acesso limitado
- Visualização de funcionários cadastrados

### 🔐 Sistema de Autenticação

- Tela de login segura
- Validação de credenciais
- Controle de sessão

### 🔍 Busca de Produtos

- Busca rápida por nome, código ou categoria
- Interface dedicada para consultas

---

## 🖥️ Telas Principais

### 1. **Dashboard (Tela Inicial)**
   -Cards com métricas principais
   - Alertas de estoque baixo em destaque
   - Visão geral do negócio

### 2. **Lista de Produtos**
   - Tabela completa com todos os produtos
   - Ações rápidas: editar, excluir, movimentar estoque
   - Botão para adicionar novo produto

### 3. **Adicionar Produto**
   - Formulário completo de cadastro
   - Validação de campos
   - Geração automática de código

### 4. **Modal de Movimentação de Estoque**
   - Seleção do tipo de movimentação (entrada/saída)
   - Informações do produto atual
   - Cálculo em tempo real do novo estoque
   - Campo para informar motivo

### 5. **Gerenciamento de Funcionários**
   - Cards com informações dos funcionários
   - Opção de adicionar novos usuários
   - Visualização de perfis e funções

### 6. **Busca de Produtos**
   - Interface otimizada para pesquisa
   - Resultados em tempo real

### 7. **Login**
   - Autenticação segura
   - Validação com Zod
   - Redirecionamento automático

---

## 🚀 Diferenciais

### 1. **Interface Moderna e Intuitiva**
   - Design limpo e profissional
   - Facilidade de uso sem necessidade de treinamento extensivo
   - Responsivo para uso em diferentes dispositivos

### 2. **Alertas Inteligentes**
   - Sistema automático de alerta quando produtos atingem o estoque mínimo
   - Destaque visual para produtos críticos
   - Prevenção proativa de rupturas de estoque

### 3. **Rastreabilidade Completa**
   - Registro de todas as movimentações
   - Motivos documentados para cada entrada/saída
   - Histórico de alterações

### 4. **Cálculos Automáticos**
   - Valor total do estoque calculado em tempo real
   - Atualização automática das quantidades após movimentações
   - Previsão do novo estoque antes de confirmar movimentações

### 5. **Sem Necessidade de Backend**
   - Armazenamento local usando LocalStorage
   - Funciona offline
   - Sem custos de servidor
   - Ideal para pequenas e médias empresas

### 6. **Geração Automática de Códigos**
   - Códigos únicos gerados automaticamente para cada produto
   - Padronização na identificação
   - Eliminação de erros de digitação

### 7. **Validação Robusta**
   - Uso de React Hook Form e Zod
   - Validação em tempo real
   - Mensagens de erro claras

### 8. **Performance Otimizada**
   - Construído com Vite para desenvolvimento veloz
   - React 19 com melhorias de performance
   - Carregamento rápido e experiência fluida

---

## 🛠️ Tecnologias Utilizadas

### Core
- **React 19.2.0** - Biblioteca para construção de interfaces
- **TypeScript 5.9.3** - Superset JavaScript com tipagem estática
- **Vite 7.2.4** - Build tool ultrarrápido

### UI/Styling
- **TailwindCSS 4.1.18** - Framework CSS utilitário
- **Material-UI 7.3.7** - Componentes React do Material Design
- **Emotion** - CSS-in-JS
- **Lucide React 0.563.0** - Ícones modernos

### Gerenciamento de Formulários
- **React Hook Form 7.71.1** - Gerenciamento performático de formulários
- **Zod 4.3.6** - Validação de esquemas TypeScript-first
- **@hookform/resolvers** - Integração entre Zod e React Hook Form

### Roteamento
- **React Router DOM 7.13.0** - Navegação e roteamento

### Desenvolvimento
- **ESLint** - Linter para código JavaScript/TypeScript
- **TypeScript ESLint** - Regras ESLint para TypeScript

---

## 📥 Instalação

### Pré-requisitos

- Node.js (versão 18 ou superior)
- npm ou yarn

### Passos

1. **Clone o repositório**
   ```bash
   git clone https://github.com/seu-usuario/metal-stock.git
   cd metal-stock
   ```

2. **Instale as dependências**
   ```bash
   npm install
   # ou
   yarn install
   ```

3. **Execute o projeto**
   ```bash
   npm run dev
   # ou
   yarn dev
   ```

4. **Acesse no navegador**
   ```
   http://localhost:5173
   ```

### Build para Produção

```bash
npm run build
# ou
yarn build
```

Os arquivos otimizados serão gerados na pasta `dist/`

---

## 📖 Como Usar

### 1. Primeiro Acesso
   - Faça login com as credenciais padrão (ou configure seu primeiro usuário)
   - Você será redirecionado para o Dashboard

### 2. Cadastrar Produtos
   - No menu lateral, clique em "Produtos"
   - Clique no botão "Novo Produto"
   - Preencha as informações do produto
   - O código será gerado automaticamente
   - Clique em "Salvar Produto"

### 3. Movimentar Estoque
   - Na lista de produtos, clique no ícone de movimentação
   - Selecione o tipo: Entrada ou Saída
   - Informe a quantidade
   - Adicione um motivo (opcional, mas recomendado)
   - Visualize o novo estoque antes de confirmar
   - Clique em "Confirmar"

### 4. Monitorar Alertas
   - No Dashboard, os produtos com estoque baixo aparecem destacados
   - Use essas informações para fazer pedidos de reposição

### 5. Gerenciar Funcionários
   - Acesse "Funcionários" no menu lateral
   - Adicione novos usuários definindo nome, email e tipo de acesso
   - Gerencie permissões conforme necessário

---

## 📁 Estrutura do Projeto

```
metal-stock/
├── src/
│   ├── components/          # Componentes reutilizáveis
│   │   ├── badge/
│   │   ├── button/
│   │   ├── card/
│   │   ├── select/
│   │   ├── sidebar/
│   │   ├── table/
│   │   ├── text-field/
│   │   └── ...
│   ├── pages/               # Páginas da aplicação
│   │   ├── dashboard/       # Dashboard com métricas
│   │   ├── products/        # Listagem e gerenciamento
│   │   ├── add-products/    # Cadastro de produtos
│   │   ├── employees/       # Gerenciamento de usuários
│   │   ├── search-product/  # Busca de produtos
│   │   └── login/           # Autenticação
│   ├── context/             # Contexts da aplicação
│   │   ├── authContext.tsx
│   │   ├── employeeContext.tsx
│   │   └── productContext.tsx
│   ├── layouts/             # Layouts padrão
│   │   └── dashboardLayout.tsx
│   ├── utils/               # Funções utilitárias
│   │   ├── currency.ts
│   │   ├── date.ts
│   │   └── products.ts
│   ├── _schemas/            # Esquemas de validação Zod
│   │   └── auth-schema.ts
│   ├── constant/            # Constantes da aplicação
│   │   └── Auth.ts
│   ├── App.tsx              # Componente principal
│   └── main.tsx             # Ponto de entrada
├── public/                  # Arquivos públicos
├── package.json
├── vite.config.ts
├── tsconfig.json
└── README.md
```

---

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

## 👨‍💻 Desenvolvedor

Desenvolvido com ❤️ para otimizar o gerenciamento de estoque em empresas do setor metalúrgico.

---

## 🤝 Contribuindo

Contribuições são sempre bem-vindas! Sinta-se à vontade para abrir issues ou enviar pull requests.

---

<p align="center">
  <strong>Metal Stock</strong> - Controle de Estoque Inteligente 📦
</p
