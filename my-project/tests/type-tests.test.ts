import { describe, it, expectTypeOf } from 'vitest';
import { FinanceManager } from '../src/main-ts-file/FinanceManager';
import { ExtractArrayType } from '../src/type-utils';
import { Transaction } from '../src/types';

describe('Тесты типов', () => {

    it('getBalance должен возвращать number', () => {
        const manager = new FinanceManager();
        expectTypeOf(manager.getBalance).returns.toBeNumber();
    });

    it('getAll должен возвращать массив Transaction', () => {
        const manager = new FinanceManager();
        expectTypeOf(manager.getAll).returns.toEqualTypeOf<Transaction[]>();
    });

    it('ExtractArrayType вытаскивает тип элемента массива', () => {
        type Result = ExtractArrayType<string[]>;
        expectTypeOf<Result>().toBeString();
    });

    it('ExtractArrayType возвращает never для не-массива', () => {
        type Result = ExtractArrayType<string>;
        expectTypeOf<Result>().toBeNever();
    });

});