$(document).ready(function(){

    var cash = 100;
    var win;
    var totalWon = 0;
    var amountWon = 0;
    var betAmount = 0;
    var winnerTimeout;
    var btn1;
    var btn5;
    var btn10;
    var lightCountOn = 0; //flash side lights on win


    $("#spinBtn1").click(function() {
        cash -= 1;
        betAmount = 1;
        document.getElementById("credits").innerHTML = cash;
        btn1 = true;
        runGame();
    });

    $("#spinBtn5").click(function() {
        cash -= 5;
        betAmount = 5;
        document.getElementById("credits").innerHTML = cash;
        btn5 = true;
        runGame();
    });

    $("#spinBtn10").click(function() {
        cash -= 10;
        betAmount = 10;
        document.getElementById("credits").innerHTML = cash;
        btn10 = true;
        runGame();
    });
    

    function runGame() {
        lightCountOn = 0;

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


        //send strings to function with ".jpg" removed
        checkReels(r1_remove, r2_remove, r3_remove, r4_remove);
        



    }; //end of runGame Function


    //match 2 icons function
    function winner2match(){
        win = true;
        if (btn1 == true){
            totalWon += 1;
            amountWon = 2;
            cash += amountWon;
            amountWon = 0;
            btn1 = false;
        }
        if (btn5 == true){
            totalWon += 5;
            amountWon = 6;
            cash += amountWon;
            amountWon = 0;
            btn5 = false;
        }
        if (btn10 == true){
            totalWon += 10;
            amountWon = 12;
            cash += amountWon;
            amountWon = 0;
            btn10 = false;
        }

        //delay inner html
        winnerTimeout = setTimeout(function(){
           $("#seperator").html("Double Match!!");
           $("#credits").html(cash);

            lightLoopOn(); //flash lights on win
        } , 2000);
    }

   


    function lightLoopOn(){
        setTimeout(function(){
            var lights = document.querySelectorAll('.sideLights');
            lightCountOn++;
            if (lightCountOn < 8){
                for (var i=0; i < lights.length; i++){
                    $(lights[i]).addClass('on');
                }
                lightLoopOn();
                lightLoopOff();
            }
        }, 500);
    }

    function lightLoopOff(){
        setTimeout(function(){
            var lights = document.querySelectorAll('.sideLights')
            for (var i=0; i < lights.length; i++){
                $(lights[i]).removeClass('on');
            }
        }, 150);
    }
    

   //match 3 icons function
    function winner3match(){
        win = true;
        if (btn1 == true){
            totalWon += 1;
            amountWon = 4;
            cash += amountWon;
            amountWon = 0;
            btn1 = false;
        }
        if (btn5 == true){
            totalWon += 5;
            amountWon = 11;
            cash += amountWon;
            amountWon = 0;
            btn5 = false;
        }
        if (btn10 == true){
            totalWon += 10;
            amountWon = 22;
            cash += amountWon;
            amountWon = 0;
            btn10 = false;
        }

        //delay inner html 
        winnerTimeout = setTimeout(function(){
           $("#seperator").html("TRIPLE Match!!");
           $("#credits").html(cash);
          } , 2000);
   }

    //match all icons function
    function winnerAllmatch(){
        win = true;
        if (btn1 == true){
            totalWon += 1;
            amountWon = cash * 10;
            cash += amountWon;
            amountWon = 0;
            btn1 = false;
        }
        if (btn5 == true){
            totalWon += 5;
            amountWon = cash * 20;
            cash += amountWon;
            amountWon = 0;
            btn5 = false;
        }
        if (btn10 == true){
            totalWon += 10;
            amountWon = cash * 50;
            cash += amountWon;
            amountWon = 0;
            btn10 = false;
        }

        //delay inner html
        winnerTimeout = setTimeout(function(){
           $("#seperator").html("**ULTIMATE JACKPOT!!**");
           $("#credits").html(cash);
          } , 2000);
   }
        

   
    //use strings (img names) to check for winner
    function checkReels(reel1_r, reel2_r, reel3_r, reel4_r) {
        var oneMatch;
        
        //----------------------------TWO MATCH ON REELS---------------------
        //reel 1, two match
        if (reel1_r == reel2_r && reel1_r !== reel3_r && reel1_r !== reel4_r){
            oneMatch = true;
            winner2match();
        }
        if (reel1_r == reel3_r && reel1_r !== reel2_r && reel1_r !== reel4_r){
            oneMatch = true;
            winner2match();
        }
        if (reel1_r == reel4_r && reel1_r !== reel2_r && reel1_r !== reel3_r){
            oneMatch = true;
            winner2match();
        }

        //reel 2, two match
        if (reel2_r == reel1_r && reel2_r !== reel3_r && reel2_r !== reel4_r){
            oneMatch = true;
            winner2match();
        }
        if (reel2_r == reel3_r && reel2_r !== reel1_r && reel1_r !== reel4_r){
            oneMatch = true;
            winner2match();
        }
        if (reel2_r == reel4_r && reel2_r !== reel1_r && reel1_r !== reel3_r){
            oneMatch = true;
            winner2match();
        }

        //reel 3, two match
        if (reel3_r == reel1_r && reel3_r !== reel2_r && reel3_r !== reel4_r){
            oneMatch = true;
            winner2match();
        }
        if (reel3_r == reel2_r && reel3_r !== reel1_r && reel3_r !== reel4_r){
            oneMatch = true;
            winner2match();
        }
        if (reel3_r == reel4_r && reel3_r !== reel1_r && reel3_r !== reel2_r){
            oneMatch = true;
            winner2match();
        }

        //reel 4, two match
        if (reel4_r == reel1_r && reel4_r !== reel2_r && reel4_r !== reel3_r){
            oneMatch = true;
            winner2match();
        }
        if (reel4_r == reel2_r && reel4_r !== reel1_r && reel4_r !== reel3_r){
            oneMatch = true;
            winner2match();
        }
        if (reel4_r == reel3_r && reel4_r !== reel1_r && reel4_r !== reel3_r){
            oneMatch = true;
            winner2match();
        }


        //----------------------------THREE MATCH ON REELS---------------------
        //reel 1, three match
        if (reel1_r == reel2_r && reel1_r == reel3_r && reel1_r !== reel4_r){
            twoMatch = true;
            winner3match();
        }
        if (reel1_r == reel2_r && reel1_r == reel4_r && reel1_r !== reel3_r){
            oneMatch = true;
            winner3match();
        }
        if (reel1_r == reel3_r && reel1_r == reel4_r && reel1_r !== reel2_r){
            oneMatch = true;
            winner3match();
        }

        //reel 2, three match
        if (reel2_r == reel1_r && reel2_r == reel3_r && reel2_r !== reel4_r){
            twoMatch = true;
            winner3match();
        }
        if (reel2_r == reel1_r && reel2_r == reel4_r && reel2_r !== reel3_r){
            oneMatch = true;
            winner3match();
        }
        if (reel2_r == reel3_r && reel2_r == reel4_r && reel2_r !== reel1_r){
            oneMatch = true;
            winner3match();
        }

        //reel 3, three match
        if (reel3_r == reel1_r && reel3_r == reel2_r && reel3_r !== reel4_r){
            twoMatch = true;
            winner3match();
        }
        if (reel3_r == reel1_r && reel3_r == reel4_r && reel3_r !== reel2_r){
            oneMatch = true;
            winner3match();
        }
        if (reel3_r == reel2_r && reel3_r == reel4_r && reel3_r !== reel1_r){
            oneMatch = true;
            winner3match();
        }

        //reel 4, three match
        if (reel4_r == reel1_r && reel4_r == reel2_r && reel4_r !== reel3_r){
            twoMatch = true;
            winner3match();
        }
        if (reel4_r == reel1_r && reel4_r == reel3_r && reel4_r !== reel2_r){
            oneMatch = true;
            winner3match();
        }
        if (reel4_r == reel2_r && reel4_r == reel3_r && reel4_r !== reel1_r){
            oneMatch = true;
            winner3match();
        }

        //----------------------------FOUR MATCH ON REELS---------------------
        if (reel1_r == reel2_r && reel1_r == reel3_r && reel1_r == reel4_r){
            winnerAllmatch();
        }

            
    };// end of checkReels function

}); //end of document.ready

