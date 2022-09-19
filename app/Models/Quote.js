export class Quote{
    constructor(data) {
        this.content = data.content 
        this.author = data.author
    }
    get QuotesTemplate() {
        return  `
        <div class="col-6 m-auto text-shadow">
            <h1>${this.content}</h1>
            <h2 class="on-hover">${this.author}</h2>
        </div>
        `
    }
    
}




