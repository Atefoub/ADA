CREATE TABLE songs (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255),
  artist VARCHAR(255),
  album VARCHAR(255),
  release_year INT
);

INSERT INTO songs (title, artist, album, release_year)
VALUES ('Shook Ones, Pt. II', 'Mobb Deep', 'The Infamous', 1995);

INSERT INTO songs (title, artist, album, release_year)songssongs
VALUES ('C.R.E.A.M.', 'Wu-Tang Clan', 'Enter the Wu-Tang (36 Chambers)', 1993);

INSERT INTO songs (title, artist, album, release_year)
VALUES ('Big Pimpin\'', 'Jay-Z', 'Vol. 3... Life and Times of S. Carter', 1999);