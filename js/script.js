// Arquivo JavaScript normal
console.log('Script normal carregado');

// Adicionar um elemento estilizado à página
document.addEventListener('DOMContentLoaded', function () {
    const element = document.createElement('div');
    element.className = 'styled-element';
    element.innerHTML =
        '<h3>Elemento Estilizado</h3><p>Este elemento foi adicionado pelo arquivo JavaScript normal.</p>';

    document.body.appendChild(element);
});
