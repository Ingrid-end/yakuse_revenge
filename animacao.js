
const meuObservador = new IntersectionObserver((entrie)=>{
    entrie.forEach((entry)=>{
        if(entry.isIntersecting){
            entry.target.classList.add('show')
        }else{
            entry.target.classList.remove('show')
        }
           
    })
})

const elemets = document.querySelectorAll('.hidden')

elemets.forEach((elemet)=> meuObservador.observe(elemet))

// ---------------------------------------------------------------

// Obter a data atual
const dataAtual = new Date();

// Adicione 8 dias à data atual
const dataFinal = new Date(dataAtual);
dataFinal.setDate(dataFinal.getDate() + 30);

// Converter a data final para uma string no formato desejado
const dataHoraFinalString = `${dataFinal.getFullYear()}-${(dataFinal.getMonth() + 1).toString().padStart(2, '0')}-${dataFinal.getDate().toString().padStart(2, '0')} 23:59:59`;

// Dividir a data em um array
const partesDataHora = dataHoraFinalString.split(/[\s:-]+/);

//  Criar um objeto Date 
const dataHoraFinal = new Date(partesDataHora[0], partesDataHora[1] - 1, partesDataHora[2], partesDataHora[3], partesDataHora[4], partesDataHora[5] || 0);

// Atualize o contador a cada segundo
const intervalo = setInterval(() => {

    // Obter a data atual em São Paulo, em formato 'en-US', isto é, MM/DD/YYYY HH:mm:ss
    const horaAtualSP = new Date(new Date().toLocaleString('en-US', {
        timeZone: 'America/Sao_Paulo'
    }));

    // Calcular a diferença entre a data final e a data atual
    const diferenca = dataHoraFinal - horaAtualSP;

    // Verificar se atingiu a data final
    if(diferenca <= 0){

        // clearInterval é usada para parar a execução de intervalos de tempo
        clearInterval(intervalo);

        // Enviar o horário para o HTML
        document.getElementById('dias').innerHTML = 0;
        document.getElementById('horas').innerHTML = 0;
        document.getElementById('minutos').innerHTML = 0;
        document.getElementById('segundos').innerHTML = 0;
        return;
    }

    // Calcular dias, horas, minutos e segundos
    const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferenca % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((diferenca % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((diferenca % (1000 * 60)) / 1000);

    // Enviar o horário para o HTML atualizar o elemento com o tempo restante
    document.getElementById('dias').innerHTML = `dias: ${dias}`;
    document.getElementById('horas').innerHTML = `${horas}h`;
    document.getElementById('minutos').innerHTML = `${minutos}m`;
    document.getElementById('segundos').innerHTML = `${segundos}s`;

}, 1000);  // Atualizar a cada 1 segundo