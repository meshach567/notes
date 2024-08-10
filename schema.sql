CREATE TABLE notes (
    id integer PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(255) NOT NULL,
    contents TEXT NOT NULL,
    created TIMESTAMP NOT NULL DEFAULT NOW()
);

INSERT INTO  notes (title, contents) VALUES ('My First Notes', 'A note about something'), ('My Second Notes', 'A note about something else');

SELECT * FROM notes;

