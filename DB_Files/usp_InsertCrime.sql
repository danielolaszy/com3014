-- ========================================================
-- Author:		Group03 - DataScience MSc - Sept 2021
-- Create date: 14-04-2022
-- Description:	This procedure creates a new crime record
-- ========================================================
CREATE PROCEDURE InsertCrime
	@CrimeCategory		varchar(50),
	@Location			varchar(50),
	@Status				varchar(10),
	@Description		varchar(250),
	@Reported_Date		date
AS
BEGIN
----Declare variables
	Declare @CrimeId	varchar(50)
	Declare @Message	varchar(256)
	Declare @Errno		int
	Declare @ErrMsg		varchar(255)

----Initialize variables	
	set @CrimeId = 0
	set @Message	= ' '
	set @Errno		= 0
	set @ErrMsg		= ' '
----Validate Input parameters

----Set Crime ID
	set @CrimeId = (SELECT MAX(Crime_Id) FROM Crime_Data)

----Check City ID to see if it exists
	if @CrimeId is NULL
	begin
		set @CrimeId = 1
	end
	else
	begin
		set @CrimeId = @CrimeId + 1
	end

----Insert Crime
	begin
		begin transaction
			begin try
				INSERT INTO Crime_Data VALUES
				(@CrimeId,@CrimeCategory,@Location,@Status,@Description,@Reported_Date)
			end try
			begin catch
			    set @Errno  = (SELECT ERROR_NUMBER())
				set @ErrMsg = (SELECT ERROR_MESSAGE())
				set @Message = 'Err01:'+ rtrim(cast(@Errno as char(10))) + '-' + @ErrMsg
				if @@TRANCOUNT > 0
				   ROLLBACK TRANSACTION;
			    GOTO Endpgm 
			end catch
		if @@TRANCOUNT > 0
		   COMMIT TRANSACTION;
	end
	set @Message = 'Success: Crime Inserted Successfully'
	Endpgm:
	   print 'Message:: '+@Message
END