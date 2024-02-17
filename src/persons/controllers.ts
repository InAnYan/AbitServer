import {Request, Response} from 'express';
import {Person} from "./model";

export async function getPersons(request: Request, response: Response) {
    const persons = await Person.findAll();
    response.status(200).send(persons);
}

export async function createPerson(request: Request, response: Response) {
    const info = {
        firstName: request.body.firstName,
        lastName: request.body.lastName,
        fatherName: request.body.fatherName,
        birthday: request.body.birthday,
        sex: request.body.sex
    }

    const person = await Person.create(info);
    response.status(200).send(person);
}

export async function getPersonById(request: Request, response: Response) {
    const id = request.params.id;

    const person = await Person.findOne({where: {id: id}});

    if (!person) {
        response.status(404).send('person not found');
        return;
    }

    response.status(200).send(person);
}

export async function updatePerson(request: Request, response: Response) {
    const id = request.params.id;

    const person = await Person.update(request.body, {where: {id: id}});
    response.status(200).send(person);
}

export async function deletePerson(request: Request, response: Response) {
    const id = request.params.id;

    await Person.destroy({where: {id: id}});
    response.status(200).send('destroyed');
}
