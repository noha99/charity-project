export class Donation {
  id!: number;
  amount!: number;
  account!: number;
  projectId!: number;
  donor!: string;

  constructor(amount: number, account: number, projectId: number, donor: string) {
    this.amount = amount;
    this.account = account;
    this.projectId = projectId;
    this.donor = donor;
  }
}
