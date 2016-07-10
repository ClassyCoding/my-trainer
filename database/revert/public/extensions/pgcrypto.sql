-- Revert my-trainer:public/extensions/pgcrypto from pg

BEGIN;

DROP EXTENSION pgcrypto;

COMMIT;
