import { CompanyAccount } from './class/CompanyAccount'
import { PeopleAccount } from './class/PeopleAccount'
import { DioAccount } from './class/DioAccount'
import { BonusAccount  } from './class/BonusAccount'

const personalAccount = new DioAccount('João Silva', 123456);
const companyAccount = new CompanyAccount('Empresa XYZ', 654321);
const bonusAccount = new BonusAccount('Maria Souza', 112233);

console.log(personalAccount.getName());
console.log(personalAccount.getAccountNumber());
personalAccount.deposit(100);
personalAccount.withdraw(50);
personalAccount.getBalance();

console.log(companyAccount.getName());
console.log(companyAccount.getAccountNumber());
companyAccount.deposit(200);
companyAccount.getLoan(500);
companyAccount.getBalance();

console.log(bonusAccount.getName());
console.log(bonusAccount.getAccountNumber());
bonusAccount.deposit(100);
bonusAccount.getBalance();