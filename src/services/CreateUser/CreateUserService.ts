import { User } from "../../entities/User";
import { IMailProvider } from "../../providers/IMailProvider";
import { IUsersRepository } from "../../repositories/IUsersRespository";
import { ICreateUserRequestDTO } from "./CreateUserDTO";

export class CreateUserService{
    
    constructor(
        private usersRespository : IUsersRepository,
        private mailProvider: IMailProvider,
    ){}

    async execute(data: ICreateUserRequestDTO){
        const userAlreadyExists = await this.usersRespository.findByEmail(data.email);

        if(userAlreadyExists){
            throw new Error('User already exists')
        }

        const user = new User(data);

        await this.usersRespository.save(user);

       await this.mailProvider.sendMail({
            to: {
                name: data.name,
                email: data.email,
            },
            from: {
                name: 'Customer',
                email: 'Customer@mail.com',
            },
            subject: 'Welcome customer',
            body: 'access the platform using your email'
        })
    }
}