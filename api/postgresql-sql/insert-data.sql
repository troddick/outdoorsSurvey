INSERT INTO public.persons(
	name, age, season, reason, activity, location)
	VALUES
	('Christopher', 30, 2, 'I love riding my bike outside all summer.', 1, 2),
	('Mary', 24, 4, 'I love watching the snow fall.', 5, 4),
	('Matthew', 50, 3, 'Fall colors are the best', 2, 5),
	('Caiden', 29, 1, 'Seeing spring blooming all around is so pretty', 4, 2),
	('Tina', 56, 2, 'I love the warmth.', 6, 1),
	('Madelynn', 32, 3, 'The temps are perfect in the fall!', 3, 5),
	('June', 19, 2, 'I love hiking all summer.', 2, 3);

INSERT INTO public.activities(label)
    VALUES 
    ('Biking'),
    ('Hiking'),
    ('Running'),
    ('Skating'),
    ('Skiing'),
    ('Swimming');

INSERT INTO public.locations(label)
    VALUES 
    ('City'),
    ('Coastal'),
    ('Desert'),
    ('Mountains'),
    ('Rural');


INSERT INTO public.seasons(label)
    VALUES 
    ('Spring'),
    ('Summer'),
    ('Fall'),
    ('Winter');
