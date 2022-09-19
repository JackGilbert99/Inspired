import { appState } from "../AppState.js"
import { imagesService } from "../Services/ImagesService.js"
import { Pop } from "../Utils/Pop.js"

function _drawPicture() {
    let pic = appState.image
    document.querySelector('body').style.backgroundImage = `url(${pic.largeImgUrl})`
}


export class ImagesController {
constructor(){
    this.getImage()
    appState.on('image',_drawPicture)
}

    async getImage() {
        try {
            console.log('getting img')
            await imagesService.getImage()
        } catch (error) {
            console.log('[getImage]')
            Pop.error(error)
        }
    }
}