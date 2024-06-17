import { DioAccount } from "./DioAccount";

export class BonusAccount extends DioAccount {
  constructor(name: string, accountNumber: number) {
    super(name, accountNumber);
  }

  deposit = (amount: number): void => {
    if (this.validateStatus()) {
      if (amount > 0) {
        const bonus = amount * 0.10;
        const totalAmount = amount + bonus;
        this.balance += totalAmount;
        console.log(`Você depositou R$${amount}. Com bônus de 10%, seu saldo é R$${totalAmount}. Seu saldo atual é R$${this.balance}.`);
      } else {
        console.log('Valor de depósito deve ser maior que zero.');
      }
    }
  }
}
