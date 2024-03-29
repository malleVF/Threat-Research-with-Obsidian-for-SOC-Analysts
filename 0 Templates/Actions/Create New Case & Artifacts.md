<%* 

let usecasePath ="Cases/"; //Main folder for all use cases

let caseID = await tp.system.prompt("Case-ID","Case-"); // Prompt Use Cases ID

// List Artifact and SOP Templates
let artifactMapper = {
  "IPv4 Address":"ipv4",
  "Common Vulnerabilities and Exposures":"cve",
  "File hash":"hash",
  "Domain Name":"domain"
};

let newTicket = '';

// Check for existing Use Case ID folder 
if (!await tp.file.exists(usecasePath+"/"+caseID)) { 
	 newTicket = await tp.system.suggester(["Yes", "No"], [true, false], false, "Case-ID doesn't exist. Create new case?");
	 more = false;
} else {
	more = true;
}

// Create new Use Case folder
if (newTicket == true) {
	await tp.file.move("/"+usecasePath+caseID+"/");

	// Create Report file
    await tp.file.create_new( tp.file.find_tfile("Report Template"),caseID+" Report", false, app.vault.getAbstractFileByPath(usecasePath+caseID));

	//Create MOC_ Changes on files
	await tp.file.create_new( tp.file.find_tfile("Changes on case files Template"),"MOC_ Changes on "+caseID+" files", false, app.vault.getAbstractFileByPath(usecasePath+caseID));

	more = true;
}

let artifactList = ''; //only for logging
while (more == true) {
    let artifact = await tp.system.suggester(Object.keys(artifactMapper), Object.keys(artifactMapper), "", "Artifact");
    let artifactName = await tp.system.prompt(artifact,"");
    artifactList = artifactList + artifactMapper[artifact]+": [["+artifactName+"]]\n"; //only for logging

	// File creation with SOP in specified folder 
	await tp.file.create_new( tp.file.find_tfile(artifactMapper[artifact],artifactMapper[artifact]+" "+artifactName),artifactMapper[artifact]+" "+artifactName, false, app.vault.getAbstractFileByPath(usecasePath+caseID));
	
    more = await tp.system.suggester(["Yes", "No"], [true, false], false, "Add more artifacts?");

//tp.user.deleteThis();
}

//tp.user.deleteThis();
-%>