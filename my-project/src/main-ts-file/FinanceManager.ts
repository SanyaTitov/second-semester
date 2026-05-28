import type { Transaction, NewTransaction, UpdateTransaction, TransactionSummary } from '../types';

export class FinanceManager {
    private transactions: Transaction[] = [];

    // генерация айди
    private generateId(): string {
        return Date.now().toString() + Math.random().toString(36).slice(2);
    }

    add(data: NewTransaction): Transaction {
        const transaction: Transaction = {
            ...data,
            id: this.generateId(),
            status: 'active',
            createdAt: new Date(),
        };
        this.transactions.push(transaction);
        return transaction;
    }

    getAll(): Transaction[] {
        return this.transactions.filter(t => t.status === 'active');
    }

    update(id: string, updates: UpdateTransaction): boolean {
        const transaction = this.transactions.find(t => t.id === id);
        if (!transaction) return false;

        Object.assign(transaction, updates);
        return true;
    }

    getSummaryList(): TransactionSummary[] {
        return this.getAll().map(t => ({
            id: t.id,
            name: t.name,
            amount: t.amount,
            category: t.category,
        }));
    }

    // удалить
    remove(id: string): boolean {
        const transaction = this.transactions.find(t => t.id === id);
        if (!transaction) return false;

        transaction.status = 'deleted';
        return true;
    }

    // посчитать баланс
    getBalance(): number {
        return this.getAll().reduce((sum, t) => sum + t.amount, 0);
    }

    // найти по айди
    findById(id: string): Transaction | undefined {
        return this.transactions.find(t => t.id === id && t.status === 'active');
    }
}