create database aswanth;
use aswanth;
CREATE TABLE Customer (
	Name varchar(50),
    ID int NOT NULL PRIMARY KEY,
    Email varchar(50),
    Address varchar(50)
);

ALTER TABLE Customer
ADD PhoneNo int(10) Not NULL after Email;

ALTER TABLE Customer
ADD PanNo varchar(50) NOT NULL unique AFTER PhoneNo;

ALTER TABLE Customer CHANGE column Email EmailAddress varchar(50);

ALTER TABLE Customer DROP COLUMN PanNo;

INSERT INTO Customer VALUES(
("Aswanth", 1, "aswanth@gamil.com", "sathy", 123456789),
("Senthil", 2, "senthil@gamil.com", "sathy", 123456789),
("Nadhin", 3, "nadhin@gamil.com", "sathy", 123456789),
("Abitha", 4, "abitha@gamil.com", "sathy", 123456789)
);