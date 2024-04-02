---
file_created: 2024-03-29 @ 20:24 (UTC +01:00)
cssclasses:
  - wide-page
artifact_type: report
report: "[[Case-2025 Report#^summary|Summary]]"
case_id: "[[Case-2025 Report|Case-2025]]"
tags:
  - report
  - Case-2025
case_closed:
---

<div id="Frame">

> [!multi-column]
>
>> [!Note] Cases & Actions
>> #### `button-action`
>> #### `button-light-mode`  `button-dark-mode` `button-print`
>
>> [!Abstract] Goto
>> #### [[🏠 Dashboard]]
>> #### [[MOC_ Changes on Case-2025 files|♻️ Changes on files]]
>
>> [!help]
>> #### [[📚 Readme#^hotkeys\|🔑 Hotkeys]]
>> #### [[📚 Readme#❓Case Report| ❓Help]]

</div>

![[SOC-Expert_logo_transparent.png|320]]

---

# Cyber Security Investigation Report

## File: Case-2025

---
##### Author:  M. Malewski

##### Date of Report: 2024-03-29 @ 20:24 (UTC +01:00)


# Investigation Summary

Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquid ex ea commodi consequat. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.

^summary

### Impact

Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquid ex ea commodi consequat. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. 

### Recommendation

Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquid ex ea commodi consequat. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. 

### Timeline

Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquid ex ea commodi consequat. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. 

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
artifact_type AS "Type",
sop_completed AS "Investigation Completed",
classification AS "Classification",
file.ctime AS "Date Created"

FROM "Cases"

WHERE artifact_type != "report" AND type != "moc" AND (file.folder = this.file.folder OR any(file.outlinks, (l) => contains(string(l), this.file.folder)))
SORT file.link ASC
```
