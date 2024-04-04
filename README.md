---
The repo is a complete Obsidian vault. It is required to install [Obsidian](https://obsidian.md)

Starting from the dashboard you can create a new Case with the Button "Create Case / Artifact".

For further reading, I recommend the README file within the vault.

---

## Threat Research with Obsidian for SOC Analysts


Now you might think, why would a SOC analyst work with Obsidian? After all, they have their SIEM system.

True, but also not true. Alerts are indeed sent by the SIEM, but SOC analysts usually work in a ticket system. In general, it is then also operated by another department and the workflows can be counted on one hand or displayed nicely in the Kanban board. There are often no interfaces to other sources outside the company.

This means that the analyst has to carry out their research or event triage manually and copy the output into the ticket.

Of course there are SOAR solutions, but honestly? Who is using one and to what extent is it suitable as a replacement for your personal research notes or your case management or ticket system?
I also want to do research outside of my regular job, where the (expensive) technologies may not be available to me.

I used to have to save my notes in Notepad++, then later with Redmine and Confluence. However, this also increased the technical effort. With Obsidian, I have found a lean solution that allows me to manage my data locally. Workflows can be automated using plugins and JavaScript. In addition, linking the notes within an Obsidian Vault is incredibly easy.

![](https://github.com/malleVF/Threat-Research-with-Obsidian-for-SOC-Analysts/blob/main/0%20Templates/Attachments/CTI%20Research%20and%20Reporting.png)

The idea behind my new project is quite simple:
SOPs and playbooks are used to describe work instructions and create task lists, which in principle access the external services via an API call. The output should be in JSON if possible, so that I can transform only the necessary information into a Markdown note and then summarize it later in a report.

In the picture I have described the process. My first tests with JavaScript are promising.
 Yeah, my first JavaScript 🤩.

I was inspired by the work of Gert-Jan Bruggink, Micah Hoffman and Enock Nicholaus Michael.


## Threat Research for SOC Analysts - The Vault

The vault allows a SOC analyst to easily check their domains (hostnames), file hashes, vulnerabilities (CVEs) and IP addresses (= artifacts) with https://maltiverse.com and https://cve.mitre.org and save them as a note in Obsidian. It's not perfect, but it has a few features that are very useful.

The whole thing is case-related, i.e. an incident is created (as a directory) and the artifacts are saved as a note in the respective directory, together with the case report.

In the second step, the analyst has the option of enriching the artifacts with information if necessary and if the artifacts have not already been processed in another case.

Both the individual artifacts and the case report can be beautifully formatted and exported as a PDF.

There is also a dashboard in which all cases and open tasks are displayed.

What could be improved: The API response is not validated in the script. If it fails, there are simply no results.

Another nice feature is the community plugin "Surfing". This allows you to surf the internet without an external browser. It can also be used to save websites as Markdown. Very helpful and works wonderfully with the APT mission briefings from https://threatresearch.arcsight.com

#obsidian #cybersecurity #automation #playbook #investigation #osint #soc

## Videos & Screenshots

---

[![Video: Create and enrich IP address](https://github.com/malleVF/Threat-Research-with-Obsidian-for-SOC-Analysts/blob/main/0%20Templates/Attachments/Action_Result.png)](https://github.com/malleVF/Threat-Research-with-Obsidian-for-SOC-Analysts/assets/40318953/0f47b984-754d-4117-b171-cc88d3904955)
(Video: Create and enrich IP address)

![](https://github.com/malleVF/Threat-Research-with-Obsidian-for-SOC-Analysts/blob/main/0%20Templates/Attachments/Case_Graph.png)
(Image: Case Graph)

---

## Workflow: Creating a case and adding artifacts (IP address, domain etc)

![](https://github.com/malleVF/Threat-Research-with-Obsidian-for-SOC-Analysts/blob/main/0%20Templates/Attachments/CTI%20-%20Workflow%20Create%20Case%20%26%20Artifact.png)
(Image:workflow)

![](https://github.com/malleVF/Threat-Research-with-Obsidian-for-SOC-Analysts/blob/main/0%20Templates/Attachments/Dashboard.png)
(Image: Dashboard)

## Workflow: Enrich Artifacts withContext

![](https://github.com/malleVF/Threat-Research-with-Obsidian-for-SOC-Analysts/blob/main/0%20Templates/Attachments/CTI%20-%20Workflow%20Execute%20Action%20Template.png)
(Image:workflow)


![](https://github.com/malleVF/Threat-Research-with-Obsidian-for-SOC-Analysts/blob/main/0%20Templates/Attachments/Action_Result.png)
(Image: Action Result)
