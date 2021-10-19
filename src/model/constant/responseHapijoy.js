class responseHapiJoy {

    constructor() {
        
    }

    getMessageHapiJoy(param)
    {
        let data = {}
        let error = param[0]['type']
        let message = undefined
        let limit = undefined
        let variable = undefined
        
        switch (error) {
            case 'string.base':
                message = "Por favor verifique la informacion"
                break;

            case 'string.empty' || 'string.trim':
                message = "Favor de llenar la informacion en los campos solicitados"
                break;

            case 'string.min':
                limit = param[0].context.limit 
                message = `El minimo de caracteres que puedes incluir en el campo #definir es ${limit}`
                break;

            case 'string.max':
                limit = param[0].context.limit 
                message = `El minimo de caracteres que puedes incluir en el campo #definir es ${limit}`
                break;

            case 'any.required':
                message = "La informacion es requerida en el formulario"
                break;
            
            case 'any.only':
                valid = param[0].context.valids.join(' || ')
                message = `El campo ${parameter} debe ser ${valid}`
                break;

            case 'string.email':
                message = `El campo ${parameter} debe una dirección de correo electrónico valida`
                break;

            case 'string.caracteresInvalidos':
                message = `El campo ${parameter} contiene caracteres no válidos`
                break;

            case 'string.espacios':
                message = `El campo ${parameter} contiene espacios en blanco`
                break;

            case 'string.nombre':
                message = `El campo ${parameter} no es un nombre valido`
                break;

            case 'string.numeros':
                message = `El campo ${parameter} debe contener solo números`
                break;

            case 'string.nonumeros':
                message = `El campo ${parameter} no puede contener números`
                break;

            case 'string.coordenadas':
                message = `El campo ${parameter} debe ser una coordenada valida`
                break;

            default:
                message = "Por favor verique la informacion, si el error persiste contacte a soporte"
                break;
        }

        data = {message}
        
        return data
    }
}

module.exports = responseHapiJoy