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

INSERT INTO usuario (idUser, nome, username, email, dtNasc, senha, biografia) VALUES
(1000, 'fulano', 'fulaninho', 'fulano@email.com', '2324-01-19', '123', 'oi eu sou o fulano e eu gosto de jogar'),
(1001, 'teste', 'userteste', 'teste@email.com', '1221-02-23', '123', 'nova biografia saindo do forno'),
(1002, 'Felippe', 'lippxe', 'felippe@gmail.com', '2005-01-01', '123', NULL),
(1003, 'joão roberto', 'galinhadetenis', 'jrobs@gmail.com', '2003-12-14', '123', NULL),
(1004, 'rodrigo', 'apolo', 'rodrigo@gmail.com', '2004-02-27', '123', NULL),
(1005, 'guilherme antonio', 'TONINHO', 'guilherme@antonio.com', '2002-02-04', '123', NULL),
(1006, 'Arthur', 'BR4rthur', 'arthur@email.com', '2006-01-09', '123', NULL),
(1007, 'ososodsavu', 'calabreso', 'eutenteidasilva@gmail.com', '2011-11-11', 'chiquititas', NULL);

create table publicacao (
	idPubli int primary key auto_increment,
    conteudo varchar(150),
    dtPubli datetime default current_timestamp,
    fkUser int,
    constraint fk_user foreign key (fkUser) references usuario(idUser)
);
INSERT INTO publicacao (idPubli, conteudo, dtPubli, fkUser) VALUES
(2, 'olá mundo', '2024-12-01 17:45:58', 1001),
(3, 'publicacoes funcionaam', '2024-12-01 17:46:12', 1001),
(4, 'se eu publicar mais alguma coisa?', '2024-12-01 17:51:26', 1001),
(5, 'teste teste teste amo isso aqui funcionar!!!! :DDDDDD', '2024-12-01 18:03:54', 1001),
(6, 'oi grupo de pi vcs são os melhores', '2024-12-01 18:06:00', 1001),
(7, 'olá senhores', '2024-12-01 20:30:46', 1002),
(8, 'oi pessoal me sigaam adorei essa plataforma nova', '2024-12-02 09:35:29', 1003),
(9, 'cs2 é muito bom!', '2024-12-02 09:40:21', 1004),
(10, 'NA REALIDADE SOU UM INFILTRADO, NA VERDADE ODEIO JOGOS\n\nJOGOS PROMOVEM SEDENTARISMO!!!', '2024-12-02 10:01:04', 1005),
(12, 'estou viciado em LoL Battle royale, estou frito', '2024-12-04 23:41:21', 1006),
(13, 'recomendo among us!! jogo super recente e mto bom XD', '2024-12-05 22:28:39', 1007);




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

INSERT INTO preferencia (idPreferencia, generoFav, dispositivoFav, qtdJogos)
VALUES 
    (1000, 'Ação', 'Console', 4),
    (1001, 'Ação', 'Console', 126),
    (1002, 'Horror', 'Computador', 20),
    (1003, 'Ação', 'Computador', 10),
    (1004, 'Indie', 'Computador', 10),
    (1005, 'Horror', 'Computador', 100),
    (1006, 'Indie', 'Computador', 45);


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
