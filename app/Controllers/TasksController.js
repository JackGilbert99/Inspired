


export class TasksController {
    createTask(todoId) {
        try {
          window.event.preventDefault()
          let form = window.event.target
          let formData = getFormData(form)
          formData.todoId = todoId
          console.log(formData);
        tasksService.createTask(formData)
          form.reset()
        } catch (error) {
          console.error('[CREATETASK]', error);
        }
      }
    
      removeTask(id) {
        if (window.confirm('Do you want to remove this task?')) {
        tasksService.removeTask(id)
        }
      }
     
}