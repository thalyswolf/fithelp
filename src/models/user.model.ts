import { PersonModel } from "./person.model";

export class UserModel {
    public id?:string;
    public token?:string;
    constructor(
        public user:string,
        public password:string,
        public account:number,
        public person:PersonModel
    ) { }
}
