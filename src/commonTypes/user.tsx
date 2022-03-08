export type UserType = {
  name:{
    first: string;
    last: string;
  };
  location:{
    street:{
      number:number,
      name:string
    }
  };
  email: string;
  login:{
    uuid:string
  }
}