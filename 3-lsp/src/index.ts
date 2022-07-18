import CreditCard from './CreditCard';
import DebitCard from './DebitCard';
import NubankRewards from './NubankRewards';
// const card = new CreditCard();
// c/onst card = new DebitCard();
const card = new NubankRewards();

card.validade();
card.collectPayment();

// SO L ( Liskov substituion principle (Principio de substituição de Liskov)) ID
