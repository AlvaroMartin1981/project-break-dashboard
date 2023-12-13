function upDateClock () {
    const today = new Date ();
    const hours = today.getHours();
    const minutes = today.getMinutes();
    const seconds = today.getSeconds();
    const day = today.getDate();
    const month = today.getMonth() + 1 ;
    const year = today.getFullYear();
    console.log(today)

    const formattedHours = hours < 10 ? '0' + hours : hours;
    const formattedMinutes = minutes < 10 ? '0' + minutes : minutes;
    const formattedSeconds = seconds < 10 ? '0' + seconds : seconds;


    const formattedDates = `${day}/${month}/${year}`;
    const formattedClock = `${formattedHours}:${formattedMinutes}:${formattedSeconds}`
    document.querySelector('.date').textContent= formattedDates;
    document.querySelector('.clock').textContent= formattedClock;
    
    let firstMessage = '';
    if (hours == 1 || hours == 13) {
        firstMessage = `Es la...`;
    } else {
        firstMessage = `Son las...`
    }

    document.querySelector('.firstMessage').textContent = firstMessage

    let message = '';
    if (hours >= 0 && hours <= 7) {
    message = 'Es hora de descansar. Apaga y sigue mañana.';
    } else if (hours >= 7 && hours <= 12) {
    message = 'Buenos días, desayuna fuerte y a darle al código.';
    } else if (hours >= 12 && hours <= 14) {
    message = 'Echa un rato más pero no olvides comer.';
    } else if (hours >= 14 && hours <= 16) {
    message = 'Espero que hayas comido.';
    } else if (hours >= 16 && hours <= 18) {
    message = 'Buenas tardes, el último empujón.';
    } else if (hours >= 18 && hours <= 22) {
    message = 'Esto ya son horas extras, piensa en parar pronto.';
    } else {
    message = 'Buenas noches, es hora de pensar en parar y descansar.';
    }
   
    document.querySelector('.message').textContent = message;
}    

setInterval(upDateClock, 1000);

upDateClock ()
