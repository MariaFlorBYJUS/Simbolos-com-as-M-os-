//comentário : https://teachablemachine.withgoogle.com/models/1u4UZpWMA/ //

Webcam.set({
    width: 320,
    height: 240,
    image_format: 'jpeg',
    jpeg_quality: 90
});
Webcam.attach('#camera');



function tirarfoto() {

    Webcam.snap(function (data_uri) {
        // display results in page
        document.getElementById('foto').innerHTML =
            '<img id="TheyAre"  src="' + data_uri + '"/>';
    });

}


classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/1u4UZpWMA/model.json', BlablinhaIDEIADABRUNA)
function BlablinhaIDEIADABRUNA() {

    console.log("deu certo! (ideia maria flor)")
}

function verificate() {

    TheyAre = document.getElementById("TheyAre")
    classifier.classify(TheyAre, resultado)


}

function resultado(ERuuucbuIDEIADELABRUNA, resultIDEIAFLOR) {

    if (ERuuucbuIDEIADELABRUNA) {

        console.error(ERuuucbuIDEIADELABRUNA)


    }
    //V ou f// 
    else {
        console.log(resultIDEIAFLOR)
        document.getElementById("previsao001").innerHTML = resultIDEIAFLOR[0].label
        document.getElementById("previsao002").innerHTML = resultIDEIAFLOR[1].label000 



    }

}