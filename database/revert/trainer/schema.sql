-- Revert my-trainer:trainer/schema from pg

BEGIN;

DROP SCHEMA trainer;

COMMIT;
