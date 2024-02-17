import {Request, Response} from 'express';

export function validationWrapper(fn: (req: Request, res: Response) => Promise<void>): (req: Request, res: Response) => Promise<void> {
    return async (request: Request, response: Response) => {
        try {
            await fn(request, response);
        } catch (error: any) {
            if (error.name == "SequelizeValidationError" || error.name == "SequelizeUniqueConstraintError") {
                const validationErrors = error.errors.map((e: { message: any; }) => e.message);
                response.status(400).json({ errors: validationErrors });
            } else {
                throw error;
            }
        }
    }
}