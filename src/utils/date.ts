export const formatDateTime = (date: Date | string | number) => {
    const d = new Date(date);
    if (isNaN(d.getTime())) return "";

    const options: Intl.DateTimeFormatOptions = {
        timeZone: 'UTC',
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        hour12: false
    };

    const formatter = new Intl.DateTimeFormat('ko-KR', options);
    const parts = formatter.formatToParts(d);

    const getPart = (type: string) => parts.find(p => p.type === type)?.value || "";

    const year = getPart('year');
    const month = getPart('month');
    const day = getPart('day');
    const hours = getPart('hour');
    const minutes = getPart('minute');

    return `${year}.${month}.${day} ${hours}:${minutes}`;
};
