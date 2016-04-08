$(function() {
"use strict";
    var $start = $('#start');
    var $red = $('#red');
    var $yellow = $('#yellow');
    var $blue = $('#blue');
    var $green = $('#green');
    var $buttons = $('.buttons');
    var boxArray = [];
    var boxIndex = 0;
    var i = 0;
    var x;
    var audio = new Audio('/AUDIO/pacman.mp3');
    var $title = $('#title');
    var $score = $('#score');

    //random box to fade
    function randomBox() {
        var random = parseInt(Math.random()*100);
        if (random <= 25) {
            x = $red 
        } else if (random > 25 && random <= 50) {
            x = $yellow
        } else if (random > 50 && random <= 75) {
            x = $blue
        } else if (random > 75) {
            x = $green
        };

        boxArray.push(x[0])
        console.log(boxArray)
        return x
    };
                
    $start.click(function() {
        randomBox();
        x.animate({
            opacity: ".3"
        }, 500).effect("shake").animate ({
            opacity: "1"
        }, 500);
    });

    function arrayLoop() {
        boxIndex = 0;
        var intervalId = setInterval(function() {
                var $y = $(boxArray[i]);
                $y.animate({
                    opacity: ".3"
                }, 200).effect("shake").animate ({
                    opacity: "1"
                }, 200);
            i++;
            if (boxArray.length == i) {
                clearInterval(intervalId);
            };
        }, 750);
    };
    
    $buttons.each(function() {
        $(this).click(function() {
            //on first click after arrayLoop boxindex = 0
            console.log(boxIndex)
            if (this == boxArray[boxIndex]) {
                boxIndex++;
            } else {
                i = 0;
                boxIndex = 0;
                audio.play();
                $title.html("Sorry...")
                $title.append("<img src='/IMG/simon-garfunkel.png'>");
                setTimeout(function() {
                    $title.html("Simon Game")
                    $start.html("Start");
                }, 2000)
                $score.html("Score: ")
                $buttons.addClass('pacman')
                setTimeout(function() {
                    $buttons.removeClass('pacman')
                }, 4000)
                
            }
            if (boxArray.length == boxIndex) {
                $('#score').html("Score: " + boxIndex);
                i = 0;
                randomBox();
                arrayLoop();
            }
        });
    });
});
