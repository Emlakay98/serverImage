const Response = require('../constant/response')
const response = new Response()
const fs = require('fs')
const express = require('express')
const multer = require('multer')
const mimeTypes = require('mime-types')
const { Buffer } = require('buffer')

class ProcessImage {

    processSaveImage(nombre, data){
        return new Promise (async (resolve, reject) => {
            try {

                let upload = await this.decodeBase64(data)

                let ImgBuff = upload.dataImg
                
                let tmp = ImgBuff.path

                let target = './src/img/' + nombre + '.png'

                if (ImgBuff .indexOf('image') == 1){
                    return reject ('El archivo debe ser una imagen')
                }

                fs.writeFile(target, ImgBuff, (err) => {
                    if (err) console.log(err)
                })

                return resolve (response.success('Imagen guardada exitosamente'))

            } catch (error) {
                console.log(error)
                return reject (response.process('Algo salió mal'))
            }
        })
    }

    decodeBase64(data){
        return new Promise (async (resolve, reject) => {
            try {

                let dataImg = data.match(/^([A-Za-z-+\/]+);base64,(.+)$/)
                let response = {}

                if (dataImg.length != 3){
                    return reject (response.processValidation('Entrada inválida'))
                }

                response.type = dataImg[1]
                response.dataImg = new Buffer.from(dataImg[2], 'base64')
                let Img = response
                return resolve (Img)

            } catch (error) {
                console.log(error)
                return reject (response.process('Ocurrió un error'))
            }
        })
    }
}
module.exports = ProcessImage