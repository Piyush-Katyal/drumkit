var numOfInstruments = document.querySelectorAll(".instrument").length;

for (var i = 0; i < numOfInstruments; ++i) {
    document.querySelectorAll(".instrument")[i].addEventListener("click", function () {

        var instrumentController = this.querySelector(".controller h2").innerHTML;
        eventdefinition(instrumentController, this);

    });
}

document.addEventListener("keypress", function (event) {
    x = event.key;
    x = x.toUpperCase();
    var i;
    switch (x) {
        case "A": i = 0;
            break;
        case "S": i = 1;
            break;
        case "D": i = 2;
            break;
        case "F": i = 3;
            break;
        case "J": i = 4;
            break;
        case "K": i = 5;
            break;
        case "L": i = 6;
            break;
        default: break;
    }
    var currentElement = document.querySelectorAll(".instrument")[i];
    eventdefinition(x, currentElement);
});

function eventdefinition(x, that) {
    var element;

    for (var j = 0; j < numOfInstruments; ++j) {
        element = document.querySelectorAll(".instrument")[j];
        element.style.background = "#e0e0e0";
        element.style.boxShadow = "20px 20px 60px #bebebe, -20px -20px 60px #ffffff";

        element.querySelector(".instrumentIcon").style.background = "linear-gradient(145deg, #cacaca, #f0f0f0)";
        element.querySelector(".instrumentIcon").style.boxShadow = "26px 26px 57px #cccccc, -26px -26px 57px #f4f4f4";
    }

    switch (x) {
        case ("A"): var instr1 = new Audio("sounds/snareDrum.mp3");
            instr1.play();

            that.style.background = "#a9c5fe";
            that.style.boxShadow = "20px 20px 60px #90a7d8, -20px -20px 60px #c2e3ff";

            that.querySelector(".instrumentIcon").style.background = "linear-gradient(145deg, #98b1e5, #b5d3ff)";
            that.querySelector(".instrumentIcon").style.boxShadow = "26px 26px 57px #90a7d8, -26px -26px 57px #c2e3ff";

            break;
        case "S": var instr2 = new Audio("sounds/hiHats.mp3");
            instr2.play();

            that.style.background = "#a9c5fe";
            that.style.boxShadow = "20px 20px 60px #90a7d8, -20px -20px 60px #c2e3ff";

            that.querySelector(".instrumentIcon").style.background = "linear-gradient(145deg, #98b1e5, #b5d3ff)";
            that.querySelector(".instrumentIcon").style.boxShadow = "26px 26px 57px #90a7d8, -26px -26px 57px #c2e3ff";

            break;
        case "D": var instr3 = new Audio("sounds/highTom.mp3");
            instr3.play();

            that.style.background = "#a9c5fe";
            that.style.boxShadow = "20px 20px 60px #90a7d8, -20px -20px 60px #c2e3ff";

            that.querySelector(".instrumentIcon").style.background = "linear-gradient(145deg, #98b1e5, #b5d3ff)";
            that.querySelector(".instrumentIcon").style.boxShadow = "26px 26px 57px #90a7d8, -26px -26px 57px #c2e3ff";

            break;
        case "F": var instr4 = new Audio("sounds/bassDrum.mp3");
            instr4.play();

            that.style.background = "#a9c5fe";
            that.style.boxShadow = "20px 20px 60px #90a7d8, -20px -20px 60px #c2e3ff";

            that.querySelector(".instrumentIcon").style.background = "linear-gradient(145deg, #98b1e5, #b5d3ff)";
            that.querySelector(".instrumentIcon").style.boxShadow = "26px 26px 57px #90a7d8, -26px -26px 57px #c2e3ff";

            break;
        case "J": var instr5 = new Audio("sounds/midTom.mp3");
            instr5.play();

            that.style.background = "#a9c5fe";
            that.style.boxShadow = "20px 20px 60px #90a7d8, -20px -20px 60px #c2e3ff";

            that.querySelector(".instrumentIcon").style.background = "linear-gradient(145deg, #98b1e5, #b5d3ff)";
            that.querySelector(".instrumentIcon").style.boxShadow = "26px 26px 57px #90a7d8, -26px -26px 57px #c2e3ff";

            break;
        case "K": var instr6 = new Audio("sounds/cymbal.mp3");
            instr6.play();

            that.style.background = "#a9c5fe";
            that.style.boxShadow = "20px 20px 60px #90a7d8, -20px -20px 60px #c2e3ff";

            that.querySelector(".instrumentIcon").style.background = "linear-gradient(145deg, #98b1e5, #b5d3ff)";
            that.querySelector(".instrumentIcon").style.boxShadow = "26px 26px 57px #90a7d8, -26px -26px 57px #c2e3ff";

            break;
        case "L": var instr7 = new Audio("sounds/lowTom.mp3");
            instr7.play();

            that.style.background = "#a9c5fe";
            that.style.boxShadow = "20px 20px 60px #90a7d8, -20px -20px 60px #c2e3ff";

            that.querySelector(".instrumentIcon").style.background = "linear-gradient(145deg, #98b1e5, #b5d3ff)";
            that.querySelector(".instrumentIcon").style.boxShadow = "26px 26px 57px #90a7d8, -26px -26px 57px #c2e3ff";

            break;
        default: console.log("Error: Switching the controller class element " + x);
    }
}