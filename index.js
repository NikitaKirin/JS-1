const phoneList = [
    {
        name: "Виталий",
        birthdate: "01.01.2001",
    },
    {
        name: "Никита",
        birthdate: "31.12.2001",
    },
    {
        name: "Василиса",
        birthdate: "15.10.2001",
    },
    {
        name: "Александра",
        birthdate: "21.05.2001",
    },
    {
        name: "Егор",
        birthdate: "06.08.1976",
    },
    {
        name: "Роман",
        birthdate: "14.04.2000",
    },
    {
        name: "Василий",
        birthdate: "27.02.1980",
    },
];

const months = new Map([
        ['00', 'январь'],
        ['01', 'февраль'],
        ['02', 'март'],
        ['03', 'апрель'],
        ['04', 'май'],
        ['05', 'июнь'],
        ['06', 'июль'],
        ['07', 'август'],
        ['08', 'сентябрь'],
        ['09', 'октябрь'],
        ['10', 'ноябрь'],
        ['11', 'декабрь']
    ]
);
/**
 * @typedef Person
 * @type {object}
 * @property {string} name - имя
 * @property {string} birthdate - дата рождения
 */

/**
 * @typedef Gift
 * @type {object}
 * @property {string} title - название подарка
 * @property {number} price - стоимость подарка
 */

/**
 * @param {string} date - дата отсчета
 * @param {Array<Person>} phoneList - список друзей из телефонной книги
 * @returns {Array<Person>} массив друзей, у которых дни рождения после даты отсчета
 */
function getNextBirthdays(date, phoneList) {
    let resultArray = [];
    date = getCorrectDate(date);
    if (Array.isArray(phoneList) && typeof date == 'object') {
        for (let i = 0; i < phoneList.length; i++) {
            phoneList[i].birthdate = getCorrectDate(phoneList[i].birthdate);
            if (phoneList[i].birthdate === false)
                return [];
            if (phoneList[i].birthdate.getFullYear() <= date.getFullYear()
                && +phoneList[i].birthdate.getMonth() - +date.getMonth() > 0) {
                resultArray.push(phoneList[i]);
            }
            if (phoneList[i].birthdate.getFullYear() <= date.getFullYear()
                && +phoneList[i].birthdate.getMonth() - +date.getMonth() === 0
                && +phoneList[i].birthdate.getDate() - +date.getDate() >= 0) {
                resultArray.push(phoneList[i]);
            }
        }
        resultArray.sort(function (a, b) {
            if (a.birthdate.getMonth() > b.birthdate.getMonth())
                return 1;
            else if (a.birthdate.getMonth() === b.birthdate.getMonth())
                return 0;
            else
                return -1;
        })

        return resultArray;
    }
    return [];
}
;

/**
 * @param {Array<Person>} phoneList - список друзей из телефонной книги
 * @returns {Array<{
 *    month: string,
 *    friends: Array<Person>,
 *  }>}
 */
function getMonthsList(phoneList) {
}
;

/**
 * @param {Array<{
 *    name: string,
 *    birthdate: string,
 *    wishList: Array<Gift>
 *  }>} phoneList - список друзей из телефонной книги
 * @returns {{
 *    friendsList: Array<{
 *      name: string,
 *      birthdate: string,
 *      present: Gift
 *    }>,
 *    totalPrice: number
 *  }}
 */
function getMinimumPresentsPrice(phoneList) {

};

/**
 * Get the Date object from correct string
 * Преобразовать дату в корректный формат
 */
function getCorrectDate(date) {
    if (typeof date != "string")
        return false;
    else {
        date = date.split('.');
        if (date[0].length === 2 && date[1].length === 2 && date[2].length === 4) {
            return new Date(+date[2], +date[1]-1, +date[0]);
        } else return false;
    }
}

console.log(getNextBirthdays('01.01.2001', phoneList));
// module.exports = {
//     getNextBirthdays,
//     getMonthsList,
//     getMinimumPresentsPrice
// };