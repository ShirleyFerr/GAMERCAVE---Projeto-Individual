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
    dtPubli datetime default current_timestamp,
    fkUser int,
    constraint fk_user foreign key (fkUser) references usuario(idUser)
);


create table preferencia (
	idPreferencia int primary key auto_increment,
	generoFav varchar(45),
    constraint chkGen
		check (generoFav in('Ação', 'Aventura', 'RPG', 'Battle Royale', 'Simulação', 'Indie', 'MOBA', 'Estratégia', 'Esporte', 'Plataforma', 'Horror')), 
    dispositivoFav varchar(45),
    constraint chkDispositivo
		check (dispositivoFav in ('Console', 'Computador', 'Gameboards', 'Dispositivos Móveis')),
    qtdJogos int
) auto_increment = 1000;


select * from usuario;
select * from preferencia;
select * from publicacao;

SELECT generoFav, COUNT(*) as quantidadePessoas
FROM preferencia GROUP BY generoFav;

SELECT dispositivoFav, COUNT(*) as quantidadePessoas
FROM preferencia
GROUP BY dispositivoFav;

SELECT AVG(qtdJogos) as mediaJogosPorJogador
FROM preferencia;

SELECT p.idPubli, p.conteudo as contentPubli,
u.nome as userPubli, u.username as usernamePubli,
p.dtPubli as DtPublicacao
from publicacao as p 
JOIN usuario as u
where p.fkUser = u.idUser
order by dtPubli; 
select * from publicacao;
