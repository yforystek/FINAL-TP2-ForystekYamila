
import Models from '../models/Models.js'
class Service {

    models=new Models()

    postCalificaciones = async (calNueva) => {
        const calificaciones = await this.models.postCalificaciones(calNueva)
        return calificaciones
    }
    getCalificaciones = async () => {
        const calificaciones = await this.models.getCalificaciones()
        return calificaciones
    }

    listarNotasAgrupadas = async () => {
        try {
            const data = await this.models.getCalificacionesAgrupadas();
            return data;
        } catch (error) {
            throw error;
        }
    };

}

export default Service
