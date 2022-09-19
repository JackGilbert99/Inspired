import { appState } from "../AppState.js";
import { quotesService } from "../Services/QuotesService.js";
import { Pop } from "../Utils/Pop.js";

function _drawQuote() {
    
   let q = appState.quotes
    document.getElementById('quotes').innerHTML = q.QuotesTemplate
}

export class QuotesController {
    constructor(){
        
        this.getQuote()
        appState.on('quotes', _drawQuote)
    }
    async getQuote(){
        try {
            console.log('got quotes');
            await quotesService.getQuote()
        } catch (error) {
            console.log('[getQuote]')
            Pop.error(error)
        }
    }
}