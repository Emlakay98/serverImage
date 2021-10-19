//url para rechazo de peticiones ajenas
module.exports = (app) => {
    app.post('*', (request, response) => {        
        response.status(404).json({code: 4, data: 'Not Found', message: 'Ruta no definida'});
    });
    app.get('*', (request, response) => {        
        response.status(404).json({code: 4, data: 'Not Found', message: 'Ruta no definida'});
    });
    app.put('*', (request, response) => {        
        response.status(404).json({code: 4, data: 'Not Found', message: 'Ruta no definida'});
    });
}