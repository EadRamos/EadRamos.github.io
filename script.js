let conta = 0;
        const listaImagens = ["img/uso/mascote2.png","img/uso/mascote.png","img/uso/mascote3.png","img/uso/mascote4.png"]; 
        function mudaImage(foto){
            document.getElementById("mascotee").src = foto
        }
        function pegaImagem(){
            if(conta<=2){
                conta ++;
                mudaImage(listaImagens[conta]);
            }
            else{
                conta = 0;
                mudaImage(listaImagens[conta]);
            }
        }
        
        window.onload = setInterval(pegaImagem,300);
        
        function cadastro(){
            alert('obrigado! seu email foi enviado com sucesso.');
        }