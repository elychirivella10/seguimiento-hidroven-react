export const PromArray = (array, llave, tipo) => {
    if (array.length != 0) {
        let sum = 0 
        let retorno = 0
        for (let index = 0; index < array.length; index++) {
            sum = sum + array[index][llave]
        }
        switch (tipo) {
            case 'sum':
                retorno = sum
                break;
            case 'prm':
                retorno = sum/array.length 
                break;
            default:
                retorno = null
                break;
        }

        return retorno
    }else{
        return 0
    }
    
}


export const mayorAndMenor = (array, llave, tipo) => {
    if (array.length != 0) {
        let retorno = []
        let ar =[]
        for (let index = 0; index < array.length; index++) {
            retorno.push(array[index][llave])
        }
        switch (tipo) {
            case 'alto':
                 ar = Math.max(...retorno)
                break;
            case 'bajo':
                 ar = Math.min(...retorno)
                break;
            default:
                retorno = 0
                break;
        }
        return ar
    }else{
        return 0
    }
    
}