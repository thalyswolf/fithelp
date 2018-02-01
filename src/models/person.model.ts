export class PersonModel {
    public id?:string;
    constructor(
        public name:string,
        public coords:string,
        public desc:string,
        public email:string,
        public phone:string
    ) { }
}
