console.log('aaa');
// document.getElementById("fundraise_remainingText").innerHTML = "8";
//
// var progressBarValue = Number(document.getElementById("fundraise_progressBar").offsetWidth);
// console.log(progressBarValue);
//
// var progressBarPercentValue = progressBarValue * (100/250);
// console.log(progressBarPercentValue);
// var currentValue = 1000 - (progressBarPercentValue/100) * 1000;
// console.log(currentValue);
// document.getElementById("fundraise_currentFundingText").innerHTML = currentValue;
//
//
function myFunction() {
    console.log('pressed');
    var fundraise = document.getElementById("fundraise_amount").value;
    raise = (100/1000)*(Number(fundraise));
    console.log(raise);

    var raiseBy = (raise/100) * 250;
    console.log(raiseBy);
    var progressBarPercent = Number(document.getElementById("fundraise_progressBar").offsetWidth) + raiseBy;
    console.log('progres' + progressBarPercent);
    document.getElementById("fundraise_progressBar").style.width = progressBarPercent + 'px';
}
//
// document.getElementById("fundraise_amount").value = "500";
