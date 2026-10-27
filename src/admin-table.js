// Функция для обработки фильтра в таблице. У input и select должен быть атрибут data="list-filter"
function applyFilters() {

    // Получаем текущий URL и его GET-параметры
    const url = new URL(window.location.href);
    const params = url.searchParams;

    // Находим все нужные input и select
    const filters = document.querySelectorAll('input[data="list-filter"], select[data="list-filter"]');

    let isAllValid = true;
    filters.forEach(element => {
        if (!element.checkValidity()) {
            isAllValid = false;
            // element.reportValidity();
        }
    });
    if (!isAllValid) {
        return;
    }

    filters.forEach(element => {
        const name = element.name;
        const value = element.value.trim();

        if (name) {
            if (value !== "") {
                // Добавляем или обновляем параметр
                params.set(name, value);
            } else {
                // Если значение пустое, удаляем параметр из URL
                params.delete(name);
            }
        }
    });

    // Переход по новому URL
    window.location.href = url.toString();
}

// Добавляем события на input и select с атрибутом data="list-filter".
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('input[data="list-filter"], select[data="list-filter"]').forEach(element => {

        // 1. Событие change для select и input
        element.addEventListener('change', applyFilters);

        // 2. Нажатие Enter для input
        if (element.tagName.toLowerCase() === 'input') {
            element.addEventListener('keydown', (event) => {
                if (event.key === 'Enter') {
                    event.preventDefault(); // Отменяем стандартное поведение
                    applyFilters();
                }
            });
        }
    });
});
