import './admin.css'

// Обработка клика по ссылке, которой нужно подтверждение, т.е. атрибутом data-confirm.
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('a[data-confirm]').forEach(link => {
        link.addEventListener('click', (event) => {

            event.preventDefault();
            event.stopPropagation();

            // Получаем текст предупреждения и метод отправки
            const message = link.getAttribute('data-confirm');
            const method = (link.getAttribute('data-method') || 'GET').toUpperCase(); // Атрибут может отсутствовать
            const url = link.getAttribute('href');

            // Показываем окно подтверждения
            if (confirm(message)) {
                if (method === 'POST') {
                    // Для POST-запроса динамически создаем и отправляем форму
                    const form = document.createElement('form');
                    form.method = 'POST';
                    form.action = url;
                    document.body.appendChild(form);
                    form.submit();
                } else {
                    // Для GET (и по умолчанию) просто переходим по ссылке
                    window.location.href = url;
                }
            }
        });
    });
});
