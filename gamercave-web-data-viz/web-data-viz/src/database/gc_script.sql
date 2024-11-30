create database gamer_cave;
use gamer_cave;

create table usuario (
idUser int primary key auto_increment,
nome varchar(60),
username varchar(15),
email varchar(60),
dtNasc date,
senha varchar(45),
biografia varchar(150) default null
) auto_increment = 1000;

create table publicacao (
	idPubli int primary key auto_increment,
    conteudo varchar(150),
    fkUser int,
    constraint fk_user foreign key (fkUser) references usuario(idUser)
);

create table curtida (
	  idLike int,
    fkUser int,
    fkPubli int,
    constraint fkusuario foreign key (fkUSer) references usuario(idUser),
    constraint fk_publi foreign key (fkPubli) references publicacao(idPubli),
    constraint ChaveComposta primary key (idLike, fkUser, fkPubli)
);


create table preferencia (
	idPreferencia int primary key auto_increment,
	generoFav varchar(45),
    constraint chkGen
		check (generoFav in('Ação', 'Aventura', 'RPG', 'Battle Royale', 'Simulação', 'Indie', 'MOBA', 'Estratégia', 'Esporte', 'Plataforma', 'Horror')), 
    dispositivoFav varchar(45),
    constraint chkDispositivo
		check (dispositivoFav in ('Console', 'Computador', 'Gameboards', 'Dispositivos Móveis')),
    qtdJogos int,
    fkUser int,
    constraint fk_usuario foreign key (fkUser) references usuario(idUser)
) auto_increment = 1000;

select * from usuario;
select * from preferencia;

INSERT INTO preferencia (generoFav, dispositivoFav, qtdJogos) VALUES ('Ação', 'Console', 15);
INSERT INTO preferencia (generoFav, dispositivoFav, qtdJogos) VALUES ('Aventura', 'Computador', 20);
INSERT INTO preferencia (generoFav, dispositivoFav, qtdJogos) VALUES ('RPG', 'Dispositivos Móveis', 30);
INSERT INTO preferencia (generoFav, dispositivoFav, qtdJogos) VALUES ('Battle Royale', 'Console', 10);
INSERT INTO preferencia (generoFav, dispositivoFav, qtdJogos) VALUES ('Simulação', 'Gameboards', 5);
INSERT INTO preferencia (generoFav, dispositivoFav, qtdJogos) VALUES ('Indie', 'Computador', 8);
INSERT INTO preferencia (generoFav, dispositivoFav, qtdJogos) VALUES ('MOBA', 'Dispositivos Móveis', 12);
INSERT INTO preferencia (generoFav, dispositivoFav, qtdJogos) VALUES ('Estratégia', 'Console', 18);
INSERT INTO preferencia (generoFav, dispositivoFav, qtdJogos) VALUES ('Esporte', 'Gameboards', 7);
INSERT INTO preferencia (generoFav, dispositivoFav, qtdJogos) VALUES ('Plataforma', 'Computador', 9);
INSERT INTO preferencia (generoFav, dispositivoFav, qtdJogos) VALUES ('Horror', 'Dispositivos Móveis', 14);
INSERT INTO preferencia (generoFav, dispositivoFav, qtdJogos) VALUES ('Ação', 'Computador', 22);
INSERT INTO preferencia (generoFav, dispositivoFav, qtdJogos) VALUES ('Aventura', 'Gameboards', 16);
INSERT INTO preferencia (generoFav, dispositivoFav, qtdJogos) VALUES ('RPG', 'Console', 11);
INSERT INTO preferencia (generoFav, dispositivoFav, qtdJogos) VALUES ('Battle Royale', 'Dispositivos Móveis', 21);
INSERT INTO preferencia (generoFav, dispositivoFav, qtdJogos) VALUES ('Simulação', 'Computador', 6);
INSERT INTO preferencia (generoFav, dispositivoFav, qtdJogos) VALUES ('Indie', 'Console', 13);
INSERT INTO preferencia (generoFav, dispositivoFav, qtdJogos) VALUES ('MOBA', 'Gameboards', 17);
INSERT INTO preferencia (generoFav, dispositivoFav, qtdJogos) VALUES ('Estratégia', 'Dispositivos Móveis', 19);
INSERT INTO preferencia (generoFav, dispositivoFav, qtdJogos) VALUES ('Esporte', 'Console', 20);

SELECT generoFav, COUNT(*) as quantidadePessoas
FROM preferencia GROUP BY generoFav;

SELECT dispositivoFav, COUNT(*) as quantidadePessoas
FROM preferencia
GROUP BY dispositivoFav;

SELECT AVG(qtdJogos) as mediaJogosPorJogador
FROM preferencia;

SELECT p.idPubli, p.conteudo as contentPubli,
u.nome as userPubli, u.username as usernamePubli
from publicacao as p 
JOIN usuario as u
where p.fkUser = u.idUser