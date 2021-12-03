Webcam.set({

width:350,
height:300,
image_format: "png",
png_quality: 90

});

camera = document.getElementById("camera");

Webcam.attach("#camera");

function take_snapshot(){

Webcam.snap(function(data_uri){

document.getElementById("result").innerHTML = '<img src="'+data_uri+'">'

});



}

console.log("ml5version:",ml5.version);

classifier = ml5.imageClassifier('',modelloaded)

function modelloaded(){

console.log("model is loaded");

}

function speak(){

sync  = window.speechSynthesis;
speak_data1 = "the first prediction is " + prediction1;
speak_data2 = "the second prediction is " + prediction2;
utterthis= new SpeechSynthesisUtterance(speak_data1+speak_data2);
sync.speak(utterthis);

}