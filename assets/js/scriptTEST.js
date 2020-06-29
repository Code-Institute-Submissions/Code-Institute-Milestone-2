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

//---------------------------------------------------------------new code

    let bton1;
    let bton5;
    let bton10;

    const bets = {  //sent to functions within jQ when btn clicked
        bet1: {
            amount: 1
        },
        bet5: {
            amount: 5
        },
        bet10: {
            amount: 10
        }
    };

    const matches = {
        match2: {
            bton1: 3,
            bton5: 8,
            bton10: 15
        },
        match3: {
            bton1: 8,
            bton5: 15,
            bton10: 35
        },
        match4: {

        }
    };

    const spin_reels = ["#reels-container1","#reels-container2",
                        "#reels-container3","#reels-container4"];

    const reels_to_check = ["chk_one","chk_two","chk_three","chk_four"];

    //id of the divs holding the imgs
    const reel_container_id = ["reels-container1","reels-container2",                                       "reels-container3","reels-container4"];

    //variables with .jpg tag removed
    const reel_remove_tag = ["Rchk_one","Rchk_two","Rchk_three","Rchk_four"];
//-----------------------------------------------------------------------


//-----------------------------------------------------------------new code

    function btnClicked(btn){   //sending OBJECT values 
        if (btn == bets.bet1){
            btn1 = true;
        }
        if (btn == bets.bet5){
            btn5 = true;
        }
        if (btn == bets.bet10){
            btn10 = true;
        }
        cash -= btn.amount;
        document.getElementById("credits").innerHTML = cash;
        runGame();
    }

//-----------------------------------------------------------------------

//------------------------------------------------------------new changed 

    $("#spinBtn1").click(function() {
        btnClicked(bets.bet1)
    });

    $("#spinBtn5").click(function() {
        btnClicked(bets.bet5)
    });

    $("#spinBtn10").click(function() {
        btnClicked(bets.bet10)
    });

//-----------------------------------------------------------------------

    function runGame() {
        lightCountOn = 0;

        //clear result box
        document.getElementById("seperator").innerHTML = ""; 


//-----------------------------------------------------------------new code

        for (i=0 ; i < spin_reels.length; i++) {
            $(spin_reels[i]).animate({marginTop: "-=1000px"}, 200);
            $(spin_reels[i]).animate({marginTop: "0"}, 200);
            $(spin_reels[i]).animate({marginTop: "-=10px"}, 200);
            $(spin_reels[i]).animate({marginTop: "+=10px"}, 200);
            $(spin_reels[i]).animate({marginTop: "0px"}, 200);
            
            var alteredSpinStr =  spin_reels[i] + " > div";
                        
            var imgsA = $(alteredSpinStr).remove().toArray();

            for (var k = imgsA.length - 1; k >= 1; k--) {
                var j = Math.floor(Math.random() * (k+1));
                var imgsBk = imgsA[k];
                var imgsBj = imgsA[j];
                imgsA[k] = imgsBj;
                imgsA[j] = imgsBk;
            } 

            $(spin_reels[i]).append(imgsA);
            
            //below code is replacing this
            //var reels1_div = document.getElementById("reels-container1").firstElementChild.innerHTML.split("/")[2];
            //var r1_remove = reels1_div.replace('.jpg">',"");
        }
        //loop to remove .jpg from final images
        for (var c=0; c<reels_to_check.length; c++){
            reels_to_check[c] = document.getElementById(reel_container_id[c]).firstElementChild.innerHTML.split("/")[2];
            reel_remove_tag[c] = reels_to_check[c].replace('.jpg">',"");
        }
        

//-----------------------------------------------------------------new code
        


//-----------------------------------------------------------------------


        /*first reel*/
/*       $("#reels-container1").animate({marginTop: "-=1000px"}, 200);
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
*/
        //send strings to function with ".jpg" removed
    /*  checkReels(reel_remove_tag[0], reel_remove_tag[1], reel_remove_tag[2],              reel_remove_tag[3]);
*/

        find_match(reel_remove_tag);
        function find_match(reel_remove_tag){
            var object = {};
            var result = [];

            reel_remove_tag.forEach(function (item){
                if(!object[item])
                    object[item] = 0;
                    object[item] += 1;
            })
            for (var prop in object) {
                if(object[prop] == 2) {
                    //result.push(prop);
                    winner2match();
                }
                if(object[prop] == 3) {
                    //result.push(prop);
                    winner3match();
                }
                if(object[prop] == 4) {
                    //result.push(prop);
                    winnerAllmatch();
                }
            }
            //console.log(result);
            //return result;
        }

    }; //end of runGame Function


    //match 2 icons function
    function winner2match(){
        win = true;
        if (btn1 == true){
            totalWon += 3;
            amountWon = 3;
            cash += amountWon;
            amountWon = 0;
            btn1 = false;
        }
        if (btn5 == true){
            totalWon += 8;
            amountWon = 8;
            cash += amountWon;
            amountWon = 0;
            btn5 = false;
        }
        if (btn10 == true){
            totalWon += 15;
            amountWon = 15;
            cash += amountWon;
            amountWon = 0;
            btn10 = false;
        }

        //delay inner html
        winnerTimeout = setTimeout(function(){
           $("#seperator").html("Double Match!!");
           $("#credits").html(cash);
           $("#totalWonCredit").html(totalWon);

            lightLoopOn(); //flash lights on win
        } , 500);
    }

   
   //match 3 icons function
    function winner3match(){
        win = true;
        if (btn1 == true){
            totalWon += 8;
            amountWon = 8;
            cash += amountWon;
            amountWon = 0;
            btn1 = false;
        }
        if (btn5 == true){
            totalWon += 15;
            amountWon = 15;
            cash += amountWon;
            amountWon = 0;
            btn5 = false;
        }
        if (btn10 == true){
            totalWon += 35;
            amountWon = 35;
            cash += amountWon;
            amountWon = 0;
            btn10 = false;
        }

        //delay inner html 
        winnerTimeout = setTimeout(function(){
           $("#seperator").html("TRIPLE Match!!");
           $("#credits").html(cash);
           $("#totalWonCredit").html(totalWon);
            lightLoopOn(); //flash lights on win
        } , 500);
   }

    //match all icons function
    function winnerAllmatch(){
        win = true;
        if (btn1 == true){
            amountWon = cash * 3;
            totalWon += amountWon;
            cash += amountWon;
            amountWon = 0;
            btn1 = false;
        }
        if (btn5 == true){
            amountWon = cash * 5;
            totalWon += amountWon;
            cash += amountWon;
            amountWon = 0;
            btn5 = false;
        }
        if (btn10 == true){
            amountWon = cash * 8;
            totalWon += amountWon;
            cash += amountWon;
            amountWon = 0;
            btn10 = false;
        }

        //delay inner html
        winnerTimeout = setTimeout(function(){
           $("#seperator").html("**ULTIMATE JACKPOT!!**");
           $("#credits").html(cash);
            $("#totalWonCredit").html(totalWon);
            lightLoopOn(); //flash lights on win
        } , 500);
   }
        
   //  function to flash side divs upon a win
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
   
    //use strings (img names) to check reels for winner
 /*   function checkReels(reel1_r, reel2_r, reel3_r, reel4_r) {
        var oneMatch;
        console.log("checkREELS",reel1_r, reel2_r, reel3_r, reel4_r);
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
    */

}); //end of document.ready

