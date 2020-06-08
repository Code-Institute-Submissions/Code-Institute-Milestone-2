$(document).ready(function(){
    $("#spinBtn").click(function() {

        /*first reel*/
        $("#reels-container1").animate({marginTop: "-=1000px"}, 200);
        $("#reels-container1").animate({marginTop: "0"}, 200);
        $("#reels-container1").animate({marginTop: "-=10px"}, 200);
        $("#reels-container1").animate({marginTop: "+=10px"}, 200);
        $("#reels-container1").animate({marginTop: "0px"}, 200);

        var imgsA = $("#reels-container1 > div").remove().toArray();
        for (var i = imgsA.length - 1; i >= 1; i--) {
            var j = Math.floor(Math.random() * (i+1));
            var imgsBi = imgsA[i];
            var imgsBj = imgsA[j];
            imgsA[i] = imgsBj;
            imgsA[j] = imgsBi;
        }
        $("#reels-container1").append(imgsA);
        var reels1_div = document.getElementById("reels-container1").firstElementChild.innerHTML.split("/")[2];
        var reel1_remove = reels1_div.replace('.jpg">',"");
        



        /*second reel*/
        $("#reels-container2").animate({marginTop: "-=1000px"}, 200);
        $("#reels-container2").animate({marginTop: "0"}, 200);
        $("#reels-container2").animate({marginTop: "-=1000px"}, 200);
        $("#reels-container2").animate({marginTop: "0"}, 200);
        $("#reels-container2").animate({marginTop: "-=10px"}, 200);
        $("#reels-container2").animate({marginTop: "+=10px"}, 200);
        $("#reels-container2").animate({marginTop: "0px"}, 200);

        var imgsA = $("#reels-container2 > div").remove().toArray();
        for (var i = imgsA.length - 1; i >= 1; i--) {
            var j = Math.floor(Math.random() * (i+1));
            var imgsBi = imgsA[i];
            var imgsBj = imgsA[j];
            imgsA[i] = imgsBj;
            imgsA[j] = imgsBi;
        }
        $("#reels-container2").append(imgsA);
        var reels2_div = document.getElementById("reels-container2").firstElementChild.innerHTML.split("/")[2];
        var reel2_remove = reels2_div.replace('.jpg">',"");



        /*third reel*/
        $("#reels-container3").animate({marginTop: "-=1000px"}, 200);
        $("#reels-container3").animate({marginTop: "0"}, 200);
        $("#reels-container3").animate({marginTop: "-=1000px"}, 200);
        $("#reels-container3").animate({marginTop: "0"}, 200);
        $("#reels-container3").animate({marginTop: "-=1000px"}, 200);
        $("#reels-container3").animate({marginTop: "0"}, 200);
        $("#reels-container3").animate({marginTop: "-=10px"}, 200);
        $("#reels-container3").animate({marginTop: "+=10px"}, 200);
        $("#reels-container3").animate({marginTop: "0px"}, 200);

        var imgsA = $("#reels-container3 > div").remove().toArray();
        for (var i = imgsA.length - 1; i >= 1; i--) {
            var j = Math.floor(Math.random() * (i+1));
            var imgsBi = imgsA[i];
            var imgsBj = imgsA[j];
            imgsA[i] = imgsBj;
            imgsA[j] = imgsBi;
        }
        $("#reels-container3").append(imgsA);
        var reels3_div = document.getElementById("reels-container3").firstElementChild.innerHTML.split("/")[2];
        var reel3_remove = reels3_div.replace('.jpg">',"");



        /*fourth reel*/
        $("#reels-container4").animate({marginTop: "-=1000px"}, 200);
        $("#reels-container4").animate({marginTop: "0"}, 200);
        $("#reels-container4").animate({marginTop: "-=1000px"}, 200);
        $("#reels-container4").animate({marginTop: "0"}, 200);
        $("#reels-container4").animate({marginTop: "-=1000px"}, 200);
        $("#reels-container4").animate({marginTop: "0"}, 200);
        $("#reels-container4").animate({marginTop: "-=1000px"}, 200);
        $("#reels-container4").animate({marginTop: "0"}, 200);
        $("#reels-container4").animate({marginTop: "-=10px"}, 200);
        $("#reels-container4").animate({marginTop: "+=10px"}, 200);
        $("#reels-container4").animate({marginTop: "0px"}, 200,);

        var imgsA = $("#reels-container4 > div").remove().toArray();
        for (var i = imgsA.length - 1; i >= 1; i--) {
            var j = Math.floor(Math.random() * (i+1));
            var imgsBi = imgsA[i];
            var imgsBj = imgsA[j];
            imgsA[i] = imgsBj;
            imgsA[j] = imgsBi;
        }
        $("#reels-container4").append(imgsA);
        var reels4_div = document.getElementById("reels-container4").firstElementChild.innerHTML.split("/")[2];
        var reel4_remove = reels4_div.replace('.jpg">',"");

       

        console.log(reel1_remove);
        console.log(reel2_remove);
        console.log(reel3_remove);
        console.log(reel4_remove);

        
        function checkReels(reel1_r, reel2_r, reel3_r, reel4_r){
                if (reel1_r == reel2_r || reel1_r == reel3_r || reel1_remove == reel4_r){
                    alert("YOU WIN!");
                }
            
        };
    });


});