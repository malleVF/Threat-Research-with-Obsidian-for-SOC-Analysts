---
file_created: 2024-03-25 @ 22:37 (UTC +01:00)
cssclasses:
  - wide-page
---

### 

> [!multi-column]
>
>> [!Note] Cases & Actions
>> #### `button-action`
>> #### Mode:  `button-light-mode`   `button-dark-mode`
>
>> [!Abstract] Goto
>> #### [[#♻️ Changes on My Notes]]
>
>> [!help]
>> #### [[📚 Readme#^hotkeys\|🔑 Hotkeys]] 
>> #### [[📚 Readme\|❓Help]]  |   [[Artifact_Creation.mp4|📺]]

<br>

# 🗂️  Cyber Security Investigation Reports

```dataview

TABLE WITHOUT ID

case_id AS "Case",
report AS "Report",
file.ctime AS "Created @"

FROM "Cases"
WHERE artifact_type = "report" AND (case_closed != true)
SORT file.link

```

>[!Success]- My Closed Cases
> ```dataview
> 
>TABLE WITHOUT ID
>	case_id AS "Case",
>	report AS "Report",
>	case_closed AS "Case Closed",
>	file.ctime AS "Created @"
>	FROM -"0 Template"
>WHERE type = "report" AND (case_closed = true)
>SORT file.mtime DESC
> ```

<br>

# 🛠 My Worklog

<br>

> [!multi-column]
>
>>[!todo] # 📝 Tasks
>>```dataview
>>TASK
>>
>>FROM -"0 Templates"
>>WHERE !fullyCompleted
>>GROUP By case_id
>>```
>
>>[!example] # Artifacts
>>
>>```dataview
>>
>>TABLE WITHOUT ID
>>
>>artifact AS Artifact,
>>artifact_type AS "Type",
>>case_id AS "Case",
>>classification
>>
>>FROM "Cases"
>>WHERE case_id AND artifact_type != "report"
>>SORT artifact ASC
>>
>>```

>[!Success]- Closed Tasks
>```dataview
> TASK
> FROM -"0 Templates"
> WHERE fullyCompleted
> GROUP BY case_id
> ```

# ♻️ Changes on My Notes

> [!multi-column] 
> 
>> [! note] Created notes
>> A list of all my Files created over time. Top 20 sorted by file creation time DESC. 
>> ```dataview
>> TABLE WITHOUT ID
>> file.link,
>> file.folder,
>> type,
>> file.ctime
>> FROM -"0 Templates"
>> SORT file.ctime DESC
>> LIMIT 20
>> ```
>  
>> [! warning ] Modified notes
>> A list of all my Files changed over time. Top 20 sorted by file modified time DESC. 
>> ```dataview
>> 
>> TABLE WITHOUT ID
>> file.link,
>> file.folder,
>> type,
>> file.mtime
>> 
>> SORT file.mtime DESC
>> LIMIT 20
>> ```

