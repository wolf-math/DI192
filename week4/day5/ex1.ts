interface BusinessPartner {
  name: string;
  credit: number;
}

interface Identity {
  id: number;
  name: boolean;
}

interface Contact {
  email: string;
  phone: string;
}

// Define a type Customer as an intersection type of BusinessPartner and Contact. Create an instance of the Customer type and initialize it with the appropriate properties.

// intersection = & (and)
// union = | (or)

type Customer = BusinessPartner & Contact;

const customer: Customer = {
  name: 'Marc',
  credit: 10000000,
  email: 'marc@billionaire.com',
  phone: '054-666-1234'
};
