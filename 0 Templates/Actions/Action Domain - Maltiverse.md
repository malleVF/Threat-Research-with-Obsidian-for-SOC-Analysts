<%*
var source = "Maltiverse";
const file = tp.file.title;
const input_sp = file.split(' '); 
const input = input_sp[1];
const artifact_type = input_sp[0];
var case_id = tp.file.folder(false);
const response = await fetch('https://api.maltiverse.com/hostname/'+input);

const jsonStringTxt = await response.text(); // Fetch the response as text
const jsonString = jsonStringTxt.trim();
const jsonData = JSON.parse(jsonString); // Parse JSON

// Assign raw JSON to a variable
const raw = jsonString;

// Extract values
//const { location.lat, location.lon } = jsonData;
const classification = jsonData.classification;

-%>
## <%artifact_type%> Action <%source%>

>[!info]- raw event
>Source: <%source%> | Collection Date: <% tp.date.now("YYYY-MM-DD @ HH:mm [(UTC] Z[)]") %>
> #<%classification%>
> ```json
> <%raw%> 
> ```

### Classification

Artifact: <%input%>
Type: <%artifact_type%>
Classification:: <%classification%>

_==<< EOF:  <%artifact_type%> Action <%source%>== _