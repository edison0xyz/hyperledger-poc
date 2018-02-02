export class Contract {
    constructor(
       public contractId: string,
       public bondIssuer: string,
       public cdsSeller: string,
       public cdsBuyer: string
    ) {}
 }