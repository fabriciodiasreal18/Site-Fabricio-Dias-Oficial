  function trocarCifra(novaImagem) {
    document.getElementById("imgCifra").src = novaImagem;
    
  }


  document.getElementById("btnEnviar").addEventListener("click", function () {
    let nomeDigitado = document.getElementById("nome").value;
    console.log("O nome digitado foi:", nomeDigitado);

    let nomeInput = document.getElementById("nome");
  

    this.textContent = "Enviado!";
    this.style.backgroundColor = "#008d07ff";
    this.style.color = "#fff";
    this.style.fontSize = "20px";
    this.style.boxShadow = "0 30px 60px #025a06ff";

    
    localStorage.setItem("nomeSalvo", nomeDigitado);
     nomeInput.value = "";

      setTimeout(() => {
        
        this.textContent = "Enviar";
        this.style.backgroundColor = "";
        this.style.color = "";
        this.style.fontSize = "";
        this.style.boxShadow = "0 30px 60px var(--cor-primaria)";
        
    }, 2000);
    
         

    
});
