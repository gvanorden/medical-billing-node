IF OBJECT_ID('sp_CPT_Crosswalk_Letters', 'P') IS NOT NULL
DROP PROCEDURE sp_CPT_Crosswalk_Letters

GO

CREATE PROCEDURE sp_CPT_Crosswalk_Letters (@code VARCHAR(128))
AS
BEGIN
	SELECT [Letter] FROM [dbo].[MC_CPT_Crosswalk_Letters] WHERE [Code] = @code ORDER BY [Letter]
END

GO

IF OBJECT_ID('sp_CPT_Crosswalk_Categories', 'P') IS NOT NULL
DROP PROCEDURE sp_CPT_Crosswalk_Categories

GO

CREATE PROCEDURE sp_CPT_Crosswalk_Categories (@code VARCHAR(64), @letter VARCHAR(16))
AS
BEGIN
	SELECT [Letter] + CAST(ROW_NUMBER() OVER (ORDER BY [Category]) AS VARCHAR(12)) [Key], [Range], [Category] FROM [dbo].[MC_CPT_Category_Ranges_Testing]
	WHERE [Code] = @code AND [Letter] = @letter ORDER BY [Letter], [Category]
END

GO


IF OBJECT_ID('sp_CPT_Crosswalk_Diagnosis_Codes', 'P') IS NOT NULL
DROP PROCEDURE sp_CPT_Crosswalk_Diagnosis_Codes

GO

CREATE PROCEDURE sp_CPT_Crosswalk_Diagnosis_Codes (@code VARCHAR(64), @letter VARCHAR(16), @category VARCHAR(1024))
AS
BEGIN
	SELECT [Diagnosis], [Description] FROM [dbo].[MC_CPT_Crosswalk_Testing] 
	WHERE [Code] = @code AND [Letter] = @letter AND [Category] = @category
	ORDER BY [Letter], [Diagnosis]
END

GO

EXEC sp_CPT_Crosswalk_Testing '64788'

 EXEC sp_CPT_Crosswalk_Testing '10021'

 SELECT Code, COUNT(DISTINCT Letter), COUNT(Diagnosis) FROM MC_CPT_Crosswalk GROUP BY Code

 SELECT * FROM MC_CPT_Edits

EXEC sp_CPT_Crosswalk_Letters '10021'
EXEC sp_CPT_Crosswalk_Categories '10021', 'C'
EXEC sp_CPT_Crosswalk_Diagnosis_Codes '10021', 'C', 'Malignant Neoplasms'

SELECT * FROM [dbo].[MC_CPT_Crosswalk_Testing] WHERE [Code] = '10021'

SELECT LEN('Malignant neoplasms')


DROP TABLE  MC_CPT_Category_Ranges_Testing
SELECT * FROM  MC_CPT_Category_Ranges_Testing


SELECT
	[Code],
	[Letter],
	CAST(MIN([Diagnosis]) AS VARCHAR(64)) + ' - ' + CAST(MAX([Diagnosis]) AS VARCHAR(64)) [Range],
	[Category]
INTO MC_CPT_Category_Ranges_Testing
FROM MC_CPT_Crosswalk_Testing
GROUP BY [Code], [Letter], [Category]
