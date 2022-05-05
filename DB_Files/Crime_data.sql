CREATE TABLE Crime_Status_Lookup
( Crime_Status		varchar(10)	not null,
  Status_Desc		varchar(100) not null	,
  Primary key(Crime_Status)
);

insert into Crime_Status_Lookup values
('Mur','Murder'),
('Rob','Robery');

CREATE TABLE Crime_Data
( Crime_Id			int			not null,
  Crime_Category	varchar(50) not null,
  Crime_Location	varchar(50) not null,
  Crime_Status		varchar(10) not null,
  Crime_Desc		varchar(250),
  Reported_Date		date not null,
  Primary key(Crime_Id),
  FOREIGN KEY(Crime_Status) REFERENCES Crime_Status_Lookup(Crime_Status)
);