import { Router } from "express";
import { CreateInfoDoctorController } from "./controllers/CreateInfoDoctorsController";
import { GetAllInfoDoctorsController } from "./controllers/GetAllInfoDoctorsController";
import { DeleteInfoDoctorsController } from "./controllers/DeleInfoDoctorsController.ts";
import { UpdateInfodoctorsController } from "./controllers/UpdateInfoDoctorsController";
import { CreateAdressController } from "./controllers/CreateAdressController";
import { GetallAdressController } from "./controllers/getAllAdressController";
import { UpdateAdressController } from "./controllers/UpdateAdressController";
import { DeleteAdresscontroller } from "./controllers/DeleteAdressController";
import { CreateSpecialtiesController } from "./controllers/CreateSpecialtiesControllers";
import { GetAllSpecialtiesController } from "./controllers/GetAllSpecialtiesController";
import { InsertDoctorSpecialtiesControlller } from "./controllers/InsertDoctorSpecialtiesController";
import { GetAllController } from "./controllers/GetAllController";
import { GetCepController } from "./controllers/GetCepController";
import { GetInfoDoctorByIdController } from './controllers/GetInfoDoctorByIdController';
import { GetAdressByIdController } from './controllers/GetInfoAdressByIdController';

const routes = Router(); 

//rotas para o Crud de Medicos
routes.post("/InfoDoctors", new CreateInfoDoctorController().handle);
routes.post("/InfoDoctorsById/:id", new GetInfoDoctorByIdController().handle);
routes.get("/InfoDoctors/", new GetAllInfoDoctorsController().handle);
routes.delete("/InfoDoctors/:id", new DeleteInfoDoctorsController().handle);
routes.put("/InfoDoctors/:id", new UpdateInfodoctorsController().handle);


//Rotas para enderecos
routes.post("/Adress", new CreateAdressController().handle);
routes.post("/AdressById/:id", new GetAdressByIdController().handle);
routes.get("/Adress", new GetallAdressController().handle);
routes.delete("/Adress/:id", new DeleteAdresscontroller().handle);
routes.put("/Adress/:id", new UpdateAdressController().handle);

//rotas para especialidade
routes.post("/Specialties", new CreateSpecialtiesController().handle);
routes.get("/Specialties", new GetAllSpecialtiesController().handle);

//rotas para DoctorSpecialidade
routes.post(
  "/InfoDoctorsSpecialties",
  new InsertDoctorSpecialtiesControlller().handle
);
routes.delete(
  "/InfoDoctorsSpecialties/:id_doctor",
  new DeleteInfoDoctorsController().handle
);

routes.get("/InfoDoctorsSpecialties/:search", new GetAllController().handle);

routes.post("/CEP/:cep", new GetCepController().handle);

export { routes };

