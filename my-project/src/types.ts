export type Category = 'food' | 'transport' | 'entertainment' | 'health' | 'other';

export interface Transaction {
    id: string;           // уникальный ID
    name: string;         // название ("Обед в кафе")
    amount: number;       // сумма (положительная = доход, отрицательная = расход)
    category: Category;   // категория
    status: 'active' | 'deleted'; // состояние записи
    createdAt: Date;      // дата создания
    description?: string; // описание (необязательное)
}

export type NewTransaction = Omit<Transaction, 'id' | 'createdAt' | 'status'>;

export type UpdateTransaction = Partial<Omit<Transaction, 'id' | 'createdAt'>>;

export type TransactionSummary = Pick<Transaction, 'id' | 'name' | 'amount' | 'category'>;