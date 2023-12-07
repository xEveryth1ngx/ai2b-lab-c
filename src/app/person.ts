export interface Person {
  firstName?: string;
  lastName?: string;
  age?: string;

  address: {
    city?: string;
    street?: string;
    postCode?: string;
  }
}
