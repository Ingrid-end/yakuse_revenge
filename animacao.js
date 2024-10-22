
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

/// Data final do contador (substitua com a sua data)
const dataFinal = new Date('2024-12-31 23:59:59').getTime();

// Atualiza o contador a cada segundo
const contador = document.getElementById('contador');
const interval = setInterval(() => {
    const agora = new Date().getTime();
    const diferenca = dataFinal - agora;

    const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferenca % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((diferenca % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((diferenca % (1000 * 60)) / 1000);

    contador.innerHTML = `<span id="dias">${dias}</span>
                        <span class="name">dias</span>
                        <br>
                        <br>
                        <span id="horas">${horas}</span>
                        <span class="name">h</span>
                        <span id="minutos">${minutos}</span>
                        <span class="name">m</span>
                        <span id="segundos">${segundos}</span>
                        <span class="name">s</span>`;

    if (diferenca <= 0) {
        clearInterval(interval);
        contador.innerHTML = "Acesse: !";
    }
}, 1000);