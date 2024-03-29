---
file_created: 2024-03-29 @ 20:24 (UTC +01:00)
cssclasses:
  - wide-page
type: report
report: "[[Case-2025 Report#^summary|Summary]]"
case_id: "[[Case-2025 Report|Case-2025]]"
tags:
  - report
  - Case-2025
case_closed:
---
> [!multi-column]
>
>> [!Note] Cases & Actions
>> #### `button-action`
>> #### [[MOC_ Changes on Case-2025 files|♻️ Changes on files]]
>
>> [!Abstract] Goto
>> #### [[🏠 Dashboard]]
>
>> [!help]
>> #### [[📚 Readme#^hotkeys\|🔑 Hotkeys]]
>> #### [[📚 Readme#❓Case Report| ❓Help]]

# Case-2025 Report

## Summary

_==You should write down your conclusion here==_

^summary

## Tasks

```dataview
TASK
FROM "Cases/Case-2025"
WHERE !fullyCompleted
GROUP BY file.link
```

>[!Success]- Closed Tasks
>```dataview
> TASK
> FROM "Cases/Case-2025"
> WHERE fullyCompleted
> GROUP BY file.link
> ```

## Artifacts

```dataview
TABLE WITHOUT ID

file.link AS "Artifact",
sop_completed AS "Investigation Completed",
classification AS "Classification",
note AS "Analyst's Note",
file.ctime AS "Date Created"

FROM "Cases/Case-2025"
WHERE type != "report" AND type != "moc"
SORT file.link ASC
```
