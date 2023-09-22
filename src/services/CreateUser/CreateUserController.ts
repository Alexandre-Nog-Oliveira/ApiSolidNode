import { CreateUserService } from './CreateUserService';
import { Request, Response } from "express";


export class CreateUsreController{
    constructor(
     private createUserService : CreateUserService
    ){}
    

   async  handle(request: Request, response: Response): Promise<Response>{
        const { name, email, password, admin } = request.body;

        try{
            await this.createUserService.execute({
                name,
                email,
                password,
                admin
            })

            return response.status(201).send()
        } catch (err) {
            return response.status(400).json({
                message: err.message  || 'Unexpected error.'
            })
        }
    }
}