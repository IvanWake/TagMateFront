import moment from "moment-with-locales-es6";

moment.locale('ru');

export const formatBirthDay = (birthDay: string) => {
    const yearsOld = new Date().getFullYear() - moment.utc(birthDay).format('YYYY');
    const yearsOldString = /\d*1\d$/.test(yearsOld) || /[05-9]$/.test(yearsOld) ? 'лет' : ( /1$/.test(yearsOld) ? 'год' : 'года');

    const formattedBirthDay = `${moment.utc(birthDay).format('D MMM YYYY')} (${yearsOld} ${yearsOldString})`;

    return formattedBirthDay;
}