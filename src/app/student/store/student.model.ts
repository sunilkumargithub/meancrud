export class StudentModel {

  public name: string;
  public email: string;
  public mobile: string;
  public address: string;

constructor(name: string , email: string, mobile: string, address: string) {
this.name = name;
this.email = email;
this.mobile = mobile;
this.address = address;
}

}

export interface IStudent {
    _id: string;
    name: string;
   email: string;
  mobile: string;
  address: string;

}
