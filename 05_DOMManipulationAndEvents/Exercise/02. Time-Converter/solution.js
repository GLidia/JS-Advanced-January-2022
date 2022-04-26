function attachEventsListeners() {

    let daysButtonElement = document.getElementById("daysBtn");
    let hoursButtonElement = document.getElementById("hoursBtn");
    let minutesButtonElement = document.getElementById("minutesBtn");
    let secondsButtonElement = document.getElementById("secondsBtn");

    let daysElement = document.getElementById("days");
    let hoursElement = document.getElementById("hours");
    let minutesElement = document.getElementById("minutes");
    let secondsElement = document.getElementById("seconds");

    daysButtonElement.addEventListener("click", function(){
        let days = Number(daysElement.value);
        hoursElement.value = days * 24;
        minutesElement.value = days * 1440;
        secondsElement.value = days * 86400;
    });

    hoursButtonElement.addEventListener("click", function(){
        let hours = Number(hoursElement.value);
        let days = hours / 24;
        daysElement.value = days;
        minutesElement.value = days * 1440;
        secondsElement.value = days * 86400;
    });

    minutesButtonElement.addEventListener("click", function(){
        let minutes = Number(minutesElement.value);
        let days = minutes / 1440;
        daysElement.value = days;
        hoursElement.value = days * 24;
        secondsElement.value = days * 86400;
    });

    secondsButtonElement.addEventListener("click", function(){
        let seconds = Number(secondsElement.value);
        let days = seconds / 86400;
        daysElement.value = days;
        hoursElement.value = days * 24;
        minutesElement.value = days * 1440;
    });
}