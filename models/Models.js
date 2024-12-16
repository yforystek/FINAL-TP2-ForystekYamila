class Models {

calificaciones=[

    ]

    postCalificaciones = async (nuevaCal) => {
        if(nuevaCal.nota < 0 || nuevaCal.nota >10){
            throw new Error("“Los datos ingresados no son válidos")
    
        }else{
            nuevaCal.id = this.calificaciones.length + 1;
    
        await this.calificaciones.push(nuevaCal) 
        return nuevaCal
        }
    
    }
    getCalificaciones = async () => {
        return this.calificaciones
      }


    getCalificacionesAgrupadas = async () => {
        const agrupadas = [];

        this.calificaciones.forEach(cal => {
            const alumnoExistente = agrupadas.find(alumno => alumno.nombre === cal.nombre && alumno.apellido === cal.apellido);
            
            if (alumnoExistente) {
                alumnoExistente.notas.push(cal.nota);
            } else {
                agrupadas.push({
                    nombre: cal.nombre,
                    apellido: cal.apellido,
                    notas: [cal.nota]
                });
            }
        });

        return agrupadas;
    };
    
 }

export default Models;