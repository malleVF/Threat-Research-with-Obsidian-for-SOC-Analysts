---
file_created: 2024-03-23 @ 00:34 (UTC +01:00)
case_id: README
cssclasses: 
type: moc
---

## Table of Content
[[#How to Start]]
- [[#Vault Structure]]
- [[#Create Case & Add Artifacts]]
- [[#Enrich Artifacts with Context]]

[[#Help Pages]]
[[#Templates]]
[[#Obsidian Basics]]
- [[#Hotkeys]]

[[#Appendix]]
- [[#CSS Style Sheet]]
- [[#Community Plugins]]

---
# Readme

## How to Start

### Vault Structure

> [! Info] **CTI Research**
>> [! Info]- 0 Templates
>>> [!Example]- Actions
>>> - Main folder for templates accessed by SOC Analyst to create Case folder or Artifact files and to enrich them.
>>> ```query
>>> path: Actions
>>>```
>>
>>>[! info]- Attachments
>>> - The space for images and PDF files
>> 
>>> [! Example]- Helper
>>> - File with configuration for the Button displayed in the Dashboard and Case Reports
>>> - Predefined Case Report and MOC (Map of Content) Templates 
>>>```query
>>>path:Helper
>>>```
>>
>>> [! Example]- SOPs
>>> - All SOPs (Standard Operating Procedures) required for the Artifact files
>>> ```query
>>> path: SOPs
>>>```
>
>> [! Info]- Cases
>> - Main folder for all the Cases created by the SOC Analyst
>> - Every single Cases has his own subfolder with the Artifacts, Report and MOC. 
>
> - Main folder with Dashboard and README file etc.
> [[🏠 Dashboard]]
> [[📚 README]]


### Create Case & Add Artifacts

[![[CTI - Workflow Create Case & Artifact.png|720]]](obsidian://open?vault=CTI%20Research&file=Attachments%2FCTI%20-%20Workflow%20Create%20Case%20%26%20Artifact.png)
^workflow-create
### Enrich Artifacts with Context
[![[CTI - Workflow Execute Action Template.png|720]]](obsidian://open?vault=CTI%20Research&file=CTI%20-%20Workflow%20Execute%20Action%20Template.png)
^workflow-enrich

## Help Pages

### ❓Case Report


==help page for your Standard Operating Procedure==

### ❓CVE - SOP

==help page for your Standard Operating Procedure==

### ❓Domain - SOP


==help page for your Standard Operating Procedure==

### ❓Hash - SOP


==help page for your Standard Operating Procedure==

### ❓IPv4 - SOP


==help page for your Standard Operating Procedure==

### ❓Maltiverse

#### ❓Maltiverse Classification

|Classification Value|Description|
|---|---|
| **#malicious** | The IoC is currently involved in malicious activities and is considered to be harmful. |
| **#suspicious** | The IoC has been involved in malicious activities in the past and there are chances it has not ceased. |
| **#neutral** |  There is no information related to the IoC that could determine if it is good or bad. |
| **#whitelist** |The IoC is considered to be safe and will remain as it is despite new malicious classification incoming. |
Source: [Maltiverse](https://maltiverse.com/start) 

### ❓MITRE

#### ❓MITRE CVSS

|**CVSS Base Score**|**CVSS Severity Level**| tag |
|---|---|---|
| 0 | None | #whitelist |
| 0.1 - 3.9 | Low| #neutral |
| 4.0 - 6.9 | Medium| #suspicious |
| 7.0 - 8.9 | High| #suspicious |
| 9.0 - 10. | Critical| #malicious |
[FIRST](https://www.first.org/cvss/v3.1/specification-document)

#### ❓CVSS Metrics - Exploitability

##### Attack Vector

|Metric Value|Description|
|---|---|
|Network (N)|The vulnerable component is bound to the network stack and the set of possible attackers extends beyond the other options listed below, up to and including the entire Internet. Such a vulnerability is often termed “remotely exploitable” and can be thought of as an attack being exploitable _at the protocol level_ one or more network hops away (e.g., across one or more routers). An example of a network attack is an attacker causing a denial of service (DoS) by sending a specially crafted TCP packet across a wide area network (e.g., CVE‑2004‑0230).|
|Adjacent (A)|The vulnerable component is bound to the network stack, but the attack is limited _at the protocol level_ to a logically adjacent topology. This can mean an attack must be launched from the same shared physical (e.g., Bluetooth or IEEE 802.11) or logical (e.g., local IP subnet) network, or from within a secure or otherwise limited administrative domain (e.g., MPLS, secure VPN to an administrative network zone). One example of an Adjacent attack would be an ARP (IPv4) or neighbor discovery (IPv6) flood leading to a denial of service on the local LAN segment (e.g., CVE‑2013‑6014).|
|Local (L)|The vulnerable component is not bound to the network stack and the attacker’s path is via read/write/execute capabilities. Either:<br><br>- the attacker exploits the vulnerability by accessing the target system locally (e.g., keyboard, console), or remotely (e.g., SSH); _or_<br>- the attacker relies on User Interaction by another person to perform actions required to exploit the vulnerability (e.g., using social engineering techniques to trick a legitimate user into opening a malicious document).|
|Physical (P)|The attack requires the attacker to physically touch or manipulate the vulnerable component. Physical interaction may be brief (e.g., evil maid attack[1](https://www.first.org/cvss/v3.1/specification-document#fn:1)) or persistent. An example of such an attack is a cold boot attack in which an attacker gains access to disk encryption keys after physically accessing the target system. Other examples include peripheral attacks via FireWire/USB Direct Memory Access (DMA).|
[FIRST](https://www.first.org/cvss/v3.1/specification-document)

##### Attack Complexity

|Metric Value|Description|
|---|---|
|Low (L)|Specialized access conditions or extenuating circumstances do not exist. An attacker can expect repeatable success when attacking the vulnerable component.|
|High (H)|A successful attack depends on conditions beyond the attacker's control. That is, a successful attack cannot be accomplished at will, but requires the attacker to invest in some measurable amount of effort in preparation or execution against the vulnerable component before a successful attack can be expected.[2](https://www.first.org/cvss/v3.1/specification-document#fn:2) For example, a successful attack may depend on an attacker overcoming any of the following conditions:<br><br>- The attacker must gather knowledge about the environment in which the vulnerable target/component exists. For example, a requirement to collect details on target configuration settings, sequence numbers, or shared secrets.<br>- The attacker must prepare the target environment to improve exploit reliability. For example, repeated exploitation to win a race condition, or overcoming advanced exploit mitigation techniques.<br>- The attacker must inject themselves into the logical network path between the target and the resource requested by the victim in order to read and/or modify network communications (e.g., a man in the middle attack).|
[FIRST](https://www.first.org/cvss/v3.1/specification-document)

##### Privileges Required

|Metric Value|Description|
|---|---|
|None (N)|The attacker is unauthorized prior to attack, and therefore does not require any access to settings or files of the vulnerable system to carry out an attack.|
|Low (L)|The attacker requires privileges that provide basic user capabilities that could normally affect only settings and files owned by a user. Alternatively, an attacker with Low privileges has the ability to access only non-sensitive resources.|
|High (H)|The attacker requires privileges that provide significant (e.g., administrative) control over the vulnerable component allowing access to component-wide settings and files.|
[FIRST](https://www.first.org/cvss/v3.1/specification-document)

##### User Interaction

|Metric Value|Description|
|---|---|
|None (N)|The vulnerable system can be exploited without interaction from any user.|
|Required (R)|Successful exploitation of this vulnerability requires a user to take some action before the vulnerability can be exploited. For example, a successful exploit may only be possible during the installation of an application by a system administrator.|
[FIRST](https://www.first.org/cvss/v3.1/specification-document)

#### ❓CVSS Metrics - Impact

##### Confidentiality

|Metric Value|Description|
|---|---|
|High (H)|There is a total loss of confidentiality, resulting in all resources within the impacted component being divulged to the attacker. Alternatively, access to only some restricted information is obtained, but the disclosed information presents a direct, serious impact. For example, an attacker steals the administrator's password, or private encryption keys of a web server.|
|Low (L)|There is some loss of confidentiality. Access to some restricted information is obtained, but the attacker does not have control over what information is obtained, or the amount or kind of loss is limited. The information disclosure does not cause a direct, serious loss to the impacted component.|
|None (N)|There is no loss of confidentiality within the impacted component.|
[FIRST](https://www.first.org/cvss/v3.1/specification-document)

##### Integrity

|Metric Value|Description|
|---|---|
|High (H)|There is a total loss of integrity, or a complete loss of protection. For example, the attacker is able to modify any/all files protected by the impacted component. Alternatively, only some files can be modified, but malicious modification would present a direct, serious consequence to the impacted component.|
|Low (L)|Modification of data is possible, but the attacker does not have control over the consequence of a modification, or the amount of modification is limited. The data modification does not have a direct, serious impact on the impacted component.|
|None (N)|There is no loss of integrity within the impacted component.|
[FIRST](https://www.first.org/cvss/v3.1/specification-document)

##### Availability

|Metric Value|Description|
|---|---|
|High (H)|There is a total loss of availability, resulting in the attacker being able to fully deny access to resources in the impacted component; this loss is either sustained (while the attacker continues to deliver the attack) or persistent (the condition persists even after the attack has completed). Alternatively, the attacker has the ability to deny some availability, but the loss of availability presents a direct, serious consequence to the impacted component (e.g., the attacker cannot disrupt existing connections, but can prevent new connections; the attacker can repeatedly exploit a vulnerability that, in each instance of a successful attack, leaks a only small amount of memory, but after repeated exploitation causes a service to become completely unavailable).|
|Low (L)|Performance is reduced or there are interruptions in resource availability. Even if repeated exploitation of the vulnerability is possible, the attacker does not have the ability to completely deny service to legitimate users. The resources in the impacted component are either partially available all of the time, or fully available only some of the time, but overall there is no direct, serious consequence to the impacted component.|
|None (N)|There is no impact to availability within the impacted component.|
[FIRST](https://www.first.org/cvss/v3.1/specification-document)

## Templates

### Action Templates 

Actions are templates to enrich your artifacts.
- Folder: 0 Templates / Actions
- Syntax: `<Artifact_Type> Action <Source>`
>[!info] Following Templates are available:
>```query
>path: "0 Templates/Actions"
>```

#### Domain Action Alienvault
- API: https://otx.alienvault.com/api/v1/indicators/domain/'+input+'/geo

#### Domain Maltiverse 
- API: https://api.maltiverse.com/hostname/'+input

#### IP Action Multiverse
- API: https://api.maltiverse.com/ip/'+input)

### SOP Templates

>[!info] Following Templates are available:
>```query
>path: "0 Templates/SOPs"
>```

# Obsidian Basics

## Internal Links

In general, internal links are surrounded by ` [[ ]] ` 

### Link to a file 

>[!Syntax]
> ``` [[📚 README]] ``` 

>[!Example]
>[[📚 README]]

### Link to a heading in a note

>[!Syntax]
> ``` [[📚 README#OZ Calendar]] ``` 

>[!Example]
> [[📚 README#OZ Calendar]]


### Link to a block in a note

Link to a text block  requires a block identifier. 
Fortunately, you don't need to know the identifier. When you type the caret (`^`), you can select the block from a list of suggestions to insert the right identifier.

>[!Syntax]
> in that case it is the text block of chapter [[📚 README#OZ Calendar|OZ Calendar]]:
> ``` [[📚 README#^363360]] ``` 

>[!Example]
> [[📚 README#^363360]]]

You can also create **human-readable block identifiers** by adding a blank space followed by the identifier, for example `^hotkey`, at the end of a block (e.g. chapter [[📚 README#Hotkeys|Hotkeys]])

>[!Syntax]
> in that case it is the table from chapter **Hotkeys**:
> ` [[📚 README#^hotkeys]] ` 
> or to make the link more readable:
> ` [[📚 README#^hotkeys|🔑 Hotkeys]]` 

>[!Example]
> [[📚 README#^hotkeys]]
> or to make the link more readable:
> [[📚 README#^hotkeys|🔑 Hotkeys]]

## Hotkeys

| Keys | Descritpion |
|-------------|-------------------------------------|
| ```[ALT]+[T]``` | Insert Current time 
| ```[ALT]+[D]``` | Insert current date 
| ```[ALT]+[E]``` | Open Insert Template modal
| ```[STRG]+[F]``` | Open search bar 
| ```[STRG]+[P]``` | Open command palette
| ```[STRG]+[O]``` | Open quick switcher (notes)
^hotkeys

## Time Zone

Core plugin  **Templates** doesn't support Token `z` for time zone. You can change it manually in the plugin settings: _Core plugins -> Templates -> Time format_
- Default setting: UTC
- Syntax look like this: 22:00 (UTC +01:00)

# Appendix 

## Artifacts for testing

Domains:
- shop.amazon-aws.fr
- cowspidzu.pro
- muratinue.com

IP Addresses:
- 143.198.30.16
- 202.182.107.193
- 45.146.120.62

Vulnerabilities:
- CVE-2024-30201

sha265:
- 450437d49a7e5530c6fb04df2e56c3ab1553ada3712fab02bd1eeb1f1adbc267
- e4a877ba15d80c1fb13c22ac4c90c7211452082f8d65f4393646e480cedffb3b



## Credits goes to

Micah Hoffman
- [https://webbreacher.com/2022/03/15/obsidian/](https://webbreacher.com/2022/03/15/obsidian/)
- [https://www.youtube.com/watch?v=sKF37Ng4gaI](https://www.youtube.com/watch?v=sKF37Ng4gaI)
- [https://github.com/WebBreacher/obsidian-osint-templates](https://github.com/WebBreacher/obsidian-osint-templates)

Gert-Jan Bruggink
- [Reimagining Intelligence Deliverables Using Structured Threat Content](https://www.youtube.com/watch?v=hXEpL0qR-6U)
- [https://github.com/venation-digital/threatscenario/tree/main](https://github.com/venation-digital/threatscenario/tree/main)
- [https://github.com/gertjanbruggink](https://github.com/gertjanbruggink)

Enock Nicholaus Michael
- [https://3nock.github.io/](https://3nock.github.io/)
- [https://github.com/3nock/OTE-Templates/tree/main/templates](https://github.com/3nock/OTE-Templates/tree/main/templates)

Liam Cain
- https://gist.github.com/liamcain/81679412643690a7cdd13dff4dc909ce

Faiz Khuzaimah
- https://efemkay.github.io/obsidian-modular-css-layout/

Interesting APIs:
- https://github.com/3nock/OTE-Templates/blob/main/templates/Maltiverse.json
- [https://github.com/3nock/OTE-Templates/blob/main/templates/ThreatMiner.json](https://github.com/3nock/OTE-Templates/blob/main/templates/ThreatMiner.json)
- [https://github.com/3nock/OTE-Templates/blob/main/templates/HackerTarget_Free.json](https://github.com/3nock/OTE-Templates/blob/main/templates/HackerTarget_Free.json) DNSdumpster project

## CSS Style Sheet

### CSS Snippet: obsidian-pagebreaks

Reference: https://gist.github.com/liamcain/81679412643690a7cdd13dff4dc909ce

Takes care of page breaks when exporting pdf files 

### CSS Snippet: multi columns

Reference: https://efemkay.github.io/obsidian-modular-css-layout/

#### CSS Snippet: wide view 

**css_class: wide-page**

the value _wide-page_ of cssclasses property will ignore **readable line length** in the editor settings.

**css_class: wide-dataview**

Affects only dataview outputs.

**css_class: wide-table**

Affects only tables.

**css_class: wide-callout**

Affects callouts only (e.g. below multi columns)

#### CSS Snippet: multi columns

That feature allows multiple lines within a note.

##### Page with 2 columns

>[!Syntax]
> ```
> > [!multi-column]
> >
> >> 1. column
> >
> >> 2. column
> ```

>[!Example]
>
>> [!multi-column]
>>
>>> 1. column
>>
>>> 2. column

##### Page with 3 columns

>[!Syntax]
> ```
> > [!multi-column]
> >
> >> 1. column
> >> Hello World
> >> ...
> >
> >> # Hotdogs to go
> >> A hot dog is a dish consisting ...
> >
> >> [!help]- Dou you need help?
> >> Not what you are looking for? No worry! 
> >> ...
> >
> ```

>[!Example]
> > [!multi-column]
> >
> >> 1. column
> >>Hello World
> >>This text is too long for one column but line break is no magic and the callout will take care on that. Happy writing
> >
> >> # Hotdogs to go
> >> A hot dog is a dish consisting of a grilled, steamed, or boiled sausage served in the slit of a partially sliced bun. The term hot dog can refer to the sausage itself. The sausage used is a wiener (Vienna sausage) or a frankfurter (Frankfurter Würstchen, also just called frank). The names of these sausages commonly refer to their assembled dish. Hot dog preparation and condiments vary worldwide. 
> >
> >> [!help]- Dou you need help?
> >> Not what you are looking for? No worry! 
> >> Here is much more to discover: https://efemkay.github.io/obsidian-modular-css-layout/
> >

## Community Plugins

### OZ Calendar

If you like to see your notes on a Calendar and easily find them using a certain date, you are at the right place. This plugin is created to help users easily view notes on Calendar using any YAML key or File Name with a custom date value. In that case it is the field _file_created_ in the properties. ^363360

### Surfing

A plugin that allows you to browse the web within Obsidian and can be used as web clipper
- Save current page as markdown by right mouse-klick
