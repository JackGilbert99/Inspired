export class Weather{
    constructor(data) {
        this.temp = data.main.temp
        this.fahrenheit = ((data.main.temp - 273.15) * 9/5 + 32 )
        // this.celsius = (data.main.temp - 273.15)
    }
    get WeatherTemplate() {
        return `
        <h1>${this.fahrenheit}</h1>
        `
    }
}