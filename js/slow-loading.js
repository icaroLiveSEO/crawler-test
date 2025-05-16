// Este arquivo JavaScript é carregado lentamente (simulado pelo servidor)
console.log('Script lento carregado');

// Adicionar um elemento estilizado à página
document.addEventListener('DOMContentLoaded', function () {
    const element = document.createElement('div');
    element.className = 'slow-element';
    element.innerHTML =
        '<h3>Elemento de Carregamento Lento</h3><p>Este elemento foi adicionado pelo arquivo JavaScript de carregamento lento.</p>';

    document.body.appendChild(element);
});
