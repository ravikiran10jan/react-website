BEGIN;
DROP TABLE IF EXISTS users CASCADE;


CREATE TABLE "users" (
  "id" serial NOT NULL,
	"first_name" varchar(30) NOT NULL,
	"last_name" varchar(30) NOT NULL ,
	"email" varchar(30) NOT NULL UNIQUE,
  "mobile" varchar(30) NOT NULL ,
  "country_code" varchar(10) NOT NULL ,
  "city" varchar(20) NOT NULL,
  "position" varchar(30) NOT NULL,
  "gender" varchar(20) NOT NULL,
	"password" varchar(100) NOT NULL,
	CONSTRAINT users_pk PRIMARY KEY ("id")
);










COMMIT;
