import { appState } from "../AppState.js";
import { weatherService } from "../Services/WeathersService.js";
import { Pop } from "../Utils/Pop.js";


function _drawWeather(){

    let w = appState.weather
    document.getElementById('weather').innerHTML = w.WeatherTemplate
}

export class WeatherController {
    constructor(){
        this.getWeather()
        appState.on('weather', _drawWeather)
    }

    async getWeather() {
        try {
            console.log('getting weather');
            await weatherService.getWeather()
        } catch (error) {
            console.log('[getWeather]');
            Pop.error(error)
        }
    }
}

