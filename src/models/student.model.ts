import { PersonModel } from "./person.model";
import { InstructorModel } from "./instructor.model";
import { TrainingModel } from "./training.model";
import { SheetModel } from "./sheet.model";

export class StudentModel {
    public id?:string;
    constructor(
        public person:PersonModel,
        public sheet:SheetModel[],
        public instructor:InstructorModel,
        public training:TrainingModel
    ) { }
}