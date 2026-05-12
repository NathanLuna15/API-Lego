'use strict'

async function getDados(cep){
    const url = `https://viacep.com.br/ws/${cep}/json/`
    const response = await fetch(url)
    const data = await response.json()
    console.log(response);
    return data
}

async function preencherFormulario(){
    const cep = document.getElementById('cep').value
    const dadosCep = await getDados(cep)

    document.getElementById('endereco').value = dadosCep.logradouro
    document.getElementById('bairro').value = dadosCep.bairro
    document.getElementById('cidade').value = dadosCep.localidade
    document.getElementById('estado').value = dadosCep.uf
}

document.getElementById('cep').addEventListener('focusout', preencherFormulario)