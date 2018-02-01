import { InstructorModel } from "./instructor.model";

export class TrainingModel {
    public id?:string;
    public token?:string;
    constructor(
        public name:string,
        public desc:string,
        public image:string,
        public instructor:InstructorModel,
        //public gym:GymModel
    ) { }
}
