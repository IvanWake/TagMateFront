import moment from "moment-with-locales-es6";

moment.locale('ru');

export const formatBirthDay = (birthDay: string) => {
    const birthDate = moment.utc(birthDay);
    const currentDate = moment.utc();
    const yearsOld = currentDate.diff(birthDate, 'years');

    const yearsOldString =
        yearsOld % 100 >= 11 && yearsOld % 100 <= 19
            ? 'лет'
            : yearsOld % 10 === 1
                ? 'год'
                : yearsOld % 10 >= 2 && yearsOld % 10 <= 4
                    ? 'года'
                    : 'лет';

    const formattedBirthDay = `${birthDate.format('D MMM YYYY')} (${yearsOld} ${yearsOldString})`;

    return { formattedBirthDay, yearsOld };
};
