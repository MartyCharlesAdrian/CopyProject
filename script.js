var loadFile = function(event) {
	var image = document.getElementById('output');
	image.src = URL.createObjectURL(event.target.files[0]);
};

function displayEvent1(){
    alert("Your review submission has been uploaded.");
}

function displayEvent2(){
    alert("Your photo submission has been uploaded.");
}