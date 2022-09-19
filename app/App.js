import { ImagesController } from "./Controllers/ImagesController.js";
import { QuotesController } from "./Controllers/QuotesController.js";
import { WeatherController } from "./Controllers/WeatherController.js";
import { TasksController } from "./Controllers/TasksController.js"
import { TodosController } from "./Controllers/ToDosController.js"

class App {
  
imagesController = new ImagesController
weatherController = new WeatherController
quoteController = new QuotesController
tasksController = new TasksController
todosController = new TodosController

}

window["app"] = new App();
