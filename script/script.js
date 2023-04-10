document.querySelector('form input').addEventListener('keydown', function (e) {
    if (e.key == 'Enter') {
        startCrono();
    }
})

let intervalCont = -1;

function startCrono() {
    let exitTime = document.getElementById('dateInput').value;
    let Crono = document.getElementById('crono');
    let exitHours = 0;
    let exitMinutes = 0;
    intervalCont++;


    let interval = setInterval(() => {
        if(intervalCont >= 1){
            console.log(intervalCont);
            clearInterval(interval);
            intervalCont = 0;
            return;
        }

        let nowHours = new Date().getHours();
        let nowMinutes = new Date().getMinutes();
        exitHours = Number(exitTime.slice(0, 2));
        exitMinutes = Number(exitTime.slice(-2));
        let leftMinutes = 0;
        let leftHours = 0;

        exitHours = exitHours * 60;
        exitMinutes += exitHours;

        nowHours = nowHours * 60;
        nowMinutes += nowHours;

        leftMinutes = exitMinutes - nowMinutes;

        if(leftMinutes < 0){
            leftMinutes += 1440;
        }

        if (leftMinutes == 0) {
            Crono.innerHTML = `Está na hora de ir embora!`;
        } else {
            leftHours = parseInt(leftMinutes / 60);

            leftMinutes = leftMinutes % 60;

            Crono.innerHTML = `Falta(m) ${leftHours} hora(s) e ${leftMinutes} minuto(s).`;
        }
    }, 1000);
}