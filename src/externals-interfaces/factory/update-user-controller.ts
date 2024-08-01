import { UpdateUserController } from "../../infra-controller/update-user-controller";
import { UpdateUserUseCase } from "../../use-cases/update-user";
import { PrismaUsersRepository } from "../repositories/prisma/users"

export const makeUpdateUserController =  () =>{
    const userRepository = new PrismaUsersRepository();
    const updateUserUseCase = new UpdateUserUseCase(userRepository);
    return new UpdateUserController(updateUserUseCase);

}