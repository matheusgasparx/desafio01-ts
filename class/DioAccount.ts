export abstract class DioAccount {
  private readonly name: string;
  private readonly accountNumber: number;
  public balance: number = 0;
  private status: boolean = true;

  constructor(name: string, accountNumber: number) {
    this.name = name;
    this.accountNumber = accountNumber;
  }

  getName = (): string => {
    return this.name;
  }

  getAccountNumber = (): number => {
    return this.accountNumber;
  }

  deposit = (amount: number): void => {
    if (this.validateStatus()) {
      if (amount > 0) {
        this.balance += amount;
        console.log(`Você depositou R$${amount}. Seu saldo atual é R$${this.balance}.`);
      } else {
        console.log('Valor de depósito deve ser maior que zero.');
      }
    }
  }

  withdraw = (amount: number): void => {
    if (this.validateStatus()) {
      if (amount > 0 && this.balance >= amount) {
        this.balance -= amount;
        console.log(`Você sacou R$${amount}. Seu saldo atual é R$${this.balance}.`);
      } else if (amount <= 0) {
        console.log('Valor de saque deve ser maior que zero.');
      } else {
        console.log('Saldo insuficiente para saque.');
      }
    }
  }

  getBalance = (): void => {
    console.log(`Seu saldo atual é R$${this.balance}`);
  }

  protected validateStatus = (): boolean => {
    if (this.status) {
      return this.status;
    }

    throw new Error('Conta inválida');
  }
}
