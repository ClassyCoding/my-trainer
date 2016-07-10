-- Revert my-trainer:trainer/tables/exercise from pg

BEGIN;

SET search_path TO trainer, public;

DROP TABLE exercise;

COMMIT;
