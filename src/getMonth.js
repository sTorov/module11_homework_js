/*
 * Напишите функцию getMonth(n), которая принимает номер месяца и возвращает его название. 
 * Например, getMonth(12) ⇒ 'декабрь'. Используйте if/else.
 */

export function getMonth(monthNumber){
    if(typeof(monthNumber) !== 'number')
        throw new Error("Неверный тип данных! Необходимо передать число!");
    if(!isFinite(monthNumber) || monthNumber < 1 || monthNumber > 12)
        throw new Error("Значение должно быть в диапозоне от 1 до 12!");

    if(monthNumber === 1) { return 'январь' }
    else if(monthNumber === 2) { return 'февраль' }
    else if(monthNumber === 3) { return 'март' }
    else if(monthNumber === 4) { return 'апрель' }
    else if(monthNumber === 5) { return 'май' }
    else if(monthNumber === 6) { return 'июнь' }
    else if(monthNumber === 7) { return 'июль' }
    else if(monthNumber === 8) { return 'август' }
    else if(monthNumber === 9) { return 'сентябрь' }
    else if(monthNumber === 10) { return 'октябрь' }
    else if(monthNumber === 11) { return 'ноябрь' }
    else { return 'декабрь' }
}