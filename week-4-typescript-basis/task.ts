// Часть A (Дженерики): Создайте универсальную функцию toArray<T>(...args: T[]): T[], 
// которая принимает произвольное число аргументов одного типа и возвращает массив из них.

function toArray<T>(...args: T[]): T[]{
    return args;
}

const num = toArray(1, 5, 17, 18, 27, 52, 67);
const str = toArray('I am', 'doing', 'homework')
const bls = toArray(true, false)

console.log(num)
console.log(str)
console.log(bls)

// Часть B (Перегрузка функций): Объявите перегруженную функцию parseInput(input: string): number; и parseInput(input: string, radix: number): number;.
// Реализация должна использовать parseInt. Покажите её вызов в двух вариантах.

function parseInput(input: string): number;
function parseInput(input: string, radix: number): number;

function parseInput(input: string, radix?: number): number { 
     return parseInt(input, radix);
}




// Часть C (Утилитные типы Omit и Record): Дан интерфейс Book. Создайте:

// Тип BookCatalogItem на основе Book, но без поля inStockCount.
// Тип LibraryCatalog, который представляет собой объект, где ключом является isbn книги (строка), а значением — объект типа BookCatalogItem.

interface Book {
  isbn: string;
  title: string;
  author: string;
  pages: number;
  inStockCount: number;
}

type BookCatalogItem = Omit<Book, 'inStockCount'>;

type LibraryCatalog = Record<Book["isbn"], BookCatalogItem>