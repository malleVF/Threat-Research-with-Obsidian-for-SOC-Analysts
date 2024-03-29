---
file_created: 2024-03-23 @ 17:32 (UTC +01:00)
---


## [EN] Threat Research with Obsidian for SOC Analysts

[[LinkedIn Article#^german|+++German Version below+++]]

Now you might think, why would a SOC analyst work with Obsidian? After all, they have their SIEM system.

True, but also not true. Alerts are indeed sent by the SIEM, but SOC analysts usually work in a ticket system. In general, it is then also operated by another department and the workflows can be counted on one hand or displayed nicely in the Kanban board. There are often no interfaces to other sources outside the company.

This means that the analyst has to carry out their research or event triage manually and copy the output into the ticket.

Of course there are SOAR solutions, but honestly? Who is using one and to what extent is it suitable as a replacement for your personal research notes or your case management or ticket system?
I also want to do research outside of my regular job, where the (expensive) technologies may not be available to me.

I used to have to save my notes in Notepad++, then later with Redmine and Confluence. However, this also increased the technical effort. With Obsidian, I have found a lean solution that allows me to manage my data locally. Workflows can be automated using plugins and JavaScript. In addition, linking the notes within an Obsidian Vault is incredibly easy.

The idea behind my new project is quite simple:
SOPs and playbooks are used to describe work instructions and create task lists, which in principle access the external services via an API call. The output should be in JSON if possible, so that I can transform only the necessary information into a Markdown note and then summarize it later in a report.

In the picture I have described the process. My first tests with JavaScript are promising.
 Yeah, my first JavaScript 🤩.

I was inspired by the work of Gert-Jan Bruggink, Micah Hoffman and Enock Nicholaus Michael.

![[CTI Research and Reporting.png]] ^german

## [DE] Threat Research mit Obsidian für SOC Analysts

Jetzt könnte man meinen, warum sollte ein SOC Analyst mit Obsidian arbeiten? Die haben doch schließlich ihr SIEM System. 

Stimmt, stimmt aber auch nicht. In der Tat erfolgt die Alarmierung durch das SIEM, aber in der Regel arbeiten SOC Analysten in einem Ticket System. In der Regel wird es dann auch noch von einer anderen Abteilung betrieben und die Workflows lassen sich an einer Hand abzählen bzw. im Kanbanboard schön darstellen. Schnittstellen zu anderen Quellen außerhalb des Unternehmens sind oftmals nicht vorhanden. 

Das heißt, der Analyst muss seine Recherche bzw. Event Triage manuell ausführen und die Ausgaben in das Ticket kopieren.

Sicherlich gibt es auch SOAR Lösungen, aber ganz ehrlich? Wer hat sowas im Einsatz und in wieweit taugt es als Ersatz für deine persönlichen Recherche-Notizen oder dein Case Management bzw. Ticket System?
Außerdem möchte ich auch mal außerhalb meiner regulären Tätigkeit recherchieren, wo mir die (kostspieligen) Technologien möglicherweise nicht zur Verfügung stehen. 

Früher musste ich noch meine Notizen in Notepad++ speichern, später dann mit Redmine und Confluence. Damit stieg dann aber auch der technische Aufwand. Mit Obsidian habe ich für mich eine schlanke Lösung gefunden, mit der ich meine Daten lokal verwalten kann. Über Plugins und mit JavaScript lassen sich Arbeitsabläufe automatisieren. Zudem ist die Verlinkung der Notizen innerhalb eines Obsidian Vaults grandios einfach.

Die Idee bei meinem neuen Projekt ist ganz einfach:
Mit SOPs und Playbooks werden Arbeitsanweisungen beschrieben und Aufgabenlisten erstellt, die im Prinzip über einen API Call auf die externen Dienste zugreifen. Die Ausgabe sollte möglichst in JSON erfolgen, damit ich nur die notwendigen Informationen in eine Markdown Notiz transformieren kann, um diese dann späte in einem Bericht zusammenzufassen.

Im Bild habe ich den Ablauf beschrieben und die ersten Tests sind vielversprechend.
\- Mein erstes JavaScript 🤩.

Inspiriert hat mich die Arbeit von Gert-Jan Bruggink, Micah Hoffman und Enock Nicholaus Michael.

