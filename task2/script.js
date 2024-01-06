const MSG_CONSOLELOG = 
"Статический метод console.log() выводит сообщение на консоль. Сообщение может представлять собой \
одну строку (с необязательными значениями подстановки) или один или несколько объектов JavaScript.";

const MSG_ALERT = 
"window.alert() инструктирует браузер отобразить диалоговое окно с необязательным сообщением и \
дождаться, пока пользователь закроет диалоговое окно.\n\
При некоторых условиях — например, когда пользователь переключает вкладки — браузер может \
фактически не отображать диалоговое окно или не ждать, пока пользователь закроет диалоговое окно.";

const MSG_PROMT = 
"window.prompt() инструктирует браузер отобразить диалоговое окно с дополнительным сообщением, \
предлагающим пользователю ввести некоторый текст, и подождать, пока пользователь либо не отправит \
текст, либо не отменит диалог.\n\
При некоторых условиях — например, когда пользователь переключает вкладки — браузер может фактически не \
отображать диалоговое окно или не ждать, пока пользователь отправит текст или отменит диалоговое окно.";

const consoleLog = document.querySelector("#consoleLog");
consoleLog.addEventListener('click', () => alert(MSG_CONSOLELOG));
consoleLog.addEventListener('click', ChangeText);

const alertElement = document.querySelector("#alert");
alertElement.addEventListener('click', () => alert(MSG_ALERT));
alertElement.addEventListener('click', ChangeText);

const promptElement = document.querySelector("#prompt");
promptElement.addEventListener('click', () => alert(MSG_PROMT));
promptElement.addEventListener('click', ChangeText);

function ChangeText()
{
    const textlabel = document.querySelector( "#" + this.getAttribute("id") + " + code");
    textlabel.textContent = textlabel.textContent.replace("Пример", "Пример использования команды");
    this.removeEventListener('click', ChangeText);
}
