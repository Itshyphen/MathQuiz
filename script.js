let maxValue,numA,numB,numC,answer;
let correct=0,wrong=0;


function randomA(maxValue) {
    let day= new Date();
    return(((day.getHours()*3600)+(day.getMinutes()*60)+(day.getSeconds())+day.getTime()) % maxValue);
}
function randomB(maxValue) {
    let day= new Date();
    return((day.getTime()) % maxValue);
}

function add() {
    document.getElementById("result").innerHTML=" ";
    document.getElementById("answer").placeholder="Answer";
    if(document.quizzer.arithmetic[0].checked)
         maxValue = 10;
    else {
        if(document.quizzer.arithmetic[1].checked)
            maxValue=30;
        else {
            maxValue=60;
        }
    }
    numA=randomA(maxValue);
    numB=randomB(maxValue);
    numC=numA + numB;
    document.getElementById("num").innerHTML=numA+"+"+numB+"="+"?";
}

function subtract() {
    document.getElementById("result").innerHTML=" ";
    document.getElementById("answer").placeholder="Answer";
  if (document.quizzer.arithmetic[0].checked)
    maxValue = 10;
  else {
    if(document.quizzer.arithmetic[1].checked)
        maxValue=30;
    else {
        maxValue=60;
    }
}
numA=randomA(maxValue);
numB=randomB(maxValue);
numC=numA - numB;
document.getElementById("num").innerHTML=numA+"-"+numB+"="+"?";
}

function divide() {
    document.getElementById("result").innerHTML="Please round off the answer!";
    if (document.quizzer.arithmetic[0].checked)
        maxValue = 10;
    else {
        if(document.quizzer.arithmetic[1].checked)
            maxValue=30;
        else {
            maxValue=60;
        }
    }
    numA=randomA(maxValue);
    numB=randomB(maxValue)+1;
    numC=numA / numB;
    numC=Math.round(numC);
    document.getElementById("num").innerHTML=numA+"/"+numB+"="+"?";
    document.getElementById("answer").placeholder="Please round off the answer!"
}

function multiply() {
    document.getElementById("answer").placeholder="Answer";
    document.getElementById("result").innerHTML=" ";
    if (document.quizzer.arithmetic[0].checked)
        maxValue = 10;
    else {
        if(document.quizzer.arithmetic[1].checked)
            maxValue=30;
        else {
            maxValue=60;
        }
    }
    numA=randomA(maxValue);
    numB=randomB(maxValue);
    numC=numA * numB;
    document.getElementById("num").innerHTML=numA+"*"+numB+"="+"?";
}

function Remainder() {
    document.getElementById("answer").placeholder="Answer";
    document.getElementById("result").innerHTML=" ";

    if (document.quizzer.arithmetic[0].checked)
        maxValue = 10;
    else {
        if(document.quizzer.arithmetic[1].checked)
            maxValue=30;
        else {
            maxValue=60;
        }
    }
    numA=randomA(maxValue);
    numB=randomB(maxValue)+1;
    numC=numA % numB;
    document.getElementById("num").innerHTML=numA+" MOD "+numB+"="+"?";
}
function check() {
    let score;
    if ((correct + wrong) != 0) {
        score = "" + ((correct / (correct + wrong)) * 100);
        score = score.substring(0, 4) + "%";
        alert("YOUR SCORE:  " + score + "\n"
            + correct + " correct\n"
            + wrong + " incorrect")
    } else alert("You have not completed any exercises yet.");
}
function ans() {
    let msg,score;
    answer=document.getElementById("answer").value;
    if (answer == numC) {
        correct++;
        msg = "Congratulations, you got the correct one\n";
    } else {
        wrong++;
        msg = "Oops!  " + answer + " is incorrect.\n\n"
            + "The correct answer was " + numC + ".";
    }
    score = "" + ((correct / (correct + wrong)) * 100);
    score = score.substring(0,4) + "%";
    let res=msg + "\n"+"\nYOUR SCORE:  " + score + "\n"
        + correct + " correct\n"
        + wrong + " incorrect"
    document.getElementById("result").innerHTML=res;
    document.getElementById("answer").value=" ";
    document.getElementById("num").innerHTML=" ";
}