DROP DATABASE IF EXISTS top_songsDB;
CREATE database top_songsDB;

USE top_songsDB;

CREATE TABLE top5000 (
  position INT NOT NULL,
  artist VARCHAR(100)NOT NULL,
  song VARCHAR(100) NOT NULL,
  year INT NOT NULL,
  raw_total DECIMAL(10,4) NULL,
  raw_usa DECIMAL(10,4) NULL,
  raw_uk DECIMAL(10,4) NULL,
  raw_eur DECIMAL(10,4) NULL,
  raw_row DECIMAL(10,4) NULL,
  PRIMARY KEY (position)
);

SELECT * FROM top5000;

SELECT * FROM top_songsdb.top5000;

USE top_songsdb;

SELECT *
FROM top5000
WHERE artist = 'pink floyd';

SELECT artist,
COUNT(*) c
FROM top5000
GROUP BY artist
HAVING c > 1; 
