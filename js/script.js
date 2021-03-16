let currentSet = 'sobremim';


//inicia sempre com a pagina "sobre mim" como principal
alternateMainContent('snippets/sobremim.html','sobremim');

//muda pra pagina inicial quando clica em "sobre mim"
document.querySelector("#sobremim").addEventListener('click', function(){
    checkPage('li-sobremim');
    alternateMainContent('snippets/sobremim.html', 'sobremim');
});
//muda pra pagina inicial quando clica no meu nome
document.querySelector(".vic").addEventListener('click',function(){
    checkPage('li-sobremim');
    alternateMainContent('snippets/sobremim.html','sobremim');
});
//muda pra pagina inicial quando clica na imagem
document.querySelector("#imagem").addEventListener('click',function(){
    checkPage('li-sobremim');
    alternateMainContent('snippets/sobremim','sobremim');
});
//muda pra pagina historico quando clica no "historico"
document.querySelector("#historico").addEventListener('click',function(){
    checkPage('li-historico');
    alternateMainContent('snippets/historico.html','historico');
});
//muda pra pagina coleção quando clica no "coleção"
document.querySelector("#colecao").addEventListener('click',function(){
    checkPage('li-colecao');
    alternateMainContent('snippets/colecao.html','colecao');
});

//faz a mudança realmente
function alternateMainContent(url, newSet){
    $ajax.makeRequest(url,function(response){
        document.querySelector("#main").innerHTML = response;

    },false);
    alternateSet(newSet);
};

//seta (deixa branco) o elemento certo para cada pagina
function alternateSet(elementToSet){
    document.getElementById(currentSet).classList.remove('set');
    document.getElementById(elementToSet).classList.add('set');
    currentSet=elementToSet;
};

function checkPage(currentPage){
    let tabName = "Victória Luisi - ";
    if (currentPage == 'li-sobremim'){
        tabName+='Sobre Mim';
    }
    else if (currentPage == 'li-historico'){
        tabName+='Histórico';
    }
    else {
        tabName+='Coleção';
    }

    document.getElementById("titulo").textContent = tabName;
};