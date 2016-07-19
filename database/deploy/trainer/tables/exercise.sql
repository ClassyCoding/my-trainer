-- Deploy my-trainer:trainer/tables/exercise to pg

BEGIN;

SET search_path TO trainer, public;

CREATE TABLE exercise(
    id              uuid       NOT NULL DEFAULT gen_random_uuid(),
    display_name    text       NOT NULL,
    slot_name       text       NOT NULL,
    -- Weight to be expressed in lbs.
    has_weight      boolean    NOT NULL,

    PRIMARY KEY (id),
    UNIQUE (display_name),
    UNIQUE (slot_name)
);

COMMIT;
