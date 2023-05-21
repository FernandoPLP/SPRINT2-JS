// VALIDAÇÃO PARA O NOME
usuario.nome.addEventListener("keyup", () => {
    if(usuario.nome.value.length<5){
           usuario.nome.setAttribute("style", `outline-color: #ff0000`);
           label.nome.setAttribute("style", `color: #ff0000`);
           
           
           
    
           }else{
              usuario.nome.setAttribute("style", `outline-color: #0f0`);
              label.nome.setAttribute("style", `color: #0f0`);
              
              
              
           }
        });
// VALIDAÇÃO PARA SOBRENOME
usuario.sobrenome.addEventListener("keyup", () => {
    if(usuario.sobrenome.value.length<5){
        usuario.sobrenome.setAttribute("style", `outline-color: #ff0000`);
        label.sobrenome.setAttribute("style", `color: #ff0000`);
        
        
    
           }else{
              usuario.sobrenome.setAttribute("style", `outline-color: #0f0`);
              label.sobrenome.setAttribute("style", `color: #0f0`);//verde
              
              
           }
        });