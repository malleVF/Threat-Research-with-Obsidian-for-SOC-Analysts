<%*
var source = "Maltiverse";
var api_token = "";
const file = tp.file.title;
const input_sp = file.split(' '); 
const input = input_sp[1];
const artifact_type = input_sp[0];
var case_id = tp.file.folder(false);
const response = await fetch('https://api.maltiverse.com/ip/'+input ,{
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
//Whois
const asn = jsonData.as_name;	
const asn_country_code = jsonData.asn_country_code;
const asn_registry = jsonData.asn_registry;
const asn_cidr = jsonData.asn_cidr;
const asn_date = jsonData.asn_date;
const registrant_name = jsonData.registrant_name;
const address = jsonData.address;  

//Location
const lat = jsonData.location.lat; 
const lon = jsonData.location.lon;
const country_code = jsonData.country_code;

// Classification
const classification = jsonData.classification;
const cdn = jsonData.is_cdn;
const cnc = jsonData.is_cnc;
const mal = jsonData.is_distributing_malware;
const hosting = jsonData.is_hosting;
const iot = jsonData.is_iot_threat;
const attacker = jsonData.is_known_attacker;
const scanner = jsonData.is_known_scanner;
const mining = jsonData.is_mining_pool;
const proxy = jsonData.is_open_proxy;
const sinkhole = jsonData.is_sinkhole;
const tor = jsonData.is_tor_node;
const vpn = jsonData.is_vpn_node;
const description = jsonData.blacklist[1].description;

// Split the ASN value
const asnID = asn.split(' '); 
-%>
## <%artifact_type%> Action <%source%>

>[!info]- raw event
>Source: <%source%> | Collection Date: <% tp.date.now("YYYY-MM-DD @ HH:mm [(UTC] Z[)]") %>
> #asn #<%classification%>
> ```json
> <%raw%> 
> ```

### Classification [[📚 README#❓Maltiverse Classification|ℹ️]]

Artifact: <%input%>
Type: <%artifact_type%>
Classification:: <%classification%>
Description:: <%description%> 

-  ##  #mcl/list-card
>[!Danger] | | |
>|---|---|
>| CDN | <%cdn%> |
>| CNC | <%cnc%> |
>| Distributing Malware | <%mal%> |
>| IoT Threat | <%iot%> |
>| Known Attack | <%attacker%> |
>| Known Scanner | <%scanner%> |

-  ##
>[!Danger] | | |
>|---|---|
>| Hosting | <%hosting%> |
>| Mining | <%mining%> |
>| Proxy | <%proxy%> |
>| Sinkhole | <%sinkhole%> |
>| TOR | <%tor%> |
>| VPN | <%vpn%> |

For more Information: [Maltiverse](https://maltiverse.com/ip/<%input%>)

### WHOIS

Artifact: <%input%>
Type: <%artifact_type%>
ASN:: <%asn%>
ASN_ID:: <%asnID[0]%>

**Autonomous System **

| | |
|---|---| 
| AS name | <%asn%> |	
| AS Country Code | <%asn_country_code%> |
| AS Registry | <%asn_registry%> |
| AS CIDR | <%asn_cidr%> |
| AS Date | <%asn_date%> |

**Regristrant Address**

| | |
|---|---|
| Registrant_Name | <%registrant_name%> |
| Address | <%address%> |   
| Country Code | <%country_code%> |

#### Location

>[!info]- Map view
>#loc_ip
>```mapview
>{"name":"Default","mapZoom":9,"centerLat":<%lat%>,"centerLng":<%lon%>,"query":"","chosenMapSource":0,"showLinks":false,"linkColor":"red"}
>```

Map:: [<%input%>](geo:<%lat%>,<%lon%>)
Country Code:: <%country_code%>

_==<< EOF:  <%artifact_type%> Action <%source%>== _