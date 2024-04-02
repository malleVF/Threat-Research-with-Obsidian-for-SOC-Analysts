<%* 
//Main folder for all use cases
let usecasePath ="Cases/"; 

// Prompt Use Cases ID
let caseID = await tp.system.prompt("Case-ID","Case-"); 

// List Artifact and SOP Templates
let artifactMapper = {
  "IPv4 Address":"SOP ipv4",
  "Common Vulnerabilities and Exposures":"SOP cve",
  "File hash":"SOP hash",
  "Domain Name":"SOP domain"
};

let newTicket = '';

// Check for existing Use Case ID folder and create new if it dosn't exist
if (!await tp.file.exists(usecasePath+"/"+caseID)) { 
	 newTicket = await tp.system.suggester(["Yes", "No"], [true, false], false, "Case-ID doesn't exist. Create new case?");
	 more = false;
} else {
	more = true;
}

// Create new Case folder
if (newTicket == true) {
	// Create Case-ID folder
	await app.vault.createFolder("/"+usecasePath+caseID+"/");

	// Create Report file
    await tp.file.create_new( tp.file.find_tfile("Report Template"),caseID+" Report", false, app.vault.getAbstractFileByPath(usecasePath+caseID));

	//Create MOC_ Changes on files
	await tp.file.create_new( tp.file.find_tfile("Changes on case files Template"),"MOC_ Changes on "+caseID+" files", false, app.vault.getAbstractFileByPath(usecasePath+caseID));

	more = true;
}

// Prompt with list of artifacts, add artifact and create file in specified Case folder
while (more == true) {
    // Prompt List of Artifact Types
    let artifact = await tp.system.suggester(Object.keys(artifactMapper), Object.keys(artifactMapper), "", "Artifact");
    // Prompt Input Artifact
    let artifactName = await tp.system.prompt(artifact,"");

	const sop_sp = artifactMapper[artifact].split(' '); 
	const sop = sop_sp[1];

	// File creation with SOP Template in specified Case folder 
	await tp.file.create_new( tp.file.find_tfile(artifactMapper[artifact],artifactMapper[artifact]+" "+artifactName),sop+" "+artifactName, false, app.vault.getAbstractFileByPath(usecasePath+caseID));
	
    more = await tp.system.suggester(["Yes", "No"], [true, false], false, "Add more artifacts?");
}
-%>