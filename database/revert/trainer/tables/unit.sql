-- Revert my-trainer:trainer/tables/unit from pg

BEGIN;

SET search_path TO trainer, public;

DROP TABLE unit;

COMMIT;
