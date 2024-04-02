<%*
var source = "Maltiverse";
var api_token = "";
const file = tp.file.title;
const input_sp = file.split(' '); 
const input = input_sp[1];
const artifact_type = input_sp[0];
var case_id = tp.file.folder(false);
const response = await fetch('https://api.maltiverse.com/sample/'+input ,{
	headers: {
		'Authorization': 'Bearer '+api_token
	}
});

const jsonStringTxt = await response.text(); // Fetch the response as text
const jsonString = jsonStringTxt.trim();
const jsonData = JSON.parse(jsonString); // Parse JSON

// Assign raw JSON to a variable
const raw = jsonString;

// Extract values
// Classification



const data = JSON.parse(jsonString);

let description = "No description available"; // default value 
if (data.blacklist && data.blacklist.length > 0 && data.blacklist[0].description) {
    description = data.blacklist[0].description;
}

const classification = jsonData.classification;
const modification_time = jsonData.modification_time;
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
Classification:: #<%classification%>
Description:: <%description%> 

For more Information: [Maltiverse](https://maltiverse.com/sample/<%input%>)
