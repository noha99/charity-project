export class Case {
  id!: number;
  name!: string;
  description!: string;
  phone !: number;
  age !: number;
  gender !: string;
  governorate !: string;
  nationality !: string
  image !: string

  reporterPhone!: number;
  reporterName!: string;
  reporterAdress!: string;

  amountNeeded !: number
  donation !: number
  approved!: boolean
  isDone!: boolean
}
