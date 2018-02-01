import { PersonModel } from "./person.model";

export class InstructorModel {
    public id?:string;
    constructor(
        public person:PersonModel
    ) { }
}