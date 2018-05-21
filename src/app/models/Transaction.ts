export class Transaction
{
    id: number;
    tradeDate: Date;
    settleDate: Date;
    amount: number;
    tranCode: string;
    bloombergToAccount: string;
    bloombergFromAccount: string;
}