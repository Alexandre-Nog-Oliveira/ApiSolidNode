import { PostgreUserRepository } from './../../repositories/implementations/PostgresUserRepository';
import { MailTrapMailProvider } from "../../providers/implementations/mailtrapMailProvider";
import { CreateUserService } from './CreateUserService';
import { CreateUserController } from './CreateUserController';

const mailTrapMailProvider = new MailTrapMailProvider()
const postgreUserRepository = new PostgreUserRepository()

const createUserService = new CreateUserService(
    postgreUserRepository,
    mailTrapMailProvider,
)

const createUserController = new CreateUserController(
    createUserService
)


export { createUserController, createUserService }