const palindromes = function (str) {
    const validChars = 'abcdefghijklmnopqrstuvwxyz0123456789';

    // 2. Переводим в нижний регистр, разбиваем на массив и фильтруем
    const cleanStr = str
        .toLowerCase()
        .split('')
        .filter((char) => validChars.includes(char)) // оставляем только то, что есть в validChars
        .join(''); // собираем обратно в строку;
    const reversedStr = cleanStr.split('').reverse().join('');
    return cleanStr === reversedStr;

};


// Do not edit below this line
module.exports = palindromes;
