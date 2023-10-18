 var estadoAtual = false;

function alternargradient(){
    var body = document.getElementById('body');
    var marromh1= document.querySelector('.marrom h1');
    var paragrafos= document.querySelectorAll('.marrom p');
    var underedlist= document.querySelector('.marrom ul');

    //Revisar essa parte
    if (estadoAtual) { 
        body.style.background = 'linear-gradient(to right, #8F6A4E 50%, #ffff 50%)';
        marromh1.style.color = 'white';
        paragrafos.forEach(function(paragrafo) {
            paragrafo.style.color = 'white';
        });
        underedlist.style.color = 'white';
    } else { 
        body.style.background = 'linear-gradient(to right, #F5F5F7 50%, #FFFFFF 50%)';
        marromh1.style.color = '#6E6E73';
        paragrafos.forEach(function(paragrafo) {
            paragrafo.style.color = 'black';
        });
        underedlist.style.color = 'black';
    }

    estadoAtual = !estadoAtual;
}
    






