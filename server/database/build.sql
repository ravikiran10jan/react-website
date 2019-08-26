BEGIN;
DROP TABLE IF EXISTS users ,connections,CASCADE;
DROP TYPE IF EXISTS states;

CREATE TYPE states AS ENUM ('approved', 'pending', 'decline');



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
  "company_name" varchar(100),
  "linked_profile" varchar(100),
  "achievement" varchar(300),
  "about_me" varchar(300),
  "skypeid" varchar(100),
  "website" varchar(100),
  "institution_name" varchar(100),
  "skills_learn" varchar[] ,
  "skills_masterd" varchar[],
  "industry" varchar(20),
  "image" varchar(1000) DEFAULT 'https://www.shareicon.net/data/2016/08/05/806962_user_512x512.png',
   	CONSTRAINT users_pk PRIMARY KEY ("id")
);


CREATE TABLE "connections" (
	"id" serial NOT NULL,
	"sender_user_id" int NOT NULL,
	"receiver_user_id" int NOT NULL,
	"relation_state" states DEFAULT 'pending',
	"date_created" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	CONSTRAINT connections_pk PRIMARY KEY ("sender_user_id", "receiver_user_id")
);


ALTER TABLE "connections" ADD CONSTRAINT "connections_fk0" FOREIGN KEY ("sender_user_id") REFERENCES "users"("id")  ON DELETE CASCADE;
ALTER TABLE "connections" ADD CONSTRAINT "connections_fk1" FOREIGN KEY ("receiver_user_id") REFERENCES "users"("id")  ON DELETE CASCADE;
















COMMIT;
