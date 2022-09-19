import { appState } from "../AppState.js";
import { Weather } from "../Models/Weather.js";
import { SandBoxServer } from "./AxiosService.js";


class WeathersService{
    async getWeather(){
        const res = await SandBoxServer.get('/api/weather')
        appState.weather = new Weather(res.data)
        console.log('WeathersService', res.data);
    }
}

export const weatherService = new WeathersService