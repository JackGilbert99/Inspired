import { appState } from "../AppState.js";
import { todosService } from "../Services/TodosService.js";
import { getFormData } from "../Utils/FormHandler.js";
import { setHTML } from "../Utils/Writer.js";

function _drawTodos() {
  let template = ''
  appState.todos.forEach(todo => template += todo.Template)
  setHTML('todos', template)
}

export class TodosController {
  constructor() {
    appState.on('todos', _drawTodos)
    appState.on('items', _drawTodos)
    _drawTodos()
  }
  createTodo() {
    try {

      window.event.preventDefault()

      const form = window.event.target
      let formData = getFormData(form)

      todosService.createTodo(formData)

      form.reset()
    } catch (error) {
      console.error('[CREATE_TODO]', error);
    }
  }

  allDone(id) {
    todosService.allDone(id)
  }
  removeTodo(id) {
    if (window.confirm('Do you want to remove this item?')) {
      todosService.removeTodo(id)
    }
  }
}