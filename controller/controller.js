import Service from "../service/Services.js"


class Controller {
    service=new Service() ; 

    postCalificaciones = async (req, res) => {
        try{
         const calificacionNueva = req.body
         const calificaciones = await this.service.postCalificaciones(calificacionNueva)
         res.send(calificaciones)
     
     }catch (error){
         console.log("Error");
         res.send({errorMsg: error.message });
     }
         
     }
    
     getCalificaciones = async (req, res) => {
        const calificaciones = await this.service.getCalificaciones()
        res.send(calificaciones)
    }


    listarNotasAgrupadas = async (req, res) => {
        try {
            const data = await this.service.listarNotasAgrupadas();
            res.status(200).send({ Msg: data });
        } catch (error) {
            res.status(422).send({ errorMsg: "Error al agrupar las calificaciones" });
        }
    };
    

}

export default Controller