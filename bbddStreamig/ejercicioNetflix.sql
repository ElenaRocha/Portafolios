CREATE DATABASE IF NOT EXISTS netflix;

USE netflix;

-- --

CREATE TABLE IF NOT EXISTS countries (
	id_country INT AUTO_INCREMENT PRIMARY KEY,
    name TEXT
);

CREATE TABLE IF NOT EXISTS languages (
	id_language INT AUTO_INCREMENT PRIMARY KEY,
    name TEXT
);

CREATE TABLE IF NOT EXISTS images (
	id_image INT AUTO_INCREMENT PRIMARY KEY,
    name TEXT
);

CREATE TABLE IF NOT EXISTS plans (
	id_plan INT AUTO_INCREMENT PRIMARY KEY,
    name TEXT,
    cost FLOAT NOT NULL,
    screens INT,
    hd BOOLEAN,
    ultra_hd BOOLEAN
);

CREATE TABLE IF NOT EXISTS genres (
	id_genre INT AUTO_INCREMENT PRIMARY KEY,
    name TEXT
);

CREATE TABLE IF NOT EXISTS directors (
	id_director INT AUTO_INCREMENT PRIMARY KEY,
    first_name TEXT,
    last_name TEXT
);

CREATE TABLE IF NOT EXISTS actors (
	id_actor INT AUTO_INCREMENT PRIMARY KEY,
    first_name TEXT,
    last_name TEXT
);

CREATE TABLE IF NOT EXISTS users (
	id_user INT AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(50) UNIQUE,
	password TEXT NOT NULL,
	telephone INT
);

CREATE TABLE IF NOT EXISTS suscriptions (
	id_suscription INT AUTO_INCREMENT PRIMARY KEY,
    country INT,
    facturation_date DATE,
    account_no INT,
    user INT,
    plan INT,
    CONSTRAINT country
    FOREIGN KEY (country) REFERENCES countries(id_country),
	CONSTRAINT user
    FOREIGN KEY (user) REFERENCES users(id_user),
	CONSTRAINT plan
    FOREIGN KEY (plan) REFERENCES plans(id_plan)
);

CREATE TABLE IF NOT EXISTS profiles (
	id_profile INT AUTO_INCREMENT PRIMARY KEY,
    alias VARCHAR(10),
    image INT,
    language TEXT,
    restriction BOOLEAN,
    user INT,
    suscription INT,
    CONSTRAINT image
    FOREIGN KEY (image) REFERENCES images(id_image),
	CONSTRAINT user_p
    FOREIGN KEY (user) REFERENCES users(id_user),
	CONSTRAINT suscription
    FOREIGN KEY (suscription) REFERENCES suscriptions(id_suscription)
);

CREATE TABLE IF NOT EXISTS films (
	id_film INT AUTO_INCREMENT PRIMARY KEY,
    title TEXT,
    sinopsis TEXT,
    year INT,
    rating TEXT,
    duration INT,
    release_date DATE,
    country INT,
    download BOOLEAN,
    genre INT,
    director INT,
    actor1 INT,
    actor2 INT,
    actor3 INT,
    CONSTRAINT country_f
     FOREIGN KEY (country) REFERENCES countries(id_country),
	CONSTRAINT genre_f
    FOREIGN KEY (genre) REFERENCES genres(id_genre),
	CONSTRAINT director 
    FOREIGN KEY (director) REFERENCES directors(id_director),
	CONSTRAINT actor1
    FOREIGN KEY (actor1) REFERENCES actors(id_actor),
	CONSTRAINT actor2
    FOREIGN KEY (actor2) REFERENCES actors(id_actor),
	CONSTRAINT actor3
    FOREIGN KEY (actor3) REFERENCES actors(id_actor)
);

CREATE TABLE IF NOT EXISTS series (
	id_series INT AUTO_INCREMENT PRIMARY KEY,
    title TEXT,
    sinopsis TEXT,
    year INT,
    rating TEXT,
    country INT,
    genre INT,
    CONSTRAINT country_s
	FOREIGN KEY (country) REFERENCES countries(id_country),
	CONSTRAINT genre
	FOREIGN KEY (genre) REFERENCES genres(id_genre)
);

CREATE TABLE IF NOT EXISTS seasons (
	id_season INT AUTO_INCREMENT PRIMARY KEY,
    title TEXT,
    release_date DATE,
    series INT,
    CONSTRAINT series
	FOREIGN KEY (series) REFERENCES series(id_series)
);

CREATE TABLE IF NOT EXISTS chapters (
	id_chapter INT AUTO_INCREMENT PRIMARY KEY,
    title TEXT,
    duration INT,
    download BOOLEAN,
    director INT,
    actor1 INT,
    actor2 INT,
    actor3 INT,
    series INT,
    season INT,
	CONSTRAINT director_ch 
    FOREIGN KEY (director) REFERENCES directors(id_director),
	CONSTRAINT actor1_ch
    FOREIGN KEY (actor1) REFERENCES actors(id_actor),
	CONSTRAINT actor2_ch
    FOREIGN KEY (actor2) REFERENCES actors(id_actor),
	CONSTRAINT actor3_ch
    FOREIGN KEY (actor3) REFERENCES actors(id_actor),
	CONSTRAINT season_ch
    FOREIGN KEY (season) REFERENCES seasons(id_season)
);

/*CREATE TABLE IF NOT EXISTS scores (
	id_score INT AUTO_INCREMENT PRIMARY KEY,
    rate BOOLEAN,
    film_id INT,
    series_id INT,
    profile INT,
    CONSTRAINT filmId CHECK (film_id IN (SELECT id_film FROM films)),
    CONSTRAINT seriesId CHECK (series_id IN (SELECT id_series FROM series)),
    CONSTRAINT profile
    FOREIGN KEY (profile) REFERENCES profiles(id_profile)
);*/
-- Error Code: 3815. An expression of a check constraint 'filmId' contains disallowed function.

CREATE TABLE IF NOT EXISTS film_scores (
	id_fscore INT AUTO_INCREMENT PRIMARY KEY,
    rate BOOLEAN,
    film INT,
    profile INT,
    CONSTRAINT filmId
    FOREIGN KEY (film) REFERENCES films(id_film),
    CONSTRAINT fprofile
    FOREIGN KEY (profile) REFERENCES profiles(id_profile)
);

CREATE TABLE IF NOT EXISTS series_scores (
	id_sscore INT AUTO_INCREMENT PRIMARY KEY,
    rate BOOLEAN,
    series INT,
    profile INT,
    CONSTRAINT seriesId
    FOREIGN KEY (series) REFERENCES series(id_series),
    CONSTRAINT sprofile
    FOREIGN KEY (profile) REFERENCES profiles(id_profile)
);

-- --

INSERT INTO countries (name)
VALUES ('España'), ('Estados Unidos'), ('Japón'), ('Argentina'), ('Egipto');

INSERT INTO images (name)
VALUES ('img1'), ('img2'), ('img3'), ('img4'), ('img5');

INSERT INTO plans (name, cost, screens, hd, ultra_hd)
VALUES ('basic', 7.9, 1, false, false),
('standard', 11.99, 2, true, false),
('premium', 15.99, 4, true, true);

INSERT INTO genres (name)
VALUES ('Acción'), ('Anime'), ('Ciencia ficción'), ('Comedia'), ('Documentales'), ('Dramas'), ('Fantásticas'), ('Terror'), ('Románticas'), ('Thrillers');

INSERT INTO directors (first_name, last_name)
VALUES ('Ivan', 'Reitman'), ('Javier', 'Ambrossi/Calvo'), ('Tim', 'Burton'), ('Katsuhiro', 'Otomo'), ('Stanley', 'Kubrick'), ('David', 'Fincher'), ('Jennifer Siebel', 'Newsom'), ('Chris', 'Columbus'), ('Vicenzo', 'Natali'), ('Susan', 'Johnson'), ('Richard', 'Linklater'), ('Steven', 'Spielberg'), ('Naoko', 'Yamada'), ('Michael', 'Margolis'), ('Christopher', 'Nolan'), ('Frant', 'Gwo'), ('Hayao', 'Miyazaki'), ('Lilly y Lana', 'Wachowski'), ('Martin', 'Brest');
INSERT INTO directors (first_name, last_name)
VALUES ('desconocido', 'desconocido'); -- no20
INSERT INTO directors (first_name, last_name)
VALUES ('Lilly', 'Wachowski'), ('David', 'Crane'), ('Bara bo', 'Odar'), ('Andy', 'Borowitz'), ('Steve', 'Blackman'), ('Adam', 'Horowitz'), ('Charlie', 'Brooker');

INSERT INTO actors (first_name, last_name)
VALUES ('Bill', 'Murray'), ('Dan', 'Aykroyd'), ('Sigourney', 'Weaver'), ('Macarena', 'García'), ('Anna', 'Castillo'), ('Belén', 'Cuesta'), ('Ewan', 'McGregor'), ('Albert', 'Finney'), ('Billy', 'Crudup'), ('Mitsuo', 'Iwata'), ('Nozomu', 'Sasaki'), ('Mami', 'Koyama'), ('Jack', 'Nicholson'), ('Shelly', 'Duvall'), ('Danny', 'Lloyd'), ('Brad', 'Pitt'), ('Cate', 'Blanchett'), ('Taraji P.', 'Henson'), ('Daniel', 'Radcliffe'), ('Rupert', 'Grint'), ('Emma', 'Watson'), ('Nicole', 'de Boer'), ('Nicky', 'Guadagni'), ('David', 'Hewlett'), ('Lana', 'Condor'), ('Noah', 'Centineo'), ('Janel', 'Parrish'), ('Jack', 'Black'), ('Joan', 'Cusack'), ('Mike', 'White'), ('Liam', 'Neeson'), ('Ben', 'Kingsley'), ('Ralph', 'Fiennes'), ('Miyu', 'Irino'), ('Saori', 'Hayami'), ('Aoi', 'Yuki'), ('Hugh', 'Jackman'), ('Christian', 'Bale'), ('Michael', 'Caine'), ('Wu', 'Jing'), ('Chuxiao', 'Qu'), ('Zhao', 'Jinmai'), ('Rumi', 'Hiiragi'), ('Mari', 'Natsuki'), ('Keanu', 'Reeves'), ('Laurence', 'Fishburne'), ('Carrie-Anne', 'Moss'), ('Ben', 'Affleck'), ('Rosamund', 'Pike'), ('Neil Patrick', 'Harris'), ('Anthony', 'Hopkins'), ('Claire', 'Foriani');
INSERT INTO actors (first_name, last_name)
VALUES ('desconocido', 'desconocido'); -- no53
INSERT INTO actors (first_name, last_name)
VALUES ('Tuppence', 'Middleton'), ('Brian J.', 'Smith'), ('Bae', 'Doona'), ('Romi', 'Park'), ('Rie', 'Kugimiya'), ('Megumi', 'Toyoguchi'), ('Jennifer', 'Anistone'), ('Courtney', 'Cox'), ('Lisa', 'Kudrow'), ('Louis', 'Hofmann'), ('Oliver', 'Masucci'), ('Jördis', 'Triebel'), ('Koki', 'Uchiyama'), ('Ayumu', 'Murase'), ('Megumi', 'Han'), ('Will', 'Smith'), ('Alfonso', 'Ribeiro'), ('James', 'Avery'), ('Ellen', 'Page'), ('Tom', 'Hopper'), ('David', 'Castañeda'), ('Lana', 'Parrilla'), ('Robert', 'Carlyle'), ('Jared', 'Gilmore'), ('Jesse', 'Plemons'), ('Cristin', 'Milioti'), ('Jimmi', 'Simpson'), ('Chiwa', 'Saito'), ('Kaori', 'Mizuhashi');

INSERT INTO users (email, password, telephone)
VALUES ('sara@gmail.com', '123456', 611111111), ('miriam@gmail.com', '654321', 622222222), ('manuel@gmail.com', '987654', 633333333), ('david@gmail.com', '456789', 644444444), ('irene@gmail.com', '918273', 655555555), ('fernando@gmail.com', '564738', 666666666), ('diana@gmail.com', '453627', 677777777), ('marta@gmail.com', '283746', 688888888), ('raul@gmail.com', '234567', 699999999), ('carlos@gmail.com', '928374', 600000000);

INSERT INTO suscriptions (country, facturation_date, account_no, user, plan, active)
VALUES (1, '2008-03-15', '12121212121212121212', 1, 1, true), (2, '2010-11-01', '23232323232323232323', 2, 2, true), (3, '2005-01-01', '34343434343434343434', 3, 1, false), (4, '2013-08-29', '454545454545454545', 4, 3, true), (5, '2011-02-20', '565656565656565656', 5, 1, true), (1, '2020-01-15', '676767676767676767', 6, 2, true), (2, '2012-07-30', '78787878787878787878', 7, 1, false), (3, '2001-12-30', '89898989898989898989', 8, 2, false), (4, '2018-05-13', '90909090909090909090', 9, 1, true), (5, '2015-09-01', '09090909090909090909', 10, 3, true);

INSERT INTO profiles (alias, image, language, restriction, user, suscription)
VALUES ('Sara', 1, 'inglés', false, 1, 1), ('Miriam', 2, 'español', false, 2, 2), ('Manuel', 1, 'español', false, 3, 3), ('David', 3, 'español', false, 4, 4), ('Irene', 1, 'español', false, 5, 5), ('Fernando', 4, 'español', false, 6, 6), ('Diana', 5, 'inglés', false, 7, 7), ('Marta', 1, 'español', false, 8, 8), ('Raul', 3, 'español', false, 9, 9), ('Carlos', 2, 'inglés', false, 10, 10), ('Nico', 2, 'inglés', false, 1, 1), ('Laura', 3, 'español', false, 2, 2), ('Elena', 4, 'inglés', false, 2, 2), ('David', 5, 'español', false, 3, 3), ('Raquel', 2, 'español', false, 4, 4), ('Arturo', 3, 'español', false, 4, 4), ('Sandra', 2, 'español', false, 4, 4), ('Guillermo', 3, 'inglés', false, 5, 5), ('Clara', 3, 'inglés', true, 5, 5), ('Roberto', 5, 'inglés', true, 5, 5), ('Luciana', 2, 'inglés', false, 6, 6), ('Alina', 1, 'inglés', true, 6, 6), ('Rafa', 4, 'español', false, 7, 7), ('Natalia', 3, 'español', false, 8, 8), ('Carlota', 5, 'inglés', true, 8, 8), ('Raquel', 4, 'español', false, 9, 9), ('Nacho', 4, 'español', true, 10, 10), ('Lucía', 3, 'español', true, 10, 10);

INSERT INTO films ( title, sinopsis, year, rating, duration, release_date, country, download, genre, director, actor1, actor2, actor3)
VALUES ('Cazafantasmas', 'Un equipo de parapsicólogos que se dedica a exterminar fantasmas y espíritus termina enfrentándose a un demonio aterrador en el apartamento de una violonchelista.', 1984, '13+', 105, '2020-02-01', 1, true, 1, 1, 1, 2, 3), ('La llamada', 'En esta comedia musical, dos adolescentes rebeldes y amantes de la música electrónica viven una experiencia realmente divina en un campamento regentado por monjas.', 2017, '13+', 108, '2017-11-01', 2, true, 4, 2, 4, 5, 6), ('Big fish', 'Un periodista trata de conocer mejor a su padre moribundo buscando la verdad tras los absurdos relatos y épicas leyendas que este ha ido contando a lo largo de su vida.', 2003, '13+',125, '2020-04-01', 3, true, 7, 3, 7, 8, 9), ('Akira', 'En esta pelícual de animación basada en la serie de manga, dos amigos de la infancia son arrastrados a un submundo postapocalíptico y obligados a luchar para sobrevivir.', 1988, '16+', 124, '2020-06-01', 4, true, 3, 4, 10, 11, 12), ('El resplandor', 'Mientras va descendiendo hacia el abismo de la locura, Jack Torrance aterroriza a su esposa e hijo en el espeluznante y deshabitado hotel donde residen.', 1980, '16+', 119, '2020-07-01', 5, true, 8, 5, 13, 14, 15), ('El curioso caso de Bejamin Button', 'David Fincher dirige la historia nominada al Óscar de Benjamin Button, un hombre que nace hecho un anciano y va rejuveneciendo con el paso del tiempo.', 2008, '13+', 166, '2019-03-01', 1, true, 6, 6, 16, 17, 18), ('Miss Representation', 'El desdeñoso retrato de las mujeres por parte de los principales medios, contribuye a la insuficiente representación de las mujeres en posiciones de liderazgo.', 2011, '13+', 90, '2019-05-01', 2, true, 5, 7, 53, 53, 53), ('Harry Potter y la piedra filosofal', 'Cuando cumple 11 años, Harry Potter se entera de que es un poderoso mago y que le esperan como alumno en el Colegio Hogwarts de Magia y Hechicería.', 2001, '7+', 152, '2019-07-01', 3, true, 7, 8, 19, 20, 21), ('El cubo', 'No saben cómo han llegado allí ni por qué los han elegido. Seis personas están atrapadas en un laberinto de cubos entrelazados sin salida aparente.', 1997, '16+', 190, '2019-09-01', 4, true, 8, 9, 22, 23, 24), ('A todos los chicos de los que me enamoré', 'Cuando sus cartas de amor secretas llegan inexplicablemente a los cinco chicos de los que se ha enamorado, la apacible vida estudiantil de Lara Jean se pone patas arriba.',2018, '7+', 100, '2018-08-01', 5, true, 9, 10, 25, 26, 27), ('School of rock', 'Dewey Finn, que es músico, consigue un trabajo como profesor suplente en un colegio y empieza a enseñar rock n roll en secreto a los alumnos.', 2003, '7+', 109, '2019-11-01', 1, true, 4, 11, 28, 29, 30), ('La lista de Schindler', 'Oskar Schindler acaba convertido en un inverosímil bienhechor cuando gasta toda su fortuna para salvar a 1100 judíos de Auschwitz durante la Segunda Guerra Mundial.', 1993, '16+', 195, '2018-01-01', 2, true, 6, 12, 31, 32, 33), ('A silent voice', 'Un abusón arrepentido trata de dar con la chica sorda a la que martirizó en el colegio para intentar arreglar las cosas... aunque no se sienta merecedor de su perdón.', 2016, '13+', 129, '2018-06-01', 3, true, 2, 13, 34, 35, 36), ('#CATS_the_mewvie', 'Este documental analiza cómo nuestros amigos felinos se han convertido en grandes protagonistas de la red, desde los primeros memes hasta famosos gatos influentes.', 2020, '7+', 89, '2020-02-01', 4, true, 5, 14, 53, 53, 53), ('El truco final -El prestigio-', 'Dos magos rivales desesperados por desentrañar los secretos del otro empiezan a realizar trucos cada vez más arriesgados que no tardan en volverse letales.', 2006, '13+', 130, '2017-03-01', 5, true, 10, 15, 37, 38, 39), ('La Tierra errante', 'Una inminente colisión con Júpiter amenaza la Tierra mientras los humanos buscan una nueva estrella. El futuro del planeta está en manos de unos pocos héroes inesperados.', 2019, '13+', 125, '2019-05-01', 1, true, 3, 16, 40, 41, 42), ('El viaje de Chihiro', 'Chihiro descubre un mundo mágico gobernado por una bruja que convierte en animales a quienes la desobedecen.', 2001, '7+', 125, '2017-12-01', 2, true, 2, 7, 43, 34, 44), ('Matrix', 'Un pirata informático descubre que vive en un mundo virtual generado por máquinas y decide unirse a un grupo de rebeldes que lucha por liberarse.', 1999, '16+', 136, '2016-08-01', 4, true, 1, 18, 45, 46, 47), ('Perdida', 'En medio de una crisis matrimonial, Nick vuelve a casa un día y descubre que su mujer ha desaparecido. A medida que aumenta la presión policial, la verdad sale a la luz.', 2014, '16+', 148, '2015-10-01', 5, true, 10, 6, 48, 49, 50), ('¿Conoces a Joe Black?', 'Cuando la Muerte viene a llevarse a un magnate, este le hace una propuesta: ser su anfitrión durante unas "vacaciones" entre los vivos a cambio de unos días más de vida.', 1998, '13+', 180, '2016-03-01', 3, true, 9, 19, 16, 51, 52);

INSERT INTO series (title, sinopsis, year, rating, country, genre)
VALUES ('Sense8', 'De los creadores de "Matrix" y "Babylon 5" llega esta intensa serie en la que ocho personas experimentan telepáticamente las vidas de los otros.', 2015, '16+', 1, 3), ('Fullmetal alchemist', 'Dos hermanos recuren a la alquimia para resucitar a su madre, pero acabarán provocando una reacción química con consecuencias nefasta para sus cuerpos.', 2003, '16+', 2, 2), ('Friends', 'En esta exitosa serie viviremos las divertidas desventuras de seis veinteañeros que se enfrentan a los obstáculos del trabajo, la vida y el amor en los 90 en Manhattan.', 1994, '13+', 3, 4), ('Dark', 'Tras la desaparición de un niño, cuatro familias desesperadas tratan de entender lo ocurrido a medida que van desvelando un retorcido misterio que abarca tres décadas.', 2017, '16+', 4, 10), ('Devilman crybaby', 'Los demonios han despertado y la humanidad es presa del caos. Un sensible chico-demonio se verá arrastrado a una violenta guerra contra el mal por un misterioso amigo.', 2018, '16+', 5, 2), ('El príncipe de Bel Air', 'La vida de la opulenta familia Banks da un vuelco cuando Will, un pariente de Filadelfia con mucha calle, se muda a su mansión de Bel-Air.', 1990, '13+', 1, 4), ('The umbrella academy', 'La muerte de su padre reúne a unos hermanos distanciados y con extraordinarios poderes que descubren impactantes secretos y una amenaza que se cierne sobre la humanidad.', 2019, '16+', 2, 1), ('Érase una vez', 'En esta serie de fantasía, una mujer llega a un pequeño pueblo de Maine y descubre que está lleno de elementos de un mundo de fábula', 2011, '13+', 3, 7), ('Black mirror', 'Esta serie de ciencia ficción explora un futuro próximo muy inquietante, donde las grandes innovaciones tecnológicas de la raza humana chocan con sus peores instintos.', 2011, '16+', 4, 3), ('Puella Magi Madoka Magica', 'Un día, Madoka Kaname tiene un encuentro muy mágico que puede cambiar su destino. Este es el principio de la nueva historia de las brujas mágicas', 2011, '13+', 5, 7);

INSERT INTO seasons (title, release_date, series)
VALUES ('Temporada 1', '2015-10-01', 1), ('Temporada 2', '2017-03-01', 1), ('Temporada 1', '2018-02-01', 2), ('Temporada 1', '2008-01-01', 3), ('Temporada 2', '2008-01-01', 3), ('Temporada 3', '2008-01-01', 3), ('Temporada 1', '2017-09-01', 4), ('Temporada 2', '2018-12-01', 4), ('Temporada 3', '2020-03-01', 4), ('Temporada 1', '2018-03-01', 5), ('Temporada 1', '2004-03-01', 6), ('Temporada 2', '2006-08-01', 6), ('Temporada 3', '2009-02-01', 6), ('Temporada 1', '2019-07-01', 7), ('Temporada 2', '2020-07-01', 7), ('Temporada 1', '2011-04-01', 8), ('Temporada 2', '2012-11-01', 8), ('Temporada 1', '2011-06-01', 9), ('Temporada 2', '2013-02-01', 9), ('Temporada 1', '2013-09-01', 10);

INSERT INTO chapters (title, duration, download, director, actor1, actor2, actor3, series, season)
VALUES ('1.Resonancia límbica', 67, true, 21, 54, 55, 56, 1, 1), ('2.Soy también un nosotros', 54, true, 21, 54, 55, 56, 1, 1), ('3.Apuestas a favor de la flacucha', 48, true, 21, 54, 55, 56, 1, 1), ('4.What is going on?', 55, true, 21, 54, 55, 56, 1, 1), ('5.El arte es como la religión', 52, true, 21, 54, 55, 56, 1, 1), ('1.Feliz puto Año Nuevo', 124, true, 21, 54, 55, 56, 1, 2), ('2.¿Quién soy?', 55, true, 21, 54, 55, 56, 1, 2), ('3.Mutualismo obligado', 51, true, 21, 54, 55, 56, 1, 2), ('4.Polifonía', 58, true, 21, 54, 55, 56, 1, 2), ('5.Con miedo nunca se arregla nada', 51, true, 21, 54, 55, 56, 1, 2), ('1.Aquel que desafía al Sol', 23, true, 20, 57, 58, 59, 2, 1), ('2.El cuerpo del condenado', 23, true, 20, 57, 58, 59, 2, 1), ('3.Madre', 23, true, 20, 57, 58, 59, 2, 1), ('4.Transmutación de amor', 23, true, 20, 57, 58, 59, 2, 1), ('5.¡Corre! Autómata', 23, true, 20, 57, 58, 59, 2, 1), ('1.El de cuando Mónica consigue una compañera de cuarto', 22, true, 22, 60, 61, 62, 3, 1), ('2.El del embarazo complicado', 22, true, 22, 60, 61, 62, 3, 1), ('3.El del tabaco y el dinero', 22, true, 22, 60, 61, 62, 3, 1), ('4.Rachel recibe su primera nómina', 22, true, 22, 60, 61, 62, 3, 1), ('5.El detergente germano oriental', 22, true, 22, 60, 61, 62, 3, 1), ('1.El de la nueva novia de Ross', 22, true, 22, 60, 61, 62, 3, 2), ('2.El de la leche materna', 22, true, 22, 60, 61, 62, 3, 2), ('3.El de cuando muere Heckles', 22, true, 22, 60, 61, 62, 3, 2), ('4.El del marido de Phoebe', 22, true, 22, 60, 61, 62, 3, 2), ('5.El de los cinco filetes y una berenjena', 22, true, 22, 60, 61, 62, 3, 2), ('1.El de la fantasía de la princesa Leia', 22, true, 22, 60, 61, 62, 3, 3), ('2.El de cuando nadie está listo', 22, true, 22, 60, 61, 62, 3, 3), ('3.El de la mermelada', 22, true, 22, 60, 61, 62, 3, 3), ('4.El del túnel metafórico', 22, true, 22, 60, 61, 62, 3, 3), ('5.El de Frank Jr.', 22, true, 22, 60, 61, 62, 3, 3), ('1.Secretos', 51, true, 23, 63, 64, 65, 4, 1), ('2.Mentiras', 44, true, 23, 63, 64, 65, 4, 1), ('3.Pasado y presente', 45, true, 23, 63, 64, 65, 4, 1), ('4.Vidas dobles', 47, true, 23, 63, 64, 65, 4, 1), ('5.Verdades', 45, true, 23, 63, 64, 65, 4, 1), ('1.Principios y finales', 53, true, 23, 63, 64, 65, 4, 2), ('2.Materia oscura', 54, true, 23, 63, 64, 65, 4, 2), ('3.Fantasmas', 53, true, 23, 63, 64, 65, 4, 2), ('4.Los viajeros', 60, true, 23, 63, 64, 65, 4, 2), ('5.Perder y encontrar', 56, true, 23, 63, 64, 65, 4, 2), ('1.Déjà vu', 62, true, 23, 63, 64, 65, 4, 3), ('2.Los supervivientes', 59, true, 23, 63, 64, 65, 4, 3), ('3.Adam y Eva', 56, true, 23, 63, 64, 65, 4, 3), ('4.El origen', 64, true, 23, 63, 64, 65, 4, 3), ('5.Vida y muerte', 64, true, 23, 63, 64, 65, 4, 3), ('1.Te necesito', 25, true, 20, 66, 67, 68, 5, 1), ('2.Una mano es suficiente', 25, true, 20, 66, 67, 68, 5, 1), ('3.Ver para creer', 25, true, 20, 66, 67, 68, 5, 1), ('4.Ven, Akira', 25, true, 20, 66, 67, 68, 5, 1), ('5.La bella Silene', 25, true, 20, 66, 67, 68, 5, 1), ('1.Alerta, el príncipe llegó', 22, true, 24, 69, 70, 71, 6, 1), ('2.La clase de Jazz', 23, true, 24, 69, 70, 71, 6, 1), ('3.La conquistaré a mi modo', 21, true, 24, 69, 70, 71, 6, 1), ('4.No se metan con mi cerdito', 23, true, 24, 69, 70, 71, 6, 1), ('5.Extraño a mi mejor amigo', 22, true, 24, 69, 70, 71, 6, 1), ('1.¿Se ha movido la Tierra por tí?', 23, true, 24, 69, 70, 71, 6, 2), ('2.La madre de todas la batallas', 22, true, 24, 69, 70, 71, 6, 2), ('3.Will consigue un empleo', 23, true, 24, 69, 70, 71, 6, 2), ('4.La historia del test', 23, true, 24, 69, 70, 71, 6, 2), ('5.La abuelita está ocupada', 23, true, 24, 69, 70, 71, 6, 2), ('1.Cómo pasé mis vacaciones de verano', 23, true, 24, 69, 70, 71, 6, 3), ('2.Will se compromete', 23, true, 24, 69, 70, 71, 6, 3), ('3.No es una mujer, es mi prima', 23, true, 24, 69, 70, 71, 6, 3), ('4.Hilary encuentra un empleo', 23, true, 24, 69, 70, 71, 6, 3), ('5.El hijo de la madre, tal vez de Carlton', 23, true, 24, 69, 70, 71, 6, 3), ('1.Solo nos vemos en bodas y funerales', 59, true, 25, 72, 73, 74, 7, 1), ('2.Corre, chico, corre', 57, true, 25, 72, 73, 74, 7, 1), ('3.Extra ordinario', 56, true, 25, 72, 73, 74, 7, 1), ('4.Hombre en la Luna', 57, true, 25, 72, 73, 74, 7, 1), ('5.Número 5', 60, true, 25, 72, 73, 74, 7, 1), ('1.De vuelta al principio', 47, true, 25, 72, 73, 74, 7, 2), ('2.La grabación Frankel', 48, true, 25, 72, 73, 74, 7, 2), ('3.Los suecos', 48, true, 25, 72, 73, 74, 7, 2), ('4.Los Majestic 12', 48, true, 25, 72, 73, 74, 7, 2), ('5.Valhalla', 47, true, 25, 72, 73, 74, 7, 2), ('1.Piloto', 43, true, 26, 75, 76, 77, 8, 1), ('2.Aquello que más amas', 42, true, 26, 75, 76, 77, 8, 1), ('3.Nieves derretidas', 43, true, 26, 75, 76, 77, 8, 1), ('4.El precio del oro', 43, true, 26, 75, 76, 77, 8, 1), ('5.Esa vocecilla silenciosa', 43, true, 26, 75, 76, 77, 8, 1), ('1.Roto', 43, true, 26, 75, 76, 77, 8, 2), ('2.Somos ambos', 43, true, 26, 75, 76, 77, 8, 2), ('3.La dama del lago', 43, true, 26, 75, 76, 77, 8, 2), ('4.El cocodrilo', 43, true, 26, 75, 76, 77, 8, 2), ('5.El doctor', 43, true, 26, 75, 76, 77, 8, 2), ('El himno nacional', 44, true, 27, 78, 79, 60, 9, 1), ('15 millones de méritos', 62, true, 27, 78, 79, 60, 9, 1), ('Toda tu historia', 49, true, 27, 78, 79, 60, 9, 1), ('Ahora mismo vuelvo', 48, true, 27, 78, 79, 60, 9, 2), ('Oso blanco', 42, true, 27, 78, 79, 60, 9, 2), ('El momento Waldo', 43, true, 27, 78, 79, 60, 9, 2), ('Blanca Navidad', 73, true, 27, 78, 79, 60, 9, 2), ('1.Es como si la hubiera conocido en un sueño...', 25, true, 20, 36, 61, 62, 10, 1), ('2.Sería algo maravilloso', 25, true, 20, 36, 61, 62, 10, 1), ('3.Ya no tengo miedo de nada', 25, true, 20, 36, 61, 62, 10, 1), ('4.Los milagros y la magia existen', 25, true, 20, 36, 61, 62, 10, 1), ('5.No me arrepiento de nada', 25, true, 20, 36, 61, 62, 10, 1);

/*INSERT INTO scores (rate, film, series, profile)
VALUES (true, 5, 0, 1), (true, 3, 0, 1), (false, 1, 0, 1), (false, 0, 7, 1), (false, 0, 10, 1), (true, 0, 1, 1), (true, 1, 0, 3), (true, 2, 0, 3), (true, 3, 0, 3), (false, 0, 1, 4), (false, 0, 2, 4), (true, 0, 3, 4), (true, 0, 4, 4), (false, 0, 5, 4), (false, 17, 0, 4), (true, 5, 0, 8), (false, 12, 0, 8), (false, 19, 0, 8), (false, 3, 0, 8), (true, 0, 4, 11), (true, 0, 7, 11), (false, 0, 8, 11), (true, 0, 9, 11), (true, 0, 10, 11), (true, 19, 0, 15), (false, 16, 0, 15), (false, 0, 2, 15), (true, 0, 7, 15), (true, 0, 9, 15), (true, 3, 0, 15), (true, 1, 0, 16), (false, 0, 1, 16), (false, 20, 0, 16), (true, 0, 3, 21), (false, 0, 5, 21), (true, 0, 6, 21), (false, 0, 7, 21), (true, 18, 0, 21), (false, 16, 0, 21), (true, 9, 0, 22), (false, 3, 0, 22), (true, 4, 0, 22), (false, 15, 0, 22), (false, 0, 7, 22), (true, 0, 9, 22), (true, 2, 0, 24), (true, 0, 5, 24), (true, 6, 0, 24), (false, 0, 18, 24), (false, 2, 0, 24), (true, 9, 0, 26), (false, 0, 17, 26), (true, 3, 0, 26), (true, 0, 20, 26), (true, 10, 0, 27), (false, 0, 4, 27);*/

INSERT INTO film_scores (rate, film, profile)
VALUES (true, 5, 1), (true, 3, 1), (false, 1, 1), (true, 1, 3), (true, 2, 3), (true, 3, 3), (false, 17, 4), (true, 5, 8), (false, 12, 8), (false, 19, 8), (false, 3, 8), (true, 19, 15), (false, 16, 15), (true, 3, 15), (true, 1, 16), (false, 20, 16), (true, 18, 21), (false, 16, 21), (true, 9, 22), (false, 3, 22), (true, 4, 22), (false, 15, 22), (true, 2, 24), (true, 6, 24), (false, 2, 24), (true, 9, 26), (true, 3, 26), (true, 10, 27);

INSERT INTO series_scores (rate, series_id, profile)
VALUES (false, 7, 1), (false, 10, 1), (true, 1, 1), (false, 1, 4), (false, 2, 4), (true, 3, 4), (true, 4, 4), (false, 5, 4), (true, 4, 11), (true, 7, 11), (false, 8, 11), (true, 9, 11), (true, 10, 11), (false, 2, 15), (true, 7, 15), (true, 9, 15), (false, 1, 16), (true, 3, 21), (false, 5, 21), (true, 6, 21), (false, 7, 21), (false, 7, 22), (true, 9, 22), (true, 5, 24), (false, 8, 24), (false, 7, 26), (true, 2, 26), (false, 4, 27);

-- --

SELECT * FROM countries;

SHOW CREATE TABLE suscriptions;

DROP TABLE languajes;

-- --

ALTER TABLE suscriptions
ADD COLUMN active BOOLEAN;

ALTER TABLE suscriptions
MODIFY account_no BIGINT; -- sigue sin admitirme el número de cuenta
ALTER TABLE suscriptions
MODIFY account_no TEXT;

UPDATE films
SET genre = 2
WHERE id_film = 4;

UPDATE films
SET genre = 6
WHERE id_film = 20;

ALTER TABLE films
DROP COLUMN download;

ALTER TABLE chapters
DROP COLUMN download;

-- --

-- usuarios con suscripción activa
SELECT users.email AS user FROM users
JOIN suscriptions
ON users.id_user = suscriptions.user
and suscriptions.active = true;

-- valoración media de las series
SELECT se.title AS series, COUNT(sc.rate) AS rating 
FROM series se
JOIN series_scores sc ON se.id_series = sc.series_id
and sc.rate = true
GROUP BY se.id_series;

-- tres series mejor valoradas
SELECT se.title AS series, COUNT(sc.rate) AS rating 
FROM series se
JOIN series_scores sc ON se.id_series = sc.series_id
and sc.rate = true
GROUP BY se.id_series
ORDER BY rating DESC
LIMIT 3;

-- película o serie mejor valorada
CREATE VIEW total_scores AS ((SELECT se.title AS title, se.genre AS genre, COUNT(sc.rate) AS rating FROM series se
JOIN series_scores sc ON se.id_series = sc.series_id
and sc.rate = true
GROUP BY se.id_series)

UNION

(SELECT fl.title AS title, fl.genre AS genre, COUNT(fc.rate) AS rating FROM films fl
JOIN film_scores fc ON fl.id_film = fc.film_id
and fc.rate = true
GROUP BY fl.id_film));

SELECT * FROM total_scores
ORDER BY rating DESC
LIMIT 1;

-- Actores y director del primer capítulo de la primera serie
SELECT s.title AS series, c.title AS chapter, CONCAT(d.first_name, ' ', d.last_name) AS director, CONCAT(a1.first_name, ' ' , a1.last_name) AS actor1, CONCAT(a2.first_name, ' ' , a2.last_name) AS actor2, CONCAT(a3.first_name, ' ' , a3.last_name) AS actor3  
FROM series s
JOIN chapters c ON s.id_series = c.series
JOIN directors d ON c.director = d.id_director
JOIN actors a1 ON c.actor1 = a1.id_actor
JOIN actors a2 ON c.actor2 = a2.id_actor  
JOIN actors a3 ON c.actor3 = a3.id_actor
WHERE c.series = 1 AND c.season = 1
ORDER BY c.id_chapter
LIMIT 1;

-- película más corta
SELECT title FROM films
ORDER BY duration
LIMIT 1;

-- ordenar las temporadas de todas las series en función del número de capítulos, de mayor a menor
SELECT sr.title AS series_title, sa.title AS season_title, COUNT(ch.title) AS no_chapters
FROM series sr
JOIN seasons sa ON sr.id_series = sa.series
JOIN chapters ch ON sr.id_series = ch.series
GROUP BY ch.series
ORDER BY no_chapters DESC;

-- estudio por género, viendo cuántas series y películas tiene y cuál es el mejor valorado
SELECT COUNT(ts.title) AS no_titles, gr.name AS genre FROM total_scores ts
JOIN genres gr ON ts.genre = gr.id_genre
GROUP BY id_genre
ORDER BY no_titles DESC;

SELECT count(ts.rating) total_rating, gr.name AS genre FROM total_scores ts
JOIN genres gr ON ts.genre = gr.id_genre
GROUP BY id_genre
ORDER BY total_rating DESC
LIMIT 1;