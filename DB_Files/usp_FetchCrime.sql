CREATE PROCEDURE  [dbo].[GetCrimeRecord]
	@CrimeId int,
	@Crime_Category		varchar(50) OUTPUT,
	@Crime_Location		varchar(50) OUTPUT,
	@Crime_Status		varchar(10) OUTPUT,
	@Crime_Desc			varchar(250) OUTPUT,
	@Reported_Date		date OUTPUT
AS 
SELECT	@Crime_Category = Crime_Category,
		@Crime_Location = Crime_Location,
		@Crime_Status = Crime_Status,
		@Crime_Desc = Crime_Desc, 
		@Reported_Date = Reported_Date
FROM Crime_Data
WHERE Crime_Id = @CrimeId