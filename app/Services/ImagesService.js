import { appState } from "../AppState.js";
import { Image } from "../Models/Image.js";
import { SandBoxServer } from "./AxiosService.js"

class ImagesService {
    async getImage(){
        const res = await SandBoxServer.get('/api/images')
        appState.image = new Image(res.data)
        console.log('ImagesService', res.data);
    }

}

export const imagesService = new ImagesService