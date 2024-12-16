import {Router} from "express"
import Controller from "../controller/controller.js"


const routes= Router()
const controller=new Controller();


// routes.post("/",controller.ingresarPalabra);
// routes.get("/",controller.listarPalabra);
// routes.get("/")
// routes.get("/all")

// routes.get("/cantidad", controller.allApiPalabras)
// routes.delete("/:palabra",controller.borrarPalabra)

export default routes