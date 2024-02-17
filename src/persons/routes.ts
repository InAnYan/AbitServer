import {Router} from "express";
import {createPerson, deletePerson, getPersonById, getPersons, updatePerson} from "./controllers";
import {validationWrapper} from "../util";

export const personsRouter = Router();

personsRouter.get('/', validationWrapper(getPersons));
personsRouter.get('/:id', validationWrapper(getPersonById));
personsRouter.post('/', validationWrapper(createPerson));
personsRouter.put('/:id', validationWrapper(updatePerson));
personsRouter.delete('/:id', validationWrapper(deletePerson));
