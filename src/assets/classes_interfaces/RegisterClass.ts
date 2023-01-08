export class User{
    name!:string;
    password!:string;
    email!:string;
    phone!:number;
    userType!:string;
    wishList:number[]=[0];
    completed:any[]=[0];

    // public setWishList(num:number){
    //     this.wishList.push(num);
    // }

}