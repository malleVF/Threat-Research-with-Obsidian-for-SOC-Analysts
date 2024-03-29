---
file_created: 2024-03-23 @ 00:34 (UTC +01:00)
case_id: README
cssclasses: []
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
# Threat Research with Obsidian for SOC Analysts
 
 Enrich your investigations on IPs, Domains etc. with OSINT

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
>>[! info]- Attachments
>> - The space for images and PDF files
>
>> [! Info]- Cases
>> - Main folder for all the Cases created by the SOC Analyst
>> - Every single Cases has his own subfolder with the Artifacts, Report and MOC. 
>
> - Main folder with Dashboard and README file etc.
> [[🏠 Dashboard]]
> [[📚 README]]


### Create Case & Add Artifacts

[![[CTI - Workflow Execute Action Template.png|720]]](obsidian://open?vault=CTI%20Research&file=CTI%20-%20Workflow%20Execute%20Action%20Template.png)
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
| **malicious** | The IoC is currently involved in malicious activities and is considered to be harmful. |
| **suspicious** | The IoC has been involved in malicious activities in the past and there are chances it has not ceased. |
| **neutral** |  There is no information related to the IoC that could determine if it is good or bad. |
| **whitelist** |The IoC is considered to be safe and will remain as it is despite new malicious classification incoming. |
Source: [Maltiverse](https://maltiverse.com/start) 

## Templates

### Action Templates 

- [ ] Create SOPs for Actions

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

- [ ] Write SOPs for all Artifact-Types
	- [ ] hash template has no content, header information can be used for new SOPs

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

Vulnerabilities:
- CVE-2024-30201


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
