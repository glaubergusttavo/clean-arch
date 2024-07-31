import { ReturnUserController } from "../../infra-controller/return-user-controller";
import { ReturnUserUseCase } from "../../use-cases/return-user";
import { PrismaUsersRepository } from "../repositories/prisma/users"


export const makeReturnUserController = () => {
    const userRepository = new PrismaUsersRepository();
    const returnUserUseCase = new ReturnUserUseCase(userRepository);
    return new ReturnUserController(returnUserUseCase);
}