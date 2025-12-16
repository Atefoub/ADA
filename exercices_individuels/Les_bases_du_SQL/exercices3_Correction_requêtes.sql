CREATE TABLE articles (
  id INT AUTO_INCREMENT PRIMARY KEY,
  description VARCHAR(255) NOT NULL,
  price DECIMAL(5,2) NOT NULL
);

INSERT INTO articles (description, price) VALUES ('Malabar', 2.0);
INSERT INTO articles (description, price) VALUES ('Fraise Tagada', 2.5);
INSERT INTO articles (description, price) VALUES ('Carambar', 1.5);
INSERT INTO articles (description, price) VALUES ('Michoko', 3.5);
INSERT INTO articles (description, price) VALUES ('Calissons d''Aix', 8.0);


SELECT * FROM articles;

-- Désactivation temporaire du mode sécurisé
SET SQL_SAFE_UPDATES = 0;

UPDATE articles
SET price = 1.1
WHERE description = 'Carambar';

DELETE FROM articles
WHERE description = 'Fraise Tagada';

-- Réactivation du mode sécurisé (optionnel)
SET SQL_SAFE_UPDATES = 1;

SELECT * FROM articles;