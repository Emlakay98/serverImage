const Response = require('../../model/constant/response')
const response = new Response()
const Image = require('../../controller/image')
const image = new Image()
const multer = require('multer')

module.exports = (app) => {

    app.post('/image/save', (req, res) => {
        let {nombre, data} = req.body
        image.controllerSaveImage(nombre, data).then(result => {
            response.send(res, result)
        }).catch(error => {
            response.send(res, error)
        })
    })

    const upload = multer()
    app.post('/image/toBuffer', upload.single('file'), (req, res) => {
        let file = req.file
        {file} req.body
        image.controllerTransformImage(file).then(result => {
            response.send(res, result)
        }).catch(error => {
            response.send(res, error)
        })
    })
}