function abrirInfo() { // APARECE UMA MENSAGEM
        const info = document.getElementById("btn-info")
        window.alert('Mensagem: Essa página web é apenas um projeto para fins de práticas com HTML, CSS e JavaScript. <Vítor Moreira Novais>')
    }

    function abrirMenu(){ // AO ABRIR O SIDENAV
        const info = document.getElementById("btn-info").style.display = 'none'
        let aparecerSidenav = document.getElementById("sidenav").style.marginRight = '0px'
        let menu = document.getElementsByClassName("btn-abrirMenu")[0].style.marginRight= '182px'
    }

    function fecharMenu() { // AO FECHAR O SIDENAV
        const info = document.getElementById("btn-info")
        let esconderSidenav = document.getElementById("sidenav").style.marginRight = '-320px'
        let menu = document.getElementsByClassName("btn-abrirMenu")[0].style.marginRight= '0px'
        setTimeout(()=> info.style.display = 'block', 1000) // APARECE APÓS 1000 MILISSEGUNDOS (1 SEGUNDO)
    }