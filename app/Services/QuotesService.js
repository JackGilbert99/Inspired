import { appState } from "../AppState.js";
import { Quote } from "../Models/Quote.js";
import { SandBoxServer } from "./AxiosService.js"

class QuotesService {
    async getQuote(){
        const res = await SandBoxServer.get('/api/quotes')
        appState.quotes = new Quote(res.data)
        console.log('QuotesService', res.data);
    }
}

export const quotesService = new QuotesService