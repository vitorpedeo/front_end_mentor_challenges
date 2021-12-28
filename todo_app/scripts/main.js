const newTodoForm = document.querySelector('form.input-wrapper');
const todosList = document.querySelector('ul.todos-list');
const clearCompletedTodosButton = document.querySelector('button.clear-todos');
const todosFilters = document.querySelectorAll('.filters > button');
const mobileTodosFilters = document.querySelectorAll('.mobile-filters > button');

let todos = [];

function generateUuid() {
  return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
    (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
  );
}

function handleFilterChange(event) {
  const filterButtonElement = event.target;
  const filtersDiv = filterButtonElement.parentNode;
  const currentActiveFilterButtonElement = filtersDiv.querySelector('button.active');
  const allTodos = todosList.querySelectorAll('.todo-item');

  allTodos.forEach(todo => {
    todo.style.display = 'flex';
  });

  currentActiveFilterButtonElement.classList.remove('active');

  filterButtonElement.classList.add('active');

  const filter = filterButtonElement.innerHTML.toLowerCase();

  switch(filter) {
    case 'all': {
      allTodos.forEach(todo => {
        todo.style.display = 'flex';
      });

      break;
    }
    case 'active': {
      const notCompletedTodos = todos.filter(todo => !todo.isCompleted);
      const notCompletedTodosId = notCompletedTodos.map(todo => todo.id);

      allTodos.forEach(todo => {
        if (!notCompletedTodosId.includes(todo.getAttribute('id'))) {
          todo.style.display = 'none';
        }
      });

      break;
    }
    case 'completed': {
      const completedTodos = todos.filter(todo => todo.isCompleted);
      const completedTodosId = completedTodos.map(todo => todo.id);

      allTodos.forEach(todo => {
        if (!completedTodosId.includes(todo.getAttribute('id'))) {
          todo.style.display = 'none';
        }
      });

      break;
    }
    default: {
      break;
    }
  }
}

function clearCompletedTodos() {
  const completedTodos = todos.filter(todo => todo.isCompleted);
  const completedTodosId = completedTodos.map(todo => todo.id);

  const allLiElements = todosList.querySelectorAll('li');
  const onlyCompletedLiElements = [...allLiElements].filter((todo) =>
  completedTodosId.includes(todo.getAttribute('id'))
  );
  
  onlyCompletedLiElements.forEach(completedTodoElement => {
    todosList.removeChild(completedTodoElement);
  });

  todos = todos.filter(todo => !todo.isCompleted);

  onTodosChange();
}

function removeTodo(event) {
  const buttonElement = event.target;
  const liElement = buttonElement.closest('li');

  const todoId = liElement.getAttribute('id');

  todos = todos.filter(todo => todo.id !== todoId);

  todosList.removeChild(liElement);

  onTodosChange();
}

function handleTodoStateChange(event) {
  const inputElement = event.target;
  const labelElement = inputElement.parentElement;
  const liElement = inputElement.closest('li');;

  const todoId = liElement.getAttribute('id');
  
  todos.forEach(todo => {
    if (todo.id === todoId) {
      todo.isCompleted = !todo.isCompleted;
    }
  });

  labelElement.classList.toggle('checked-todo');

  onTodosChange();
}

function onTodosChange() {
  const todosInfoElement = document.querySelector('.todos-info');
  const dragTip = document.querySelector('.drag-tip');

  if (todos.length === 0) {
    todosInfoElement.style.display = 'none';
    dragTip.style.display = 'none';
    
    return;
  }

  if (todosInfoElement.style.display !== 'block') {
    todosInfoElement.style.display = 'block';
  }
  
  if (dragTip.style.display !== 'block') {
    dragTip.style.display = 'block';
  }

  const todosCounterElement = todosInfoElement.querySelector('.todos-count');
  const notCompletedTodosLength = todos.filter(todo => !todo.isCompleted).length;
  todosCounterElement.innerText = `${notCompletedTodosLength} ${
    notCompletedTodosLength === 1 ? 'item' : 'items'
  } left`;
}

function insertNewTodo(newTodo) {
  const newTodoId = generateUuid();

  const labelElement = document.createElement('label');
  const labelText = document.createTextNode(newTodo);

  const inputElement = document.createElement('input');
  inputElement.setAttribute('type', 'checkbox');
  inputElement.setAttribute('name', `todo-${newTodoId}`);
  inputElement.setAttribute('id', `todo-${newTodoId}`);
  inputElement.setAttribute('onchange', 'handleTodoStateChange(event)');

  const spanElement = document.createElement('span');
  spanElement.classList.add('check');

  labelElement.appendChild(labelText);
  labelElement.appendChild(inputElement);
  labelElement.appendChild(spanElement);

  const buttonElement = document.createElement('button');
  buttonElement.setAttribute('type', 'button');
  buttonElement.setAttribute('onclick', 'removeTodo(event)');

  const imgElement = document.createElement('img');
  imgElement.setAttribute('src', '../images/icon-cross.svg');

  buttonElement.appendChild(imgElement);

  const liElement = document.createElement('li');
  liElement.setAttribute('id', `${newTodoId}`);
  liElement.classList.add('todo-item');

  liElement.appendChild(labelElement);
  liElement.appendChild(buttonElement);

  /**
   * HTML structure
   * <li>
   *  <label>
   *    Text
   *    <input />
   *    <span></span>
   *  </label>
   *  <button>
   *    <img />
   *  </button>
   * </li>
   */

  const todoObject = {
    id: newTodoId,
    label: newTodo,
    isCompleted: false,
  }

  todos.push(todoObject);
  todosList.appendChild(liElement);

  onTodosChange();
}

function handleNewTodo(event) {
  event.preventDefault();

  const newTodoInput = event.target.elements['new-todo'];

  insertNewTodo(newTodoInput.value);

  newTodoInput.value = '';
}

newTodoForm.addEventListener('submit', handleNewTodo);
clearCompletedTodosButton.addEventListener('click', clearCompletedTodos);
todosFilters.forEach(filter => {
  filter.addEventListener('click', handleFilterChange);
});
mobileTodosFilters.forEach(filter => {
  filter.addEventListener('click', handleFilterChange);
});