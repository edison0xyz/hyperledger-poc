export class Seller {
    $class: string;
    email: string;
    address: {
      $class: string,
      city: string;
      country: string,
      street: string,
      zip: string,
      id: string
    };
    accountBalance: number;
}
