import { PersonModel } from "./person.model";
import { InstructorModel } from "./instructor.model";
import { TrainingModel } from "./training.model";

export class SheetModel {
    public id?:string;
    constructor(
        public name:string,
        public instructor:InstructorModel,
        public training:TrainingModel
    ) { }
}