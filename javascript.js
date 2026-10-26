
const tarefa = document.getElementById('tarefa');
const formulario = document.getElementById('tarefa-form');
const listaTarefas = document.getElementById('lista-tarefas');

formulario.addEventListener('submit', function(event) { //permite executar uma ação quando um evento acontece.
    event.preventDefault(); //impede q a página recarregue após o form ser enviado

    const textoTarefa = tarefa.value; //JavaScript vai pegar o texto digitado e guardar na variável textoTarefa
    const novaTarefa = document.createElement('li'); // Cria um novo item de lista (<li>)
    const checkbox = document.createElement('input'); // Cria um elemento de entrada (<input>)
    const texto = document.createElement('p');  // Cria um parágrafo (<p>) para o texto da tarefa

    checkbox.type = 'checkbox'; //Define o input como uma caixa de seleção
    texto.textContent = textoTarefa; //texto.textContent → onde vamos colocar o conteúdo. textoTarefa → o conteúdo que queremos colocar ali.

    novaTarefa.appendChild(checkbox);
    novaTarefa.appendChild(texto); //appendChild adiciona um elemento dentro de outro. O elemento que recebe o outro fica antes do ponto. 

    listaTarefas.appendChild(novaTarefa); //listaTarefas é a lista <ul> que vai receber a nova tarefa. novaTarefa é o <li> que queremos adicionar nela.

    tarefa.value = ''; //depois que a tarefa for adicionada, o campo fica vazio e pronto para receber a próxima.

    const botaoExcluir = document.createElement('button');
    botaoExcluir.textContent = 'Excluir'; // Define o texto que aparecerá no botão
  
    
    
   
});