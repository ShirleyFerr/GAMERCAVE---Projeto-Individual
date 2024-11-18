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