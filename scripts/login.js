const usuarioAdmin = "Caio Melo"
const senhaAdmin = "topayrh"
const loginbt = document.querySelector('.btn')



function loginUser() {
    var loginUsername = document.getElementById("loginUsername").value;
    var loginPassword = document.getElementById("loginPassword").value;

    var storedUsername = localStorage.getItem("username");
    var storedPassword = localStorage.getItem("password");

    if (loginUsername === usuarioAdmin && loginPassword === senhaAdmin) {
        redireciona();
        alert("Bem-vindo, " + usuarioAdmin + "!");
        
        return true;
    
     }
     if (loginUsername === storedUsername && loginPassword === storedPassword) {
        alert("Bem-vindo, " + storedUsername + "!");
        redireciona();
        return true;

     } else {
        alert("Usuário não cadastrado.");
        return false
    }
}

function redireciona() {
    window.location.href = "paginainicial.html";
}
