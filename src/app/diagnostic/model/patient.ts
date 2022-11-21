export interface Patient {
  id:number;
  name:string;
  lastName:string;
  age:number;
  address:string;
  email:string;
  password:string;
  dermatologistId: number,
  diagnostic: string,
  treatment: string,
  status: string,
  description: string,
  urlImage:string;
}
