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
INTO MC_ICD_SomeCategories
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
	FROM [MC_ICD_Codes]
	WHERE SUBSTRING([Diagnosis], 2, LEN([Diagnosis])) NOT LIKE '%[A-Z]%'
) b ON b.Letter = a.Letter AND b.[Code] BETWEEN a.[Prefix] AND a.[Suffix]


DROP TABLE MC_CPT_Crosswalk_Testing

SELECT
	c.[Code],
	c.[Letter],
	c.[Diagnosis],
	MIN(s.[Category]) [Category],
	c.[Description]
INTO MC_CPT_Crosswalk_Testing
FROM MC_CPT_Crosswalk c
LEFT JOIN MC_ICD_SomeCategories s
ON c.Diagnosis = s.Diagnosis
GROUP BY c.[Code], c.[Letter], c.[Diagnosis], c.[Description]

CREATE INDEX crosswalk_category_idx ON [dbo].[MC_CPT_Crosswalk_Categories_Testing] ([Code])

SELECT * FROM [dbo].[MC_CPT_Crosswalk_Testing]

SELECT * FROM MC_CPT_Edits
SELECT [Code], [Link] INTO MC_CPT_Edits_Remaining FROM MC_CPT_Codes WHERE [Code] NOT IN (SELECT [Code] FROM [dbo].[MC_CPT_Edits]) AND [Code] NOT LIKE '%[A-Z]%' AND [Link] NOT LIKE '%modifier%' ORDER BY [Code] 

SELECT [Code], [Link] FROM MC_CPT_Edits_Remaining ORDER BY [Code]

SELECT * FROM [dbo].[MC_CPT_Edits_Saved]

UPDATE [dbo].[MC_CPT_Crosswalk_Testing] SET Category = 'No category' WHERE Category = 'None'
UPDATE [dbo].[MC_CPT_Crosswalk_Categories_Testing] SET Category = 'No category' WHERE Category = 'None'

SELECT DISTINCT [Code], [Letter], [Category] INTO [dbo].[MC_CPT_Crosswalk_Categories_Testing] FROM [dbo].[MC_CPT_Crosswalk_Testing]