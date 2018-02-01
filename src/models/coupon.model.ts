export class CouponModel {
    public id?:string;
    constructor(
        public type:string,
        public coupon:string,
        public expiration:string,
        public email:string
    ) { }
}