$("#spinBtn").click(function() {
    var imgsA = $("#reels-container1 > div").remove().toArray();
    for (var i = imgsA.length - 1; i >= 1; i--) {
        var j = Math.floor(Math.random() * (i+1));
        var imgsBi = imgsA[i];
        var imgsBj = imgsA[j];
        imgsA[i] = imgsBj;
        imgsA[j] = imgsBi;
    }
    $("#reels-container1").append(imgsA);

    var imgsA = $("#reels-container2 > div").remove().toArray();
    for (var i = imgsA.length - 1; i >= 1; i--) {
        var j = Math.floor(Math.random() * (i+1));
        var imgsBi = imgsA[i];
        var imgsBj = imgsA[j];
        imgsA[i] = imgsBj;
        imgsA[j] = imgsBi;
    }
    $("#reels-container2").append(imgsA);

    var imgsA = $("#reels-container3 > div").remove().toArray();
    for (var i = imgsA.length - 1; i >= 1; i--) {
        var j = Math.floor(Math.random() * (i+1));
        var imgsBi = imgsA[i];
        var imgsBj = imgsA[j];
        imgsA[i] = imgsBj;
        imgsA[j] = imgsBi;
    }
    $("#reels-container3").append(imgsA);
});