module.exports = function reverse(n) {
    let i = Math.abs(n);
    let reversed = i.toString().split('').reverse().join('');
    return Number(reversed); 
};


/*
1.  Преобразуем число в положительное
2.  Переворачиваем строку
    split - разбивает объект String на массив
    reverse - переворачивает порядок следования элементов массива.
    join -  объединяет все элементы массива
3.  Возвращаем перевернутое число
*/