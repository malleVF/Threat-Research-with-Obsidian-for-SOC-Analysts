<%*
const file = tp.file.title;
const input_sp = file.split(' '); 
const input = input_sp[1];
const artifact_type = input_sp[0];
var case_id = tp.file.folder(false);
-%>
---
file_created: <% tp.date.now("YYYY-MM-DD @ HH:mm [(UTC] Z[)]") %>
artifact: <%input%>
artifact_type: <%artifact_type%>
case_id: "[[<%case_id%> Report|<%case_id%>]]"
tags: <%artifact_type%> <%case_id%>
locations:
note: "[[<%case_id%>/<%file%>#^note|Note]]"
sop_completed: 
---
> [!multi-column]
>
>> [!Abstract] Goto
>> #### [[<%case_id%> Report| 📑 Case Report]] 
>> #### [[🏠 Dashboard]]
>
>> [!help]
>> #### [[📚 Readme#^hotkeys\|🔑 Hotkeys]]
>> #### [[📚 README#❓IPv4 - SOP|❓Help]]

# Artifact Uncovered in Other Cases

```dataview
TABLE 
file.folder AS "Case ID",
file.ctime AS "Created @"
WHERE file.name = this.file.name AND file.folder != this.file.folder
```

# Result of Actions

_==start Action Templates from here in edit mode==_

# Analyst's Notes

_==You should write down your results here==_

^note

# IP Addresses

## Standard Operating Procedures

- [ ] **<%input%>**: Use the [[Action IP - Maltiverse]] actions
- [ ] **<%input%>**: Examine ownership of IP by running [[WHOIS Search]]

## Whois Data

### Current Registration

#### Administrative contact

- Name
- Company
- Physical address
- Email
- Phone

#### Technical contact

- Name
- Company
- Physical address
- Email
- Phone

#### Abuse contact

- Name
- Company
- Physical address
- Email
- Phone

#### Dates

- Creation
- Update
- Expiration

#### Name Servers

- Name server 1

### Historic Registration

#### Administrative contact

- Name
- Company
- Physical address
- Email
- Phone

#### Technical contact

- Name
- Company
- Physical address
- Email
- Phone

#### Abuse contact

- Name
- Company
- Physical address
- Email
- Phone

#### Dates

- Creation
- Update
- Expiration

#### Name Servers

- Name server 1

## IP Address Owner

- Company name
- Location
- ASN

## Services

- [ ] **<%input%>**: Check [[Computer infrastructure]]
### Ports Open

### TLS/SSL Certificate History

- Phone Number(s)
- E-mail address(es)
- IP address(es)
- [ ] **<%input%>**: Use [[Encryption certificates]]
