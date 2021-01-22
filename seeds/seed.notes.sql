BEGIN;

INSERT INTO note (note_name, content, assigned_folder)
VALUES

('note 1' , 'note 1 description', 1),
('note 2' , 'note 2 description', 1),
('note 3' , 'note 3 description', 1),
('note 4' , 'note 4 description', 1),
('note 5' , 'note 5 description', 1),
('note 2' , 'note 2 description', 2),
('note 3' , 'note 3 description', 3),
('note 4' , 'note 4 description', 4),
('note 5' , 'note 5 description', 5);
COMMIT;