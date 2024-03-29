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
>> #### [[MOC_ Changes on my notes|♻️ Changes on files]]
>
>> [!Abstract] Goto
>> #### [[MOC_ Changes on my notes|♻️ Changes on files]]
>
>> [!help]
>> #### [[📚 Readme#^hotkeys\|🔑 Hotkeys]] 
>> #### [[📚 Readme\|❓Help]]

# 🛠 My Worklog

## 🗂️  Cases

```dataview

TABLE WITHOUT ID

case_id AS "Case",
report AS "Report",
file.ctime AS "Created @"

FROM "Cases"
WHERE type = "report" AND (case_closed != true)
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

## 

 > [!multi-column]
>
>>[!todo] ## 📝 Tasks
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
>>WHERE case_id AND type != "report"
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

-  ##  #mcl/list-card
> [! warning] Created Notes (last 20)
> ![[MOC_ Files Created#^list]]

-  ##  
> [! danger ] Modified Notes (last 20)
> ![[MOC_ Files Modified#^list]]

