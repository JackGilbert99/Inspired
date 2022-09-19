import { appState } from "../AppState.js"
import { generateId } from "../Utils/generateId.js"

export class ToDo {
constructor(data) {
    constructor(data) {
        this.id = data.id || generateId()
        this.name = data.name
        this.type = data.type
    }
  }

  get Template() {
    return /*html*/`
    <div class="col-3">
      <div class="bg-light todo-card rounded elevation-1 m-lg-3 m-1 px-lg-5 p-3" form="color">
        <div class="d-flex justify-content-between">
          <h4>ToDos:</h4>
          
        </div>
        <div class="d-flex justify-content-between mb-2">
          <h5>todo:</h5>
          <h5>${this.type}</h5>
        </div>
        <div class="d-flex mb-2">
          <h5>Finished</h5>
          <input onchange="app.todosController.allDone('${this.id}')" class="ms-2" type="checkbox" ${this.allDone ? 'checked' : ''}>
        </div>
        <ul class="list-group elevation-2 mb-3">

          ${this.taskTemplates}
        </ul>

        <form class="bg-info rounded p-1" onsubmit="app.tasksController.createTask('${this.id}')">
          <div class="d-flex w-100 ">
            <div class="flex-grow-1">
              <input class="form-control square-right" type="text" required minlength="2" name="name" placeholder="Name..."/>
              <label for="name" class="visually-hidden">Name</label>
            </div>
            <div>
              <input class="form-control  square" type="number" required min="0" name="price" placeholder="0.00"/>
              <label for="price" class="visually-hidden">Price</label>
            </div>
            <button type="submit" class="btn btn-info square-left" title="Add task">
              <b><i class="mdi mdi-plus text-light"></i></b>
            </button>
          </div>
        </form>
        <div class="my-3 d-flex align-tasks-end py-3 border-top justify-content-between">
          <h5>tasks: ${this.tasks.length}</h5>
        </div>
        <div onclick="app.todosController.removeTodo('${this.id}')" title="Remove todo"  class="mdi mdi-axe fs-1"></div>
      
      </div>

    </div>
    `
  }

  get taskTemplates() {
    let template = ''

    this.tasks.forEach(task => template += task.Template)
    return template
  }


  get Tasks() {
    let tasks = appState.tasks.filter(task => task.todoId == this.id)
    return tasks
  }

}