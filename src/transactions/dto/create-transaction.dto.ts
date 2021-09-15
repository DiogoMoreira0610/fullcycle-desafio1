import { IsIn, IsNotEmpty } from "class-validator";
import { TransactionType, TransactionTypeList } from "../entities/transaction.entity";

export class CreateTransactionDto {
    @IsNotEmpty()
    amount: number;
  
    @IsIn(TransactionTypeList)
    @IsNotEmpty()
    type: TransactionType;
}
