const promptLink = document.querySelector('#promptLink');

promptLink.addEventListener('click', function (event)
    {
        this.textContent = prompt("Введите текст для замены");
        event.preventDefault();
    }
);