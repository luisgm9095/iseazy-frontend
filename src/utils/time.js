export const getFormattedTime = (time) => {
    const minutes = Math.floor(time/60);
    const seconds = `${ Math.floor(time % 60) }`.padStart(2, '0');
    return `${ minutes }:${ seconds }`;
};
