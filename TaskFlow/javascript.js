const tarefa = document.getElementById('tarefa'); // Busca o campo de texto pelo ID "tarefa"
const formulario = document.getElementById('tarefa-form'); // Busca o formulário pelo ID "tarefa-form"
const listaTarefas = document.getElementById('lista-tarefas'); // Busca a lista onde as tarefas serão adicionadas
const editarTarefa = document.getElementById('modal-editar');
const editarTexto = document.getElementById('texto-editar'); 
const edicaoSalvar = document.getElementById('salvar-edicao');
const edicaoCancelar = document.getElementById('cancelar-edicao');
const tarefas = [];
const tarefasSalvas = localStorage.getItem('minhaTarefa');

let textoAtual = null; //vamos usar para guardar qual tarefa original precisa ser atualizada.

     edicaoSalvar.addEventListener('click', function() {
       const indice = tarefas.indexOf(textoAtual.textContent);
        tarefas[indice] = editarTexto.value;
        textoAtual.textContent = editarTexto.value;

        localStorage.setItem('minhaTarefa', JSON.stringify(tarefas));
        editarTarefa.style.display = 'none';
     });

     edicaoCancelar.addEventListener('click', function() {
        editarTarefa.style.display = 'none';
     });

formulario.addEventListener('submit', function(event) { // Escuta quando o formulário é enviado
    event.preventDefault(); // Impede que a página recarregue ao enviar o formulário

    const textoTarefa = tarefa.value; // Pega o texto digitado no campo

    const novaTarefa = document.createElement('li'); // Cria um novo item de lista (<li>)
    const checkbox = document.createElement('input'); // Cria uma caixa de seleção
    const texto = document.createElement('p'); // Cria um parágrafo para o texto da tarefa
    const botaoExcluir = document.createElement('button'); // Cria o botão de excluir

    botaoExcluir.textContent = 'Excluir';
    botaoExcluir.type = 'button'; // Impede que o botão envie o formulário

    const botaoEditar = document.createElement('button'); // Cria o botão de editar

    botaoEditar.textContent = 'Editar';
    botaoEditar.type = 'button';

    checkbox.type = 'checkbox'; // Define o input como uma caixa de seleção
    texto.textContent = textoTarefa; // Coloca o texto digitado dentro do parágrafo
    botaoExcluir.textContent = 'Excluir'; // Define o texto que aparecerá no botão

    novaTarefa.appendChild(checkbox); // Adiciona a checkbox ao item da lista
    novaTarefa.appendChild(texto); // Adiciona o texto depois da checkbox
    novaTarefa.appendChild(botaoExcluir); // Adiciona o botão Excluir depois do texto
    novaTarefa.appendChild(botaoEditar); // Adiciona o botão Editar depois do botão Excluir

    listaTarefas.appendChild(novaTarefa); // Adiciona a nova tarefa à lista visível na página

    tarefa.value = ''; // Limpa o campo de texto depois de adicionar a tarefa

    botaoExcluir.addEventListener('click', function() {
    const indice = tarefas.indexOf(texto.textContent);
    tarefas.splice(indice, 1);
    localStorage.setItem('minhaTarefa', JSON.stringify(tarefas));
    novaTarefa.remove();
    
    });

    botaoEditar.addEventListener('click', function() {
        textoAtual = texto;
        editarTexto.value = texto.textContent; //copia o texto da tarefa para o campo.
        editarTarefa.style.display = 'flex'; //mostra o modal centralizado
    
    });
     tarefas.push(textoTarefa);
     localStorage.setItem('minhaTarefa', JSON.stringify(tarefas));
});
