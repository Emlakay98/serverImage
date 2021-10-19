const ProcessImage = require('../model/process/image')
const processImage = new ProcessImage()

class Image {

    controllerSaveImage(nombre, data){
        return processImage.processSaveImage(nombre, data)
    }
}
module.exports = Image