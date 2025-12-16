-- Exercices SQL - Table Books

USE exercice_books;

-- Exercice 1 : Liste toutes les lignes de la table

SELECT * FROM books;

-- Exercice 2 : Liste uniquement les 5 premières lignes de la table

SELECT * FROM books LIMIT 5;

-- Exercice 3 : Liste uniquement le nom du livre et sa date de parution
-- Ordonné par date de parution : du plus ancien au plus récent

SELECT bookname, parution_date 
FROM books 
ORDER BY parution_date ASC;

-- Exercice 4 : Liste tous les livres dont l'autrice est Simone de Beauvoir

SELECT * FROM books 
WHERE author = 'Simone de Beauvoir';

-- Exercice 5 : Liste uniquement le nom des livres dont l'autrice est Simone de Beauvoir
-- et dont la date de parution est après 1950

SELECT bookname 
FROM books 
WHERE author = 'Simone de Beauvoir' 
AND parution_date > 1950;

-- Exercice 6 : Affiche le nombre de livres listés dans la table

SELECT COUNT(*) FROM books;