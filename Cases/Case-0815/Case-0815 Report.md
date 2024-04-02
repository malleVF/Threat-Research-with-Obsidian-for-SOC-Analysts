---
file_created: 2024-04-01 @ 19:46 (UTC +02:00)
cssclasses:
  - wide-page
artifact_type: report
report: "[[Case-0815 Report#^summary|Summary]]"
case_id: "[[Case-0815 Report|Case-0815]]"
tags:
  - report
  - Case-0815
case_closed:
---

<div id="Frame">

> [!multi-column]
>
>> [!Note] Cases & Actions
>> #### `button-action`
>> #### `button-light-mode`   `button-dark-mode`  `button-print`
>
>> [!Abstract] Goto
>> #### [[🏠 Dashboard]]
>> #### [[MOC_ Changes on Case-0815 files|♻️ Changes on files]]
>
>> [!help]
>> #### [[📚 Readme#^hotkeys\|🔑 Hotkeys]]
>> #### [[📚 Readme#❓Case Report| ❓Help]]

</div>

![[SOC-Expert_logo_transparent.png|320]]

---

# Cyber Security Investigation Report

## File: Case-0815

---
##### Author:  M. Malewski

##### Date of Report: 2024-03-29 @ 20:24 (UTC +01:00)


# Investigation Summary

_==You should write down your conclusion here==_

^summary

### Impact



### Recommendation



### Timeline



## Tasks

```dataview
TASK
FROM "Cases/Case-0815"
WHERE !fullyCompleted
GROUP BY file.link
```

>[!Success]- Closed Tasks
>```dataview
> TASK
> FROM "Cases/Case-0815"
> WHERE fullyCompleted
> GROUP BY file.link
> ```

## Artifacts

```dataview
TABLE WITHOUT ID

file.link AS "Artifact",
artifact_type AS "Type",
sop_completed AS "Investigation Completed",
classification AS "Classification",
file.ctime AS "Date Created"

FROM "Cases"

WHERE artifact_type != "report" AND type != "moc" AND (file.folder = this.file.folder OR any(file.outlinks, (l) => contains(string(l), this.file.folder)))
SORT file.link ASC
```
