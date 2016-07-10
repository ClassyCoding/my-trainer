-- Deploy my-trainer:trainer/tables/exercise to pg

BEGIN;

SET search_path TO trainer, public;

CREATE TABLE exercise(
    id              uuid       NOT NULL DEFAULT gen_random_uuid(),
    display_name    text       NOT NULL,
    slot_name       text       NOT NULL,
    unit            uuid       NOT NULL,

    PRIMARY KEY (id),
    UNIQUE (display_name),
    UNIQUE (slot_name),

    FOREIGN KEY (unit) REFERENCES unit(id)
        ON UPDATE CASCADE ON DELETE RESTRICT
);

COMMIT;
