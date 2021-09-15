import { Column, DataType, Model, PrimaryKey, Table } from 'sequelize-typescript';
import { ToNumber } from 'src/common/to-number.decorator';

export enum TransactionType {
  CREDIT = 'credit',
  DEBIT = 'debit',
}

export const TransactionTypeList: string[] = Object.values(TransactionType);

@Table({
  tableName: 'transactions',
  createdAt: 'created_at',
  updatedAt: 'updated_at',
})
export class Transaction extends Model {
    @PrimaryKey
    @Column({ type: DataType.UUID, defaultValue: DataType.UUIDV4 })
    id: string;  
    
    @Column({ allowNull: false })
    type: TransactionType;    

    @ToNumber
    @Column({ allowNull: false, type: DataType.DECIMAL(10, 2) })
    amount: number;    
}
