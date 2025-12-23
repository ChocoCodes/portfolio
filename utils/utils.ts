export const isInDateRange = (start: string, end: string): boolean => {
    const now = new Date().getTime();
    return (
        now >= new Date(start).getTime() &&
        now <= new Date(end).getTime()
    )
}