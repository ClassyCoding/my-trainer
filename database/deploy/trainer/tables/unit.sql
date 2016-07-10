-- Deploy my-trainer:trainer/tables/unit to pg

BEGIN;

SET search_path TO trainer, public;

CREATE TABLE unit(
    id                uuid       NOT NULL DEFAULT gen_random_uuid(),
    display_name      text       NOT NULL,
    slot_name         text       NOT NULL,

    PRIMARY KEY (id),
    UNIQUE (display_name),
    UNIQUE (slot_name)
);

COMMIT;
