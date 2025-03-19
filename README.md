# 🗳️ **CoopVote** - Sistema de Votação Cooperativa

### Uma solução para gerenciar e participar de sessões de votação em assembleias de cooperativas.

---

## 📖 **Sobre o Projeto**

O **CoopVote** é uma plataforma desenvolvida para gerenciar sessões de votação em assembleias de cooperativas. Utilizando **Spring Boot** e arquitetura RESTful, a aplicação permite o cadastro de pautas, a abertura de sessões de votação, o recebimento de votos dos associados e a contabilização dos resultados. A comunicação é feita via JSON, e a aplicação é escalável, garantindo desempenho em cenários com muitos votos.

### Principais Funcionalidades:

- **Cadastrar Pautas**: Adicionar novas pautas para votação.
- **Abrir Sessões de Votação**: Iniciar uma votação com duração configurável (default: 1 minuto).
- **Receber Votos**: Associados podem votar 'Sim' ou 'Não' em uma pauta.
- **Contabilizar Resultados**: Exibir o total de votos e o resultado final da votação.

---

## 🚀 **Como Executar o Projeto**

### 🔧 **Pré-requisitos**

- **Java 17+**
- **Maven**

### 🏃 **Passos para rodar a aplicação localmente**

1. **Clone o repositório**:
   ```bash
   git clone https://github.com/Mayronsf/CoopVote.git
   cd CoopVote
   ```

2. **Compile o projeto** com Maven:
   ```bash
   mvn clean install
   ```

3. **Execute a aplicação**:
   ```bash
   mvn spring-boot:run
   ```

4. A aplicação estará disponível em:  
   [http://localhost:8080](http://localhost:8080)

5. A documentação da API estará disponível em:  
   [http://localhost:8080/swagger-ui.html](http://localhost:8080/swagger-ui.html)

---

## 🔨 **API Endpoints**

Aqui estão alguns exemplos dos principais endpoints da API:

### 1. **Cadastrar Pauta**
- **Método**: `POST /api/pautas`
- **Corpo da Requisição**:
  ```json
  {
    "titulo": "Título da Pauta",
    "descricao": "Descrição da pauta"
  }
  ```
- **Resposta**:
  ```json
  {
    "id": 1,
    "titulo": "Título da Pauta",
    "descricao": "Descrição da pauta",
    "status": "Criada"
  }
  ```

### 2. **Abrir Sessão de Votação**
- **Método**: `POST /api/pautas/{id}/abrir`
- **Corpo da Requisição**:
  ```json
  {
    "tempo": 1
  }
  ```
- **Resposta**:
  ```json
  {
    "id": 1,
    "titulo": "Título da Pauta",
    "status": "Votação aberta",
    "tempoRestante": "1 minuto"
  }
  ```

### 3. **Votar em uma Pauta**
- **Método**: `POST /api/pautas/{id}/votar`
- **Corpo da Requisição**:
  ```json
  {
    "associadoId": "12345",
    "voto": "Sim"
  }
  ```
- **Resposta**:
  ```json
  {
    "status": "Voto registrado com sucesso"
  }
  ```

### 4. **Contabilizar Resultados**
- **Método**: `GET /api/pautas/{id}/resultado`
- **Resposta**:
  ```json
  {
    "sim": 10,
    "nao": 5,
    "resultado": "Aprovado"
  }
  ```

---

## 🧪 **Testes Automatizados**

Utilizamos **JUnit** para garantir a qualidade e robustez da aplicação.

- Para rodar os testes automatizados:
  ```bash
  mvn test
  ```

---

## 🌍 **Tecnologias Usadas**

- **Spring Boot**: Framework principal.
- **JPA/H2**: Para persistência de dados.
- **Swagger**: Para documentação da API.
- **JUnit**: Testes automatizados.

---

## 🎯 **Tarefas Bônus**

### 1. **Integração com Sistemas Externos**
   Criamos uma API fake para validação de CPFs que retorna aleatoriamente se o CPF é válido ou não. Caso o CPF seja válido, a API informa se o usuário pode ou não votar.

### 2. **Performance**
   A aplicação foi otimizada para cenários com grandes volumes de votos, garantindo escalabilidade e performance.

### 3. **Versionamento da API**
   Implementação de versionamento da API para garantir compatibilidade e facilidade na manutenção.

---

## 💡 **Contribuições**

Contribuições são bem-vindas! Para contribuir com o projeto, siga estas etapas:

1. Fork o repositório.
2. Crie uma branch para sua feature:  
   `git checkout -b minha-feature`
3. Comite suas alterações:  
   `git commit -am 'Adiciona nova feature'`
4. Envie para o repositório remoto:  
   `git push origin minha-feature`
5. Crie um Pull Request.

---

## 📝 **Licença**

Este projeto está licenciado sob a **MIT License**.

---

## 👨‍💻 **Autores**

- **Mayron Janiel** - Desenvolvimento Backend

---

## 🎨 **Design do Projeto**

- **Responsável pelo design:** [Mayron]
