-- ---
-- Globals
-- ---

-- SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
-- SET FOREIGN_KEY_CHECKS=0;

-- ---
-- Table 'notes'
--
-- ---
DROP DATABASE IF EXISTS studywise;
CREATE DATABASE studywise;

use studywise;

DROP TABLE IF EXISTS notes;

CREATE TABLE notes (
  -- id INT(20) NOT NULL,
  name VARCHAR(20),
  note MEDIUMTEXT,
  PRIMARY KEY (name)
);

-- ---
-- Table 'users'
--
-- ---
--
DROP TABLE IF EXISTS users;

CREATE TABLE users (
  id INTEGER(20) NOT NULL,
  name VARCHAR(20),
  PRIMARY KEY (id)
);

-- ---
-- Foreign Keys
-- ---

-- ALTER TABLE notes ADD FOREIGN KEY (user_id) REFERENCES users (id);

-- ---
-- Table Properties
-- ---

-- ALTER TABLE notes ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE users ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ---
-- Test Data
-- ---

-- INSERT INTO notes (id,name,text,user_id) VALUES
-- ('','','','');
-- INSERT INTO users (id,name) VALUES
-- ('','');
