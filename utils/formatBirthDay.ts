import { format, differenceInYears, parseISO } from 'date-fns';
import { ru } from 'date-fns/locale';

export function formatBirthDay(birthDay: string): { formattedBirthDay: string; yearsOld: number };
export function formatBirthDay(birthDay: Date): { formattedBirthDay: string; yearsOld: number };

export function formatBirthDay(birthDay: string | Date): { formattedBirthDay: string; yearsOld: number } {
    const birthDate = typeof birthDay === 'string' ? parseISO(birthDay) : birthDay;
    const currentDate = new Date();
    const yearsOld = differenceInYears(currentDate, birthDate);

    const yearsOldString =
        yearsOld % 100 >= 11 && yearsOld % 100 <= 19
            ? 'лет'
            : yearsOld % 10 === 1
                ? 'год'
                : yearsOld % 10 >= 2 && yearsOld % 10 <= 4
                    ? 'года'
                    : 'лет';

    const formattedBirthDay = `${format(birthDate, 'd MMM yyyy', { locale: ru })} (${yearsOld} ${yearsOldString})`;

    return { formattedBirthDay, yearsOld };
}
