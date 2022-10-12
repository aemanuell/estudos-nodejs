import { ICategoriesRepository } from "../modules/cars/repositories/ICategoryRepository";

interface IRequest {
    name: string;
    description: string;
}

export class CreateCategoryService {
    constructor(private categoriesRepository: ICategoriesRepository){

    }

    execute({description, name}: IRequest){
        const categoryAlreadyExists = this.categoriesRepository.findByName(name);

        if(categoryAlreadyExists) {
            throw new Error("Category Already exists!");
        }

        this.categoriesRepository.create({name, description})
    }
}