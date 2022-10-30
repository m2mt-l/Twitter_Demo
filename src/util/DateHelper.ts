import { monthStringArray } from "../data/monthStringArray";

export function currentDateForDetail(): string {
    const dt = new Date();
    const year = dt.getFullYear();
    const month = monthStringArray[dt.getMonth()];
    const date = dt.getDate();
    const hour24 = dt.getHours();
    const minute = dt.getMinutes();
    const hour12 = hour24 % 12;
    const amOrPm = hour24 < 12 ? "AM" : "PM";

    const dataString = `${hour12}:${minute} ${amOrPm} - ${month} ${date}, ${year}`;

    return dataString;
}

export function currentDateForSimple(): string {
    const dt = new Date();
    const month = monthStringArray[dt.getMonth()];
    const date = dt.getDate();

    const dataString = `${month} ${date}`;

    return dataString;
}
