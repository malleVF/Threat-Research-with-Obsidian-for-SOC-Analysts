---
file_created: <% tp.date.now("YYYY-MM-DD @ HH:mm [(UTC] Z[)]") %>
cssclasses:
  - wide-page
type: report
report: "[[<%tp.file.folder(false)%> Report#^summary|Summary]]"
case_id: "[[<%tp.file.folder(false)%> Report|<%tp.file.folder(false)%>]]"
tags:
  - report
  - <%tp.file.folder(false)%>
case_closed:
---
> [!multi-column]
>
>> [!Note] Cases & Actions
>> #### `button-action`
>> #### [[MOC_ Changes on <%tp.file.folder(false)%> files|♻️ Changes on files]]
>
>> [!Abstract] Goto
>> #### [[🏠 Dashboard]]
>
>> [!help]
>> #### [[📚 Readme#^hotkeys\|🔑 Hotkeys]]
>> #### [[📚 Readme#❓Case Report| ❓Help]]

# <%tp.file.folder(false)%> Report

## Summary

_==You should write down your conclusion here==_

^summary

## Tasks

```dataview
TASK
FROM "<%tp.file.folder(true)%>"
WHERE !fullyCompleted
GROUP BY file.link
```

>[!Success]- Closed Tasks
>```dataview
> TASK
> FROM "<%tp.file.folder(true)%>"
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

FROM "<%tp.file.folder(true)%>"
WHERE type != "report" AND type != "moc"
SORT file.link ASC
```
