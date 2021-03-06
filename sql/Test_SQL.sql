SELECT * FROM [dbo].[MC_CPT_Descriptions]
SELECT COUNT(*) FROM [dbo].[MC_CPT_Crosswalk]

select * from [dbo].[MC_ICD_Ranges]

SELECT * INTO [MC_ICD_Crosswalk_Temp] FROM [dbo].[MC_ICD_Crosswalk]


SELECT
	[Diagnosis], 
	[Description], 
	[Link], 
	[ID]
INTO [dbo].[MC_ICD_Codes_All]
FROM
(
	SELECT [Diagnosis], [Description], [Link], [ID] FROM [MC_ICD_Codes_Collected] 
	UNION
	SELECT [Diagnosis], [Description], [Link], [ID] FROM [dbo].[MC_ICD_Codes]
) x ORDER BY ID


SELECT [Code], [Link] FROM [MC_CPT_Codes] WHERE [Code] NOT LIKE '%[A-Z]%'


SELECT
	c.[Diagnosis],
	c.[Code],
	d.[Description]
FROM [dbo].[MC_ICD_Crosswalk] c
LEFT JOIN [dbo].[MC_CPT_Descriptions] d
ON d.[Code] = c.[Code]

SELECT
	[Range],
	[Description],
	[Code],
	[Link]
FROM MC_CPT_Codes
WHERE [Code] IN (SELECT [Code] FROM MC_CPT_Codes GROUP BY [Code] HAVING COUNT([Code]) > 1)

SELECT COUNT([Code]) FROM  MC_CPT_Codes
SELECT DISTINCT COUNT(DISTINCT [Code]) FROM  MC_CPT_Codes


SELECT * FROM MC_CPT_Codes WHERE [Code] = '10012'

SELECT * FROM [dbo].[MC_CPT_Descriptions]
SELECT TOP 1 * FROM [dbo].[MC_ICD_Crosswalk]

SELECT DISTINCT
	[Diagnosis], 
	[Code], 
	[Description]
INTO [dbo].[MC_ICD_Crosswalk_All]
FROM
(
	SELECT [Diagnosis], [Code], [Description] FROM [dbo].[MC_ICD_Crosswalk_Temp]
	UNION
	SELECT [Diagnosis], [Code], [Description] FROM [dbo].[MC_ICD_Crosswalk]
) x

;WITH range_cte AS
(
	SELECT
		CASE WHEN [Range] LIKE '%-%' THEN LEFT([Range], CHARINDEX('-', [Range]) - 1) ELSE [Range] END [Prefix],
		CASE WHEN [Range] LIKE '%-%' THEN SUBSTRING([Range], CHARINDEX('-', [Range]) + 1, LEN([Range])) ELSE [Range] END [Suffix],
		[Category]
	FROM [dbo].[MC_ICD_Ranges]
)
SELECT
	[Diagnosis],
	[Category],
	[Description]
FROM
(
	SELECT
		LEFT([Prefix], 1) [Letter],
		CAST(SUBSTRING([Prefix], 2, LEN([Prefix])) AS FLOAT) [Prefix],
		CAST(SUBSTRING([Suffix], 2, LEN([Suffix])) AS FLOAT) [Suffix],
		[Category]
	FROM [range_cte] WHERE LEFT([Prefix], 1) = LEFT([Suffix], 1) AND SUBSTRING([Suffix], 2, LEN([Suffix])) NOT LIKE '%[A-Z]%'
) a
INNER JOIN
(
SELECT
		[Diagnosis],
		LEFT([Diagnosis], 1) [Letter],
		CAST(SUBSTRING([Diagnosis], 2, LEN([Diagnosis])) AS FLOAT) [Code],
		[Description]
	FROM [MC_ICD_Codes_Collected]
	WHERE SUBSTRING([Diagnosis], 2, LEN([Diagnosis])) NOT LIKE '%[A-Z]%'
) b ON b.Letter = a.Letter AND b.[Code] BETWEEN a.[Prefix] AND a.[Suffix]



SELECT
	x.[Diagnosis],
	r.[Category],
	x.[Description]
FROM range_cte r
INNER JOIN
(
	SELECT
		[Diagnosis],
		LEFT([Diagnosis], 1) [Letter],
		CAST(SUBSTRING([Diagnosis], 2, LEN([Diagnosis])) AS FLOAT) [Code],
		[Description]
	FROM [MC_ICD_Codes_Collected]
	WHERE SUBSTRING([Diagnosis], 2, LEN([Diagnosis])) NOT LIKE '%[A-Z]%'
) x ON x.Letter = LEFT([Prefix], 1) AND x.Code BETWEEN CAST(SUBSTRING([Prefix], 2, LEN([Prefix])) AS FLOAT) AND CAST(SUBSTRING([Suffix], 2, LEN([Suffix])) AS FLOAT)




select * from [dbo].[MC_ICD_Ranges] WHERE LEFT([Range], 1) = 'L'

SELECT * FROM [MC_ICD_Codes_Collected] WHERE LEFT([Diagnosis], 1) = 'L' 