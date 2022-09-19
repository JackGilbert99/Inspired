import { generateId } from "../Utils/generateId.js";

export class Task {
    constructor(data) {
        this.id = data.id || generateId()
        this.orderId = data.orderId
        this.name = data.name
        this.price = parseInt(data.price)
        this.allDone = data.allDone || false
    
    
      }
    
    
      get Template() {
        return `
        <li class="d-flex justify-content-between list-group-item">
          <span>${this.name}</span>
          <span>$${this.price} <i onclick="app.itemsController.removeItem('${this.id}')" class="mdi mdi-close text-danger selectable rounded"  title="Remove Item"></i></span>
         <input onchange="app.itemsController.allDone('${this.id}')" class="ms-2" type="checkbox" ${this.allDone ? 'checked' : ''}>
         
        </li>
        `
      }
}