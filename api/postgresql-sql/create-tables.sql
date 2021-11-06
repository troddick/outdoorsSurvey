-- Table: public.activities
-- DROP TABLE public.activities;
CREATE TABLE IF NOT EXISTS public.activities
(
    value integer NOT NULL DEFAULT nextval('activities_value_seq'::regclass),
    label character varying(25) COLLATE pg_catalog."default" NOT NULL
)
TABLESPACE pg_default;
ALTER TABLE public.activities
    OWNER to postgres;


-- Table: public.locations
-- DROP TABLE public.locations;
CREATE TABLE IF NOT EXISTS public.locations
(
    value integer NOT NULL DEFAULT nextval('locations_value_seq'::regclass),
    label character varying(25) COLLATE pg_catalog."default" NOT NULL,
    CONSTRAINT locations_pkey PRIMARY KEY (value)
)
TABLESPACE pg_default;
ALTER TABLE public.locations
    OWNER to postgres;


-- Table: public.persons
-- DROP TABLE public.persons;
CREATE TABLE IF NOT EXISTS public.persons
(
    id integer NOT NULL DEFAULT nextval('persons_id_seq'::regclass),
    age smallint,
    season smallint NOT NULL,
    reason character varying(500) COLLATE pg_catalog."default",
    activity smallint NOT NULL,
    location smallint NOT NULL,
    name character varying(100) COLLATE pg_catalog."default",
    CONSTRAINT persons_pkey PRIMARY KEY (id)
)
TABLESPACE pg_default;
ALTER TABLE public.persons
    OWNER to postgres;

    
-- Table: public.seasons
-- DROP TABLE public.seasons;
CREATE TABLE IF NOT EXISTS public.seasons
(
    value integer NOT NULL DEFAULT nextval('seasons_value_seq'::regclass),
    label character varying(25) COLLATE pg_catalog."default" NOT NULL,
    CONSTRAINT seasons_pkey PRIMARY KEY (value)
)
TABLESPACE pg_default;
ALTER TABLE public.seasons
    OWNER to postgres;