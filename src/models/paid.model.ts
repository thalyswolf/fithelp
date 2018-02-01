import { MonthlyModel } from "./monthly.model";

export class PaidModel {
    public id?:string;
    constructor(
        public day:string,
        public monthly:MonthlyModel
    ) { }
}
