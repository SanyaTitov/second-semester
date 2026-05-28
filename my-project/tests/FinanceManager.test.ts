import { describe, it, expect, beforeEach } from 'vitest';
import { FinanceManager } from '../src/main-ts-file/FinanceManager';

describe('FinanceManager', () => {
    let manager: FinanceManager;

    // Перед каждым тестом — чистый объект
    beforeEach(() => {
        manager = new FinanceManager();
    });

    it('должен добавлять транзакцию', () => {
        const result = manager.add({
            name: 'Обед',
            amount: -300,
            category: 'food',
        });

        expect(result.name).toBe('Обед');
        expect(result.amount).toBe(-300);
        expect(manager.getAll()).toHaveLength(1);
    });

    it('должен считать баланс', () => {
        manager.add({ name: 'Зарплата', amount: 5000, category: 'other' });
        manager.add({ name: 'Обед', amount: -300, category: 'food' });

        expect(manager.getBalance()).toBe(4700);
    });

    it('должен удалять транзакцию (мягкое удаление)', () => {
        const t = manager.add({ name: 'Такси', amount: -200, category: 'transport' });
        manager.remove(t.id);

        expect(manager.getAll()).toHaveLength(0);
    });
});