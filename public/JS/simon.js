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
        boxArray = []
        randomBox();
        if ($(window).width() > 739) {
            x.animate({
                opacity: ".3"
            }, 500).effect("shake").animate ({
                opacity: "1"
            }, 500);
        } else {
             x.animate({
                opacity: ".3"
            }, 500).animate ({
                opacity: "1"
            }, 500);
        }
    });

    function arrayLoop() {
        boxIndex = 0;
        var intervalId = setInterval(function() {
                var $y = $(boxArray[i]);
                if ($(window).width() > 739) {
                    $y.animate({
                        opacity: ".3"
                    }, 200).effect("shake").animate ({
                        opacity: "1"
                    }, 200);
                } else {
                    $y.animate({
                        opacity: ".3"
                    }, 200).animate ({
                        opacity: "1"
                    }, 200);
                }
            i++;
            if (boxArray.length == i) {
                clearInterval(intervalId);
            };
        }, 750);
    };
    
    $buttons.each(function() {
        $(this).click(function() {
            if (boxArray[0] == undefined) {
                $title.html("<img src='/IMG/simon-garfunkel.png'>")
                setTimeout(function() {
                        $title.html("Simon Game")
                    }, 2000)
            } else {
                 if (this == boxArray[boxIndex]) {
                    boxIndex++;
                } else {
                    boxArray = [];
                    i = 0;
                    boxIndex = 0;
                    audio.play();
                    if ($(window).width() > 739) {
                        $buttons.addClass('pacman')
                        setTimeout(function() {
                            $buttons.removeClass('pacman')
                        }, 1000)
                    }
                    $title.html("Sorry...");
                    setTimeout(function() {
                        $title.html("Simon Game")
                    }, 1000)
                    $score.html("Score: ")
                    //bug on small screen
                }
                if (boxArray.length == boxIndex) {
                    $('#score').html("Score: " + boxIndex);
                    i = 0;
                    randomBox();
                    arrayLoop();
                }
            }
        });
    });
});
