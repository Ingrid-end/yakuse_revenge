
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

//aqui vai sempre ser a hora atual
var startDate = new Date();
//como exemplo vou definir a data de fim com base na data atual
var endDate = new Date();
endDate.setDate(endDate.getDate()+30);

//aqui é a diferenca entre as datas, basicamente é com isso que voce calcula o tempo restante
var dateDiff;
var days, hours, minutes, seconds;
var $day = $('#dias');
var $hour = $('#horas');
var $minute = $('#minutos');
var $second = $('#segundos');
var $debug = $('#debug');
var timer;

function update(){
	dateDiff = endDate - startDate;
  dateDiff = dateDiff / 1000;
  
	seconds = Math.floor((dateDiff % 60));
  
  dateDiff = dateDiff / 60;
  minutes = Math.floor((dateDiff % 60));
	
  dateDiff = dateDiff / 60;
  hours = Math.floor((dateDiff%24));
  
	days = Math.floor(dateDiff/24);
  
  $day.text(days);
  $hour.text(hours);
  $minute.text(minutes);
  $second.text(seconds);
  
  startDate.setSeconds(startDate.getSeconds()+1);
}
update();
timer = setInterval(update, 1000);