const form = document.getElementById(`form-contato`);
const contatos = [];
const agenda = [];

const notaMinima = ("Digite o contato:")


let linhas = '';

form.addEventListener(`submit`, function(e) {
    e.preventDefault();
    
    adicionaLinha();
    atualizaContatos();


});

    function adicionaLinha() {
        const inputNome = document.getElementById(`nome-contato`);
        const inputTel = document.getElementById(`tel-contato`);

        if (contatos.includes(inputNome.value)){
            alert(`O contato: ${inputNome.value} já foi inserido!`)}
            else {
                contatos.push(inputNome.value)
                agenda.push(parseFloat(inputTel.value))
        
            
                let linha = '<tr>';
                linha += `<td>${inputNome.value}</td>`;
                linha += `<td>${inputTel.value}</td>`;
                linha += '</tr>'; 
                
                linhas += linha;
            }
    
        inputNome.value = '';
        inputTel.value = '';
    }
    function atualizaContatos(){
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}

