// if you want to change something on a DIFFERENT element, you have to call it by name (it's "id")
// https://www.w3schools.com/jsref/met_document_getelementbyid.asp
	
// "el" stands for the "element" that was just clicked
function allOpaque(el){
	el.classList.add("opaque");
	document.getElementById("pats-column").classList.add("opaque");
	
}

// "el" stands for the "element" that was just clicked
function removeColor(el){
	document.getElementById("lal-column").classList.remove("lal-silver");
	document.getElementById("clippers-column").classList.remove("clippers-blue");
}

function showTrophy(el){
	el.src = "images/download.png";
	document.getElementById("clippers").src = "images/download.png";
	document.getElementById("lal").src = "images/download.png";
}