import * as readline from 'readline';
import { FinanceManager } from './main-ts-file/FinanceManager';
import type { Category } from './types';

const app = new FinanceManager();

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

function ask(question: string): Promise<string> {
    return new Promise(resolve => rl.question(question, resolve));
}

async function addTransaction() {
    const name = await ask('Название: ');
    const amountStr = await ask('Сумма (отрицательная = расход): ');
    const amount = parseFloat(amountStr);
    const category = (await ask('Категория (food/transport/entertainment/health/other): ')) as Category;

    const result = app.add({ name, amount, category });
    console.log(`✓ Добавлено: ${result.name} на ${result.amount}`);
}

function showList() {
    const list = app.getSummaryList();
    if (list.length === 0) {
        console.log('Нет транзакций.');
        return;
    }
    list.forEach(t => {
        console.log(` [${t.id.slice(0, 6)}] ${t.name} | ${t.amount} | ${t.category}`);
    });
    console.log(`Баланс: ${app.getBalance()}`);
}

async function main() {
    console.log('=== Finance Tracker ===');

    while (true) {
        console.log('\n1. Добавить транзакцию');
        console.log('2. Показать список');
        console.log('0. Выход');

        const choice = await ask('Выбор: ');

        if (choice === '1') await addTransaction();
        else if (choice === '2') showList();
        else if (choice === '0') { rl.close(); break; }
        else console.log('Неизвестная команда');
    }
}

main();