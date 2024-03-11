CREATE TABLE usuario (
	id INTEGER PRIMARY KEY,
    nome VARCHAR(100),
    email VARCHAR(200),
    senha VARCHAR(200)
);

CREATE TABLE atividade (
	id INTEGER PRIMARY KEY,
    titulo VARCHAR(100),
    descricao VARCHAR(200),
    data DATETIME
);

CREATE TABLE usuario_atividade (
	usuario_id INTEGER,
    atividade_id INTEGER,
    entrega DATETIME,
    nota DECIMAL(3,2),
    
	PRIMARY KEY (usuario_id, atividade_id),
	FOREIGN KEY(usuario_id1) REFERENCES usuario(id),
    FOREIGN KEY(atividade_id) REFERENCES atividade(id)
);
