Webcam.set({
  
  height:300,
  width:350,
  image_format: 'png',
  png_quality:90
})

cammera = document.getElementById("camera")

Webcam.attach('#camera')

function take_snapshot()

{

  webcam.snap(function(data_uri){
    document.getElementById("result").innerHTML = '<img id = "capured image" scr ="'+data_uri+"'/>"
  })
}

console.log('ml5 version:', ml5.version)

classifier = ml5.imageclassifier ('https://teachablemachine.withgoogle.com/models/[...]',modalloaded)