CREATE DATABASE chat;
USE chat;
-- //specifies DATABASE
CREATE TABLE Messages (
  MessagesID INT(11) not null primary key auto_increment,
  text VARCHAR(280),
  User INT(11),
  FOREIGN KEY (User) REFERENCES User(UserID),
  Room INT(11)
  FOREIGN KEY (Room) REFERENCES Room(RoomID),
);


CREATE TABLE User (
  UserID INT(11) not null primary key auto_increment,
  Name VARCHAR(280)
);


CREATE TABLE Room (
  RoomID INT(11) not null primary key auto_increment,
  Name VARCHAR(280)
);

CREATE TABLE UserRoom (
  UserRoomID INT(11) not null primary key auto_increment,
  User INT(11),
  FOREIGN KEY (User) REFERENCES User(UserID),
  RoomID INT(11),
  FOREIGN KEY (Room) REFERENCES Room(RoomID)
);


INSERT INTO User VALUES ('null', 'Jacky');
INSERT INTO User VALUES ('null', 'Lucy');
INSERT INTO User VALUES ('null', 'Chris');
INSERT INTO User VALUES ('null', 'Tony');

INSERT INTO Room VALUES ('null', 'Lobby');
INSERT INTO Room VALUES ('null', 'PentHouse');
INSERT INTO Room VALUES ('null', 'School');
INSERT INTO Room VALUES ('null', 'Kitchen');



INSERT INTO Messages VALUES ('null', 'Lobby');
/* Create other tables and define schemas for them here! */




/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

-- SHOW TABLES; //all tables in database

-- CREATE TABLE pet (primarykey INT(11), name VARCHAR(20), owner VARCHAR(20),
--    );

-- DESCRIBE pet //to see how pet table looks like

-- SELECT * FROM pet //to see table

-- INSERT INTO pet VALUES ('2', 'Walter', 'Lucy');

-- UPDATE pet SET owner //key = ‘timothy’ //new value WHERE name=‘mochi’;