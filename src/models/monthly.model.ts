import { PersonModel } from "./person.model";
import { StudentModel } from "./student.model";

export class MonthlyModel {
    public id?:string;
    constructor(
        public price:string,
        public maturity:string,
        public period:string,
        public interest:string,
        public person:PersonModel,
        public student:StudentModel
    ) { }
}