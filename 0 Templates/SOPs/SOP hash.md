<%*
const file = tp.file.title;
const input_sp = file.split(' '); 
const input = input_sp[1];
const artifact_type = input_sp[0];
var case_id = tp.file.folder(false);
-%>
---
cssclasses: wide-page
file_created: <% tp.date.now("YYYY-MM-DD @ HH:mm [(UTC] Z[)]") %>
artifact: <%input%>
artifact_type: <%artifact_type%>
case_id: "[[<%case_id%> Report|<%case_id%>]]"
tags: <%artifact_type%> <%case_id%>
locations:
note: "[[<%case_id%>/<%file%>#^note|Note]]"
aliases: <%input%>
sop_completed: 
---

<div id="Frame">

> [!multi-column]
>
>> [!Note] Cases & Actions
>> #### `button-action`
>> #### `button-light-mode`  `button-dark-mode` `button-print`
>
>> [!Abstract] Goto
>> #### [[<%case_id%> Report| 📑 Case Report]] 
>> #### [[🏠 Dashboard]]
>
>> [!help]
>> #### [[📚 Readme#^hotkeys\|🔑 Hotkeys]]
>> #### [[📚 README#❓Hash - SOP|❓Help]]

</div>

![[SOC-Expert_logo_transparent.png|320]]

---

#  Investigation: <%input%>

## File: <%case_id%>

---
##### Author:  M. Malewski

##### Date of Report: <% tp.date.now("YYYY-MM-DD @ HH:mm [(UTC] Z[)]") %>

<br>

# Analyst's Notes

_==You should write down your results here==_

^note

### Artifact Uncovered in Other Cases

```dataview
TABLE 

file.folder AS "Case ID",
file.ctime AS "Created @"

WHERE any(file.outlinks, (l) => contains(string(l), "<%file%>")) AND file.folder != this.file.folder
```

### Tasks

```dataview
TASK
FROM "<%tp.file.folder(true)%>/<%file%>"
WHERE !fullyCompleted OR fullyCompleted
```

# Result of Actions

_==start Action Templates from here in edit mode==_

<div id="Frame">

# Standard Operating Procedures

## Default Tasks

- [ ] **<%input%>**:   Execute the [[Action hash sha256 - Maltiverse]] Template
- [ ] **<%input%>**:  Evaluate the classification metrics


</div>