
import { Quote } from "./Models/Quote.js"
import { Task } from "./Models/Task.js"
import { ToDo } from "./Models/ToDo.js"
import { Value } from "./Models/Value.js"
import { Weather } from "./Models/Weather.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"
import { loadState } from "./Utils/Store.js"

class AppState extends EventEmitter {
  /** @type {import('./Models/Value').Value[]} */
  values = loadState('values', Value)

  /** @type {import('./Models/Image').Image | null} */

  image = null
  /** @type {import('./Models/Quote').Quote} */

  quotes =loadState('quotes', Quote)

  /** @type {import('./Models/Weather').Weather} */

  weather =loadState('weather', Weather)

  /** @type {import('./Models/ToDo').ToDo[]} */

  todos =loadState('todos', ToDo)

  /** @type {import('./Models/Task').Task[]} */

  tasks =loadState('items', Task)
  
  }

export const appState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
