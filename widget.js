window.onload = function () {
    goalAchieved = false;
    progressBarValue = Number(document.getElementById("fundraise_progressBar").offsetWidth);
    founded = Number(document.getElementById("fundraise_currentFundingText").innerHTML);
    setInputFilter(document.getElementById("fundraise_amount"), function (value) {
        return /^\d*$/.test(value)
    });
    setStates();
};

function setStates() {
    progressBarPercentValue = getPercentOfValueOf(this.progressBarValue, 250);
    this.founded = Math.round(getValueOfPercent(progressBarPercentValue, 1000));
    document.getElementById("fundraise_amount").value = '';
    document.getElementById("fundraise_currentFundingText").innerHTML = this.founded;
    document.getElementById("fundraise_remainingText").innerHTML = Math.round(getPercentOfValueOf(this.founded, 1000)) + '%';
    hideNotification(true);
    if (this.founded === 1000) {
        goalIsRised();
    }
}

function pledge() {
    var fundraise = Number(document.getElementById("fundraise_amount").value);
    raiseInPercents = getPercentOfValueOf(fundraise, 1000);

    var raiseBy = getValueOfPercent(raiseInPercents, 250);
    this.progressBarValue += raiseBy;
    if (this.progressBarValue > 250) {
        alert('amount of money that you pledged is more then it is required');
        this.progressBarValue = 250;
    }
    document.getElementById("fundraise_progressBar").style.width = this.progressBarValue + 'px';
    setStates();
    hidePledgeButtons();
    hideNotification(false);
}

function getPercentOfValueOf(percent, percentOf) {
    return (100 / percentOf) * percent;
}

function getValueOfPercent(percent, maxValue) {
    return (percent / 100) * maxValue;
}

function setInputFilter(textbox, inputFilter) {
    ["input", "keydown", "keyup", "mousedown", "mouseup", "select", "contextmenu", "drop"].forEach(function (event) {
        textbox.addEventListener(event, function () {
            if (inputFilter(this.value)) {
                this.oldValue = this.value;
                this.oldSelectionStart = this.selectionStart;
                this.oldSelectionEnd = this.selectionEnd;
            } else if (this.hasOwnProperty("oldValue")) {
                this.value = this.oldValue;
                this.setSelectionRange(this.oldSelectionStart, this.oldSelectionEnd);
            }
        });
    });
}

function goalIsRised() {
    document.getElementById('fundraise_progressBar').style.backgroundColor = '#1CBC2C';
    hidePledgeButtons();
    setTimeout(function () {
        alert('all money is gathered');
    },500)
}

function hidePledgeButtons() {
    document.getElementById('fundraise_pledgeButton').hidden = true;
    document.getElementById('fundraise_amount').hidden = true;
}

function hideNotification(hide) {
    var [notification] = document.getElementsByClassName('notification notification-success');
    notification.hidden = hide;
}

