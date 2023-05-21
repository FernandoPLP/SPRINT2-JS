const DarkModeButton = document.getElementById('DarkMode');
    DarkModeButton.addEventListener('click', function() {
    if(DarkModeButton.textContent == "Modo Escuro"){
        document.body.style.backgroundColor = '#222';
        document.body.style.color = '#fff';
        DarkModeButton.textContent = "Modo Claro"
    }else{
        document.body.style.backgroundColor = '#fff';
        document.body.style.color = '#222';
        DarkModeButton.textContent = "Modo Escuro";
    }
       });
