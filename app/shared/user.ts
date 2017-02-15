
export class User{
    constructor(
      public login: string,
      public password: string,
      public email: string,
      public userName?: string,
      public birthday?: string,
      public phoneNumber?: number
    ){ }
}
