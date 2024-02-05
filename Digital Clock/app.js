
// Span element get - hours,minutes,seconds

const hours = document.getElementById('hrs');

const minutes = document.getElementById('mins');

const seconds = document.getElementById('secs');


// Every second it should update
setInterval(() => {

    // Getting the value of these Hrs,Mins and Secs from system

    const date = new Date();
    const dtHours = date.getHours();
    const dtMinutes = date.getMinutes();
    const dtSeconds = date.getSeconds();

    // Attaching value with span elements - hours,minutes,seconds
    // Single quote 0 add. Once 1 0 will be added
    hours.innerHTML = (dtHours < 10) ? '0' + dtHours: dtHours;
    minutes.innerHTML = (dtMinutes <10) ? '0' + dtMinutes: dtMinutes;
    seconds.innerHTML = (dtSeconds <10) ? '0' + dtSeconds: dtSeconds;

} , 1000);


