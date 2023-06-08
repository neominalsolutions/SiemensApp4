export interface Customer {
  firstName: string;
  lastName: string;
  address?: CustomerAddress;
  credits: CustomerCredits[];
}

export interface CustomerAddress {
  street: string;
  city: string;
  state: string;
  zip: string;
}

export interface CustomerCredits {
  accountNumber: string;
}
