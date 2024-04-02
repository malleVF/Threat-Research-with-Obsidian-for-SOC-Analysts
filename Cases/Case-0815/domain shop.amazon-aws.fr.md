---
cssclasses: wide-page
file_created: 2024-04-01 @ 19:47 (UTC +02:00)
artifact: shop.amazon-aws.fr
artifact_type: domain
case_id: "[[Case-0815 Report|Case-0815]]"
tags:  domain Case-0815
locations:
note: "[[Case-0815/domain shop.amazon-aws.fr#^note|Note]]"
aliases: shop.amazon-aws.fr
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
>> #### [[Case-0815 Report| 📑 Case Report]] 
>> #### [[🏠 Dashboard]]
>
>> [!help]
>> #### [[📚 Readme#^hotkeys\|🔑 Hotkeys]]
>> #### [[📚 README#❓Domain - SOP|❓Help]]

</div>

![[SOC-Expert_logo_transparent.png|320]]

---

#  Investigation: shop.amazon-aws.fr

## File: Case-0815

---
##### Author:  M. Malewski

##### Date of Report: 2024-04-01 @ 19:47 (UTC +02:00)

<br>

# Analyst's Notes

_==You should write down your results here==_

^note

### Artifact Uncovered in Other Cases

```dataview
TABLE 

file.folder AS "Case ID",
file.ctime AS "Created @"

WHERE any(file.outlinks, (l) => contains(string(l), "domain shop.amazon-aws.fr")) AND file.folder != this.file.folder
```

### Tasks

```dataview
TASK
FROM "Cases/Case-0815/domain shop.amazon-aws.fr"
WHERE !fullyCompleted OR fullyCompleted
```

# Result of Actions

## domain Action Maltiverse

>[!info]- raw event
>Source: Maltiverse | Collection Date: 2024-04-01 @ 20:12 (UTC +02:00)
> #malicious
> ```json
> {"blacklist":[{"count":50,"description":"Cobalt Strike","first_seen":"2024-03-22 12:22:27","labels":["malicious-activity"],"last_seen":"2024-03-24 12:20:55","source":"ThreatFox Abuse.ch"}],"classification":"malicious","creation_time":"2024-03-22 13:20:10","domain":"amazon-aws.fr","domain_consonants":10,"domain_lenght":18,"entropy":3.57243125132212,"hostname":"shop.amazon-aws.fr","is_alive":false,"is_cnc":false,"is_distributing_malware":false,"is_iot_threat":false,"is_mining_pool":false,"is_phishing":false,"is_storing_phishing":false,"last_online_time":"2024-03-24 12:35:13","modification_time":"2024-03-24 12:35:13","number_of_offline_malicious_urls_allocated":0,"number_of_online_malicious_urls_allocated":0,"tag":["as16276","c2","censys","cobaltstrike","cs-watermark-589697719","ovh","agentemis","beacon","cobeacon"],"tld":"fr","type":"hostname"} 
> ```

## Classification [[📚 README#❓Maltiverse Classification|ℹ️]]

Artifact: shop.amazon-aws.fr
Type: domain
Classification:: #malicious
Description:: Cobalt Strike 

>[!Danger] | | |
>|---|---|
>| Is Alive | false |
>| Last Online Time | 2024-03-24 12:35:13 |
>| CNC  | false |
>| Distributing Malware | false |
>| IoT Threat | false |
>| Mining Pool | false |
>| Phishing | false |
>| Storing Phishing | false |

For more Information: [Maltiverse](https://maltiverse.com/hostname/shop.amazon-aws.fr)

<div id="Frame">

# Standard Operating Procedures

## Default Tasks

- [x] **shop.amazon-aws.fr**:  Execute the [[Action Domain - Maltiverse]] Template ✅ 2024-04-01
- [x] **shop.amazon-aws.fr**:  Examine ownership of IP by running [[WHOIS Search]] ✅ 2024-04-01

## Domain

### Web tracking codes

### Domain creation date(s)

### Subdomains

### Components

### Cookies

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
- 
#### Abuse contact

- Name
- Company
- Physical address
- Email
- Phone
- 
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

- [ ] **shop.amazon-aws.fr**: Check [[Computer infrastructure]]

### Ports Open

### TLS/SSL Certificate History

- Phone Number(s)
- E-mail address(es)
- IP address(es)
- [ ] **shop.amazon-aws.fr**: Use [[Encryption certificates]]

##  DNS Entries

### A record(s)

### CNAME record(s)

### MX record(s)

### NS record(s)

### SOA

### TXT record(s)

</div>
