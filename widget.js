window.onload = function () {
   init();
};

function init() {
    fundraise = document.getElementById("fundraise_amount").value;
    progressBarValue = Number(document.getElementById("fundraise_progressBar").offsetWidth);
    console.log(progressBarValue);
    progressBarPercentValue = getPercentOfValueOf(progressBarValue, 250);
    console.log('percent of 250 is ' + progressBarPercentValue);
    valueOfProgressBar = Math.round(getValueOfPercent(progressBarPercentValue, 1000));
    console.log(valueOfProgressBar);

    document.getElementById("fundraise_currentFundingText").innerHTML = valueOfProgressBar;
    document.getElementById("fundraise_remainingText").innerHTML = 1000 - valueOfProgressBar;
}

function myFunction() {
    var progressBarValue = Number(document.getElementById("fundraise_progressBar").offsetWidth);
    if (progressBarValue > 249) {
        return;
    }
    var fundraise = document.getElementById("fundraise_amount").value;
    raiseInPercents = getPercentOfValueOf(Number(fundraise), 1000);
    console.log('Input is'+raiseInPercents+'% of 1000');

    // var raiseBy = (raiseInPercents / 100) * 250;
    var raiseBy = getValueOfPercent(raiseInPercents, 250);
    console.log(raiseBy);
    progressBarValue += raiseBy;
    console.log('progres' + progressBarValue);
    if (progressBarValue > 250) {
        progressBarValue = 250;
    }
    document.getElementById("fundraise_progressBar").style.width = progressBarValue + 'px';
    init();
}

function getPercentOfValueOf(percent, percentOf) {
    return (100 / percentOf) * percent;
}

function getValueOfPercent(percent, maxValue) {
    return (percent / 100) * maxValue;
}

