$(document).ready(function(){

    var cash = 100;
    var betAmount;

    $("#spinBtn1").click(function() {
        cash -= 1;
        betAmount = 1;
        document.getElementById("credits").innerHTML = cash;
        runGame();
    });

    $("#spinBtn5").click(function() {
        cash -= 5;
        betAmount = 5;
        document.getElementById("credits").innerHTML = cash;
        runGame();
    });

    $("#spinBtn10").click(function() {
        cash -= 10;
        betAmount = 10;
        document.getElementById("credits").innerHTML = cash;
        runGame();
    });
    

    function runGame() {

        //clear result box
        document.getElementById("seperator").innerHTML = ""; 


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
        var reel1_spinning = true;
        $("#reels-container1").append(imgsA);
        var reels1_div = document.getElementById("reels-container1").firstElementChild.innerHTML.split("/")[2];
        var r1_remove = reels1_div.replace('.jpg">',"");
        



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
        var r2_remove = reels2_div.replace('.jpg">',"");



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
        var r3_remove = reels3_div.replace('.jpg">',"");



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
        var r4_remove = reels4_div.replace('.jpg">',"");

        checkReels(r1_remove, r2_remove, r3_remove, r4_remove);
        
        
        console.log(r1_remove);
        console.log(r2_remove);
        console.log(r3_remove);
        console.log(r4_remove);


    }; //end of click function


        
   
        

   
    //check for winner
    function checkReels(reel1_r, reel2_r, reel3_r, reel4_r){
            if (reel1_r == reel2_r || reel1_r == reel3_r || reel1_r == reel4_r){
                document.getElementById("seperator").innerHTML = "Winner!!!";

            }
            else if (reel2_r == reel1_r || reel2_r == reel3_r || reel2_r == reel4_r){
                document.getElementById("seperator").innerHTML = "Winner!!!";

            }
            else if (reel3_r == reel1_r || reel3_r == reel2_r || reel3_r == reel4_r){
                document.getElementById("seperator").innerHTML = "Winner!!!";

            }
            else if (reel4_r == reel1_r || reel4_r == reel2_r || reel4_r == reel3_r){
                document.getElementById("seperator").innerHTML = "Winner!!!";

            }
    };

}); //end of document.ready

