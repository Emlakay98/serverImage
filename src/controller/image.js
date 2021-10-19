const ProcessImage = require('../model/process/image')
const processImage = new ProcessImage()

class Image {

    controllerSaveImage(nombre, data){
        return processImage.processSaveImage(nombre, data)
    }

    controllerTransformImage(file){
        return processImage.processTransformImage(file)
    }
}
module.exports = Image