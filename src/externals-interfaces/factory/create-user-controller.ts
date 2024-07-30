import { CreateUserController } from "../../infra-controller/create-user-controller";
import { CreateUserUseCase } from "../../use-cases/create-user";
import { PrismaUsersRepository } from "../repositories/prisma/users"

export const makeCreateUserController = () => {
    const userRepository = new PrismaUsersRepository();
    const createUserUseCase = new CreateUserUseCase(userRepository);
    return new CreateUserController(createUserUseCase);
}

