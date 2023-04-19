// função para fazer a tecla Enter funcionar como o botão
document.querySelector('form input').addEventListener('keydown', function (e) {
    if (e.key == 'Enter') {
        startCrono();
        document.querySelector('form input').value = "";
    }
})
// declarando a variável utilizada para o controle da repetição setInterval:
let intervalCont = -1;

function startCrono() {
    // declarando a variável que vai receber o valor inserido:
    let exitTime = document.getElementById('dateInput').value;

    //declarando a variável que vai receber a section onde será imprimido o tempo restante:
    let Crono = document.getElementById('crono');
    // declarando as variáveis (horas, minutos e segundos, respectivamente) responsáveis por receber o horário inserido pelo usuário:
    let exitHours = 0;
    let exitMinutes = 0;
    let exitSeconds = 0;
    
    // condicional para verificar se o usuário digitou um horário, se ele não digitou, vai ser alertado.
    if (!exitTime) {
        alert("Digite um horário!");
        return;
    } else {
        // contando o número de vezes que o botão for clicado:
        intervalCont++;

        // começando o loop para contagem regressiva do tempo:
        let interval = setInterval(() => {

            // a condição faz com que o loop pare se o botão de Iniciar Contagem for clicado novamente:
            if (intervalCont >= 1) {
                clearInterval(interval);
                intervalCont = 0;
                return;
            }

            // declarando as variáveis (horas, minutos e segundos, respectivamente) que receberão o horário atual:
            let nowHours = new Date().getHours();
            let nowMinutes = new Date().getMinutes();
            let nowSeconds = new Date().getSeconds();

            // definindo o valor das variáveis que recebem o horário inserido pelo usuário:
            exitHours = Number(exitTime.slice(0, 2));
            exitMinutes = Number(exitTime.slice(-2));
            exitSeconds = 0;

            // declarando as variáveis (horas, minutos e segundos, respectivamente) que receberão o tempo que resta para chegar no horário inserido: 
            let leftHours = 0;
            let leftMinutes = 0;
            let leftSeconds = 0;
                        
            // transformando as horas e minutos inseridos em segundos:
            exitHours = exitHours * 60;
            exitMinutes += exitHours;
            exitSeconds += exitMinutes * 60;

            // transformando as horas e minutos atuais em segundos:
            nowHours = nowHours * 60;
            nowMinutes += nowHours;
            nowSeconds += nowMinutes * 60;

            // calculando os segundos que faltam:
            leftSeconds = exitSeconds - nowSeconds;

            // se os minutos que faltam forem negativos...
            if (leftSeconds < 0) {
                // será adicionado 1 dia aos segundos.
                leftMinutes += 1440;
                leftSeconds += leftMinutes * 60;
            }

            // verificando se não está na hora inserida pelo usuário:
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

                // Fazendo com que o texto se adeque a hora mostrada
                
                
                    if(leftHours == 0){
                        if(leftMinutes == 0){
                            if(leftSeconds < 10){
                                Crono.innerHTML = `0${leftSeconds}`;
                            }
                            else {
                                Crono.innerHTML = `${leftSeconds}`;
                            }
                        }
                        else if(leftMinutes < 10){
                            if(leftSeconds < 10){
                                Crono.innerHTML = `0${leftMinutes} : 0${leftSeconds}`;
                            }
                            else {
                                Crono.innerHTML = `0${leftMinutes} : ${leftSeconds}`;
                            }
                        }
                        else {
                            if(leftSeconds < 10){
                                Crono.innerHTML = `${leftMinutes} : 0${leftSeconds}`;
                            }
                            else {
                                Crono.innerHTML = `${leftMinutes} : ${leftSeconds}`;
                            }
                        }
                    }
                    else if(leftHours < 10){
                        if(leftMinutes < 10){
                            if(leftSeconds < 10){
                                Crono.innerHTML = `0${leftHours} : 0${leftMinutes} : 0${leftSeconds}`;
                            }
                            else {
                                Crono.innerHTML = `0${leftHours} : 0${leftMinutes} : ${leftSeconds}`;
                            }
                        }
                        else {
                            if(leftSeconds < 10){
                                Crono.innerHTML = `0${leftHours} : ${leftMinutes} : 0${leftSeconds}`;
                            }
                            else {
                                Crono.innerHTML = `0${leftHours} : ${leftMinutes} : ${leftSeconds}`;
                            }
                        }
                    }
                    else {
                        if(leftMinutes < 10){
                            if(leftSeconds < 10){
                                Crono.innerHTML = `${leftHours} : 0${leftMinutes} : 0${leftSeconds}`;
                            }
                            else {
                                Crono.innerHTML = `${leftHours} : 0${leftMinutes} : ${leftSeconds}`;
                            }
                        }
                        else {
                            if(leftSeconds < 10){
                                Crono.innerHTML = `${leftHours} : ${leftMinutes} : 0${leftSeconds}`;
                            }
                            else {
                                Crono.innerHTML = `${leftHours} : ${leftMinutes} : ${leftSeconds}`;
                            }
                        }
                    }
                
                
                
                /* if(leftHours == 0){
                    if(leftMinutes == 0){
                        Crono.innerHTML = `0${leftSeconds}`;
                    }
                    else if(leftMinutes < 10){
                        Crono.innerHTML = `0${leftMinutes} : 0${leftSeconds}`;
                    }
                    else if(leftSeconds < 10){
                        Crono.innerHTML = `${leftMinutes} : 0${leftSeconds}`;
                    }
                    else {
                        Crono.innerHTML = `${leftMinutes} : ${leftSeconds}`;
                    }
                }
                else{
                    
                Crono.innerHTML = `${leftHours} : ${leftMinutes} : ${leftSeconds}`;
                } */
            }
        }, 1000);
    }
}