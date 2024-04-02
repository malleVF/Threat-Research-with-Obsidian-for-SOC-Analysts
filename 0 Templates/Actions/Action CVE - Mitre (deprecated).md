<%*
var source = "Mitre";
const file = tp.file.title;
const input_sp = file.split(' '); 
const input = input_sp[1];
const artifact_type = input_sp[0];
var case_id = tp.file.folder(false);
const response = await fetch('https://cveawg.mitre.org/api/cve/'+input);

const jsonStringTxt = await response.text(); // Fetch the response as text
const jsonString = jsonStringTxt.trim();
const jsonData = JSON.parse(jsonString); // Parse JSON

// Assign raw JSON to a variable
const raw = jsonString;

// Extract values
const basescore = jsonData.containers.cna.metrics[0].cvssV3_1.baseScore; 
const version = jsonData.containers.cna.metrics[0].cvssV3_1.version; 

const attackVector = jsonData.containers.cna.metrics[0].cvssV3_1.attackVector;
const attackComplexity = jsonData.containers.cna.metrics[0].cvssV3_1.attackComplexity;
const privilegesRequired = jsonData.containers.cna.metrics[0].cvssV3_1.privilegesRequired;
const userInteraction = jsonData.containers.cna.metrics[0].cvssV3_1.userInteraction;
const confidentialityImpact = jsonData.containers.cna.metrics[0].cvssV3_1.confidentialityImpact;
const integrityImpact = jsonData.containers.cna.metrics[0].cvssV3_1.integrityImpact; 
const availabilityImpact = jsonData.containers.cna.metrics[0].cvssV3_1.availabilityImpact;
const baseSeverity = jsonData.containers.cna.metrics[0].cvssV3_1.baseSeverity;

const title = jsonData.containers.cna.title;
const description = jsonData.containers.cna.descriptions[0].value;
//const solution = jsonData.containers.cna.solutions[0].value;
-%>
## <%artifact_type%> Action <%source%>

>[!info]- raw event
>Source: <%source%> | Collection Date: <% tp.date.now("YYYY-MM-DD @ HH:mm [(UTC] Z[)]") %>
> 
> ```json
> <%raw%> 
> ```

## Classification [[📚 README#❓Maltiverse Classification|ℹ️]]

Artifact: <%input%>
Type: <%artifact_type%>
Classification:: CVSS v<%version%>: <%basescore%>/10
Description:: <%description%>

-  ##  #mcl/list-card
>[!Bug] Exploitability 
>
>| | |
> |---|---|
> | **Attack Vector** [[📚 README#Attack Vector\|i]] | <%attackVector%> |
> | **Attack Complexity** [[📚 README#Attack Complexity\|i]] | <%attackComplexity%> |
> | **Privileges Required** [[📚 README#Privileges Required\|i]] | <%privilegesRequired%> |
> | **User Interaction** [[📚 README#User Interaction\|i]] | <%userInteraction%> |

-  ##
>[!Danger] Impact 
>
>| | |
>|---|---|
>| **Confidentiality Impact** [[📚 README#Confidentiality\|i]] | <%confidentialityImpact%> |
>| **Integrity Impact** [[📚 README#Integrity\|i]] | <%integrityImpact%> |
>| **Availability Impact** [[📚 README#Availability\|i]] | <%availabilityImpact%> |
>| **base Severity** [[📚 README#❓MITRE CVSS\|i]] | <%baseSeverity%> |
