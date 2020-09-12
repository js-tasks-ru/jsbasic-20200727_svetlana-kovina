/**
 * Найти min/max в произвольной строке
 * @param   {string} str -  входные данные
 * @returns {{min:number, max:number}}  объект
 */
function getMinMax(str) {
    let array = str.split(/[^-/.\d]/g).filter(x => x !== "")
    let result = {};

    result.min = Math.min(...array);
    result.max = Math.max(...array);

    return result;
}
