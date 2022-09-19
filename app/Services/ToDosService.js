import { appState } from "../AppState.js"
import { ToDo } from "../Models/ToDo.js"
import { saveState } from "../Utils/Store.js"


class TodosService {
  allDone(id) {
    let todo = appState.todos.find(todo => todo.id == id)
    if (!todo) {
      throw new Error('Bad ID')
    }
    todo.allDone = !todo.allDone
    appState.emit('todos')
    saveState('todos', appState.todos)
  }
  createTodo(formData) {
    let todo = new ToDo(formData)
    appState.todos = [todo, ...appState.todos]
    console.log(appState.todos);
    saveState('todos', appState.todos)
  }
  removeTodo(id) {
    let leftovers = appState.todos.filter(todo => todo.id !== id)
    appState.todos = leftovers
    saveState('todos', appState.todos)
  }

}

export const todosService = new TodosService()