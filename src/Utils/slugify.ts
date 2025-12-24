
export function slugify(name: string) {
    return name
        .toLowerCase()           // все буквы маленькие
        .replace(/\s+/g, '-')    // пробелы → дефисы
        .replace(/[^\w-]/g, ''); // убираем спецсимволы
}
