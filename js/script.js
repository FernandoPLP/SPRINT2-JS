const usuario = {
    nome: document.querySelector('#c-nome'),
    sobrenome: document.querySelector('#c-sobrenome'),
    email: document.querySelector('#c-email'),
    senha: document.querySelector('#c-senha'),
    confirmasenha: document.querySelector('#c-confirmasenha'),
  };
 
  const label = {
    nome: document.querySelector('#l-nome'),
    sobrenome: document.querySelector('#l-sobre'),
    email: document.querySelector('#l-email'),
    senha: document.querySelector('#l-senha'),
    confirmasenha: document.querySelector('#l-confirmasenha'),
  };
 
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
 // VALIDAÇÃO PARA EMAIL
 usuario.email.addEventListener("keyup", () => {
     if(usuario.email.value.length>5 && usuario.email.value.includes("@")){
            usuario.email.setAttribute("style", `outline-color: #0f0`);//verde
            label.email.setAttribute("style", `color: #0f0`);
           
            
     
            }else{
               usuario.email.setAttribute("style", `outline-color: #f00`);//vermelho
               label.email.setAttribute("style", `color: #f00`);
               
               
            }    
    
         });
 // VALIDAÇÃO PARA SENHA
 usuario.senha.addEventListener("keyup", () => {
     if(usuario.senha.value.length >= 5 && usuario.senha.value.length <= 9){
            usuario.senha.setAttribute("style", `outline-color: #0f0`);
            label.senha.setAttribute("style", `color: #0f0`);
            
            
     
            }else{
               usuario.senha.setAttribute("style", `outline-color: #f00`);
               label.senha.setAttribute("style", `color: #f00`);
               
               
            
 
            }
         });
 // VALIDAÇÃO PARA CONFIRMAR SENHA
 usuario.confirmasenha.addEventListener("keyup", () => {
     if(usuario.confirmasenha.value != usuario.senha.value){
            usuario.confirmasenha.setAttribute("style", `outline-color: #ff0000`);
            label.confirmasenha.setAttribute("style", `color: #f00`);
            
            
     
            }else{
               usuario.confirmasenha.setAttribute("style", `outline-color: #000`);
               label.confirmasenha.setAttribute("style", `color: #0f0`);
               
               
            }
         });
 
 
 //VALIDAÇÃO DO BOTÃO CADASTRAR
 const btnCadastrar = document.querySelector("#btnCadastro");
 
 btnCadastrar.addEventListener("click", () => {
   if (
     label.nome.style.color === "rgb(0, 255, 0)" &&
     label.sobrenome.style.color === "rgb(0, 255, 0)" &&
     label.email.style.color === "rgb(0, 255, 0)" &&
     label.senha.style.color === "rgb(0, 255, 0)" &&
     label.confirmasenha.style.color === "rgb(0, 255, 0)"
   ) {
     alert("CADASTRO VALIDADO!");
     
   } else {
     alert("CADASTRO INVALIDO!");
   }
 });