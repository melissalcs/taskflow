const tarefa = document.getElementById('tarefa');
const formulario = document.getElementById('tarefa-form');
const listaTarefas = document.getElementById('lista-tarefas');

formulario.addEventListener('submit', function(event) {
    event.preventDefault();
    const textoTarefa = tarefa.value;

    const novaTarefa = document.createElement('li');
    const texto = document.createElement('p');

    texto.textContent = textoTarefa;
    novaTarefa.appendChild(texto);
    listaTarefas.appendChild(novaTarefa);

    tarefa.value = '';
});