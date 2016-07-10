-- Deploy my-trainer:public/extensions/pgcrypto to pg

BEGIN;

CREATE EXTENSION pgcrypto;

COMMIT;
