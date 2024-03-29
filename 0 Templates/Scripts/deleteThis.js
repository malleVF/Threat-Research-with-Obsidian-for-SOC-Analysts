async function deleteThis () {
	const trash = app.vault.getAbstractFileByPath("Untitled.md"); 
	await app.vault.trash(trash, true); 
	return ''; 
} 
module.exports = deleteThis;