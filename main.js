(function() {
// создаём и возвращаем  заголовок приложения
    let appTitle = document.createElement('h2');
    appTitle.innerHTML = title;
    return appTitle;
}

//создаём и возвращаем форму для дела
    function createTodoItemForm() {
    let form = document.createElement('form');
    let input = document.createElement('input');
    let buttonWrapper = document.createElement('div');
    let button = document.createElement('button');

    form.classList.add('input-group', 'mb-3');
    input.classList.add('form-control');
    input.placeholder = 'Введите название нового дела';
    buttonWrapper.classList.add('btn', 'btn-primari');
    button.textContent = 'Добавить дело';

    buttonWrapper.append(button);
    form.append(input);
    form.append(buttonWrapper);

    return {
        form,
        input,
        button,
    };  
}

//создаём и возвращаем список элементов
function createTodoList() {
    let list = document.createElement('ul');
    list.classList.add('list-group');
    return list;
}

document.addEventListener('DOMContentLoaded', function() {
    
}
})();
