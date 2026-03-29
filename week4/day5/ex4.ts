class Customer1 {
  isCreditAllowed(): boolean {
    return true;
  }
}

class Supplier {
  isInShortList(): boolean {
    return true;
  }
}

type BusinessPartner1 = Customer1 | Supplier;

const one = new Customer1();
const two = new Supplier();

const partners: BusinessPartner1[] = [
  one,
  two
  // ...
];

function generateReport(partnerArray: BusinessPartner1[]): any {
  let results = partnerArray.map((partner) => {
    if (partner instanceof Customer1) {
      if (partner.isCreditAllowed()) {
        return 'Customer - Credit Allowed';
      } else {
        return 'Customer - Credit Denied';
      }
    } else if (partner instanceof Supplier) {
      if (partner.isInShortList()) {
        return 'Supplier - Shortlisted';
      } else {
        return 'Supplier - Not Shortlisted';
      }
    }
  });

  return results;
}
