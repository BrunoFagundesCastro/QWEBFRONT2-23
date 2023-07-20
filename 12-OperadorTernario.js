// Senha do usuário recebida do Banco de Dados
const BdSenha = 12345;

const senhaInformada = 12345;
let usuarioLogado;

if(BdSenha == senhaInformada){
    usuarioLogado = true;
} else{
    usuarioLogado = false;
}

console.log((usuarioLogado ? "Usuário logado" : "Senha incorreta")); 