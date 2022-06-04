CREATE DATABASE Apollo;

USE Apollo;

CREATE TABLE publication (
	id INT PRIMARY KEY AUTO_INCREMENT,
    publication_name VARCHAR(250) NOT NULL,
	genre_name VARCHAR(250) NOT NULL,
    book_img VARCHAR(250) NOT NULL,
    book_name VARCHAR(250) NOT NULL,
    book_author VARCHAR(250) NOT NULL,
    book_price INT 
);

INSERT INTO publication(publication_name, genre_name,  book_img, book_name, book_author, book_price) 
VALUES ('aze', 'roman', 'a_one', 'Malva', 'Maxim Qorki', 3),
('aze', 'roman', 'a_two', 'Firildaqci', 'Maxim Qorki', 4),
('aze', 'roman', 'a_three', 'Ana', 'Maxim Qorki', 5),
('aze', 'dedektiv', 'a_four', 'Cinayet ve Ceza', 'Dostoyevski', 4),
('aze', 'dedektiv', 'a_five', 'Boyuk oyun', 'Cingiz Abdullayev', 5),
('aze', 'dedektiv', 'a_six', 'Xeste ruhlar', 'Elxan Elatli', 3),
('aze', 'fantastika', 'a_seven', 'Qaranlig gunes', 'Zaur Penehov', 3),
('aze', 'fantastika', 'a_eight', 'Ecineler Denizi', 'Rick Riordan', 5),
('aze', 'fantastika', 'a_nine', 'Felsefe dasi', 'C.K.Roulinq', 6),
('aze', 'fantastika', 'a_ten', 'Alov qedehi', 'C.K.Roulinq', 8),
('tr', 'roman', 't_one', 'Tutmuyanlar', 'Oguz Atay', 5),
('tr', 'roman', 't_two', 'salam', 'Sabahattin Ali', 4),
('tr', 'roman', 't_three', 'Karantina', 'Beyza Alkoc', 7),
('tr', 'roman', 't_four', 'Ruyamsin', 'Mira Yelkenci', 3),
('tr', 'dedektiv', 't_five', 'Kanli pazar', 'Osman Aysu', 5),
('tr', 'dedektiv', 't_six', 'Caylak', 'Nihal Orhan', 4),
('tr', 'dedektiv', 't_seven', 'Kayip', 'Osman Aysu', 3),
('tr', 'fantastika', 't_eight', 'Copculer', 'Darrin Simson', 8),
('tr', 'fantastika', 't_nine', 'Sahmeran', 'Mehmet Erdogan', 5),
('tr', 'fantastika', 't_ten', 'Ejderha gelin', 'Yeliz Cam', 6),
('eng', 'roman', 'e_one', 'War and Peace', 'Leo Tolstoy', 5),
('eng', 'roman', 'e_two', 'The trial', 'Franz Kafka', 7),
('eng', 'roman', 'e_three', 'The Stranger', 'Albert Camus', 5),
('eng', 'dedektiv', 'e_four', 'Enola Holmes', 'Nancy Springer', 9),
('eng', 'dedektiv', 'e_six', 'Sherlock Holmes', 'A.Canondole', 7),
('eng', 'dedektiv', 'e_seven', 'Kill Artist', 'Daniel Silva', 4),
('eng', 'dedektiv', 'e_eight', 'Death Dedective', 'E.Charlotte', 5),
('eng', 'fantastika', 'e_nine', 'Guardian of Dragon', 'Skye McKinn', 4),
('eng', 'fanstastika', 'e_ten', 'The Witcher', 'Andrzej Sapkovski', 8);

UPDATE publication SET book_name = 'Icimizdeki Seytan' WHERE book_author = 'Sabahattin Ali';
select * from publication;