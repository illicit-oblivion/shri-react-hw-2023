export function uniqueArrayByField<T>(arr: T[], field: keyof T) {
    const set = new Set();
    return arr.filter(it => {
        const result = !set.has(it[field]);
        set.add(it[field]);
        return result;
    });
}
