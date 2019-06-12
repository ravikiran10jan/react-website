BEGIN;
DROP TABLE IF EXISTS users ,CASCADE;
DROP TYPE IF EXISTS skills_learn, skills_masterd;
CREATE TYPE skills_learn AS ENUM ('HTML','CSS','javascript','react');
CREATE TYPE skills_masterd AS ENUM ('PHP','node','express','java');



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
  "Institution_name" varchar(100),
  "skills_learn" skills_learn ,
  "skills_masterd" skills_masterd,
  "industry" varchar(20),
  "image" varchar(200) DEFAULT 'https://www.shareicon.net/data/2016/08/05/806962_user_512x512.png'
);




INSERT INTO users (first_name,last_name,email,mobile,country_code,city,position,gender,password) VALUES ('eman','kaled','eman@h.live','059','0097','gaza','palestain','female','123');












COMMIT;
