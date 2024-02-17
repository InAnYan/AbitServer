import {Router} from "express";
import {createDocument, deleteDocument, getDocumentById, getDocuments, updateDocument} from "./controllers";
import {validationWrapper} from "../util";

export const documentsRouter = Router();

documentsRouter.get('/', validationWrapper(getDocuments));
documentsRouter.get('/:id', validationWrapper(getDocumentById));
documentsRouter.post('/', validationWrapper(createDocument));
documentsRouter.put('/:id', validationWrapper(updateDocument));
documentsRouter.delete('/:id', validationWrapper(deleteDocument));
