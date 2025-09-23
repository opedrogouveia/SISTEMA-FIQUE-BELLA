-- SOMENTE PARA DESENVOLVIMENTO INICIAL BABINHA

CREATE TABLE usuarios (
  id SERIAL PRIMARY KEY,
  nome VARCHAR(255) NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL,
  senha VARCHAR(255) NOT NULL
);

CREATE TABLE clientes (
  id SERIAL PRIMARY KEY,
  nome VARCHAR(255) NOT NULL,
  telefone VARCHAR(20) NOT NULL
);

CREATE TABLE servicos (
  id SERIAL PRIMARY KEY,
  nome VARCHAR(255) NOT NULL,
  descricao TEXT,
  preco DECIMAL(10, 2) NOT NULL
);
  
INSERT INTO clientes (nome, telefone) VALUES
('Maria Silva', '(11) 98765-4321'),
('Ana Paula', '(11) 99887-7665'),
('Juliana Santos', '(11) 97654-3210');

INSERT INTO servicos (nome, descricao, preco) VALUES
('Corte de Cabelo', 'Corte e finalização', 60.00),
('Manicure e Pedicure', 'Serviço completo de unhas', 45.00),
('Hidratação Capilar', 'Tratamento de hidratação com produtos profissionais', 80.00),
('Mechas', 'Serviço de descoloração e coloração das mechas', 250.00);