import { DioAccount } from "./DioAccount";

export class CompanyAccount extends DioAccount {
  constructor(name: string, accountNumber: number) {
    super(name, accountNumber);
  }

  getLoan = (amount: number): void => {
    if (this.validateStatus()) {
      if (amount > 0) {
        this.balance += amount;
        console.log(`Você pegou um empréstimo de R$${amount}. Seu saldo atual é R$${this.balance}.`);
      } else {
        console.log('Valor de empréstimo deve ser maior que zero.');
      }
    }
  }
}
