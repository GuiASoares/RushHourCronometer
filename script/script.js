document.querySelector('form input').addEventListener('keydown', function (e) {
    if (e.key == 'Enter') {
        startCrono();
        document.querySelector('form input').value = "";
    }
})

let intervalCont = -1;

function startCrono() {
    let exitTime = document.getElementById('dateInput').value;
    let Crono = document.getElementById('crono');
    let exitHours = 0;
    let exitMinutes = 0;
    let exitSeconds = 0;
    
    if (!exitTime) {
        alert("Digite um horário!");
        return;
    } else {
        intervalCont++;
        let interval = setInterval(() => {
            if (intervalCont >= 1) {
                clearInterval(interval);
                intervalCont = 0;
                return;
            }
            let nowHours = new Date().getHours();
            let nowMinutes = new Date().getMinutes();
            let nowSeconds = new Date().getSeconds();
            exitHours = Number(exitTime.slice(0, 2));
            exitMinutes = Number(exitTime.slice(-2));
            exitSeconds = 0;
            let leftSeconds = 0;
            let leftMinutes = 0;
            let leftHours = 0;
                        
            // transformando as horas e minutos inseridos em segundos:
            exitHours = exitHours * 60;
            exitMinutes += exitHours;
            exitSeconds += exitMinutes * 60;

            // transformando as horas e minutos atuais em segundos:
            nowHours = nowHours * 60;
            nowMinutes += nowHours;
            nowSeconds += nowMinutes * 60;

            // calculando os minutos que faltam:
            leftSeconds = exitSeconds - nowSeconds;

            // se os minutos que faltam forem negativos...
            if (leftSeconds < 0) {
                // será adicionado 1 dia aos segundos.
                leftMinutes += 1440;
                leftSeconds += leftMinutes * 60;
            }

            if (leftSeconds == 0) {
                Crono.innerHTML = `Está na hora de ir embora!`;
                clearInterval(interval);
                intervalCont = -1;
                return;
            } else {
                // transformando os segundos restantes em minutos:
                leftMinutes = parseInt(leftSeconds / 60);

                // transformando os minutos restantes em horas:
                leftHours = parseInt(leftMinutes / 60);

                // calculando os segundos não transformados em minutos:
                leftSeconds = leftSeconds % 60;

                //calculando os minutos não transformados em horas:
                leftMinutes = leftMinutes % 60;

                // imprimindo quanto tempo falta para dar o horário de ir:
                Crono.innerHTML = `Falta(m) ${leftHours} hora(s), ${leftMinutes} minuto(s) e ${leftSeconds} segundo(s).`;
            }
        }, 1000);
    }
}