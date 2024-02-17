import {Request, Response} from 'express';
import {Document} from "./model";

export async function getDocuments(request: Request, response: Response) {
    const documents = await Document.findAll();
    response.status(200).send(documents);
}

export async function createDocument(request: Request, response: Response) {
    if (!request.body.title || !request.body.source) {
        response.status(400).send('title and source are required');
        return;
    }

    if (typeof request.body.source != "string") {
        response.status(400).send('source must be a string');
        return;
    }

    const info = {
        title: request.body.title,
        source: Buffer.from(request.body.source, 'base64')
    }

    const document = await Document.create(info);
    response.status(200).send(document);
}

export async function getDocumentById(request: Request, response: Response) {
    const id = request.params.id;

    const document: any = await Document.findOne({where: {id: id}});

    if (!document) {
        response.status(404).send('document not found');
        return;
    }

    const fileName = document.title + '.docx';
    response.setHeader('Content-disposition', `attachment; filename=${fileName}`);
    response.setHeader('Content-type', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document');
    response.status(200).end(document.source);
}

export async function updateDocument(request: Request, response: Response) {
    const id = request.params.id;

    const document = await Document.update(request.body, {where: {id: id}});
    response.status(200).send(document);
}

export async function deleteDocument(request: Request, response: Response) {
    const id = request.params.id;

    await Document.destroy({where: {id: id}});
    response.status(200).send('destroyed');
}
