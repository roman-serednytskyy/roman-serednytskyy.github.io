var body = document.querySelector('body');

var app = {
  createElement: function(params) {
    var element = document.createElement(params.tagName);

    if (params.inputType){
      element.setAttribute('type', params.inputType);
    }
    if (params.className) {
     element.className = params.className;
    }
    if (params.value) {
    element.setAttribute('value', params.value);
    }
    if (params.content) {
     element.innerHTML = params.content;
    }
    if (params.parentElement){
      params.parentElement.appendChild(element);
    }

    return element;
  },
  generateQuestions: function (questionsAmount, answersAmount) {

    for (var i = 0; i < questionsAmount; i++) {

    this.createElement({
      tagName: 'h3',
      content: (i + 1) + ". " + 'Вопрос №' + (i + 1),
      parentElement: form
    });

     for (var j = 0; j < answersAmount; j++) {
      var label = this.createElement({
         tagName: 'label',
         className: 'text-muted',
         content: 'Вариант ответа №' + (j + 1),
         parentElement: form
      });

      var checkbox = this.createElement({
        tagName: 'input',
        className: 'check',
        inputType: 'checkbox',
        parentElement: form
     });

     label.insertAdjacentElement('afterBegin', checkbox)

     }
    };
  }
}

app.createElement({
  tagName: 'h2',
  className: 'text-center text-muted',
  content: 'Тест по программированию',
  parentElement: body
});

var form = app.createElement({
  tagName: 'form',
  className: 'container',
  parentElement: body
});

app.generateQuestions(3, 3);

app.createElement({
  tagName: 'input',
  inputType: 'submit',
  className: 'btn btn-primary btn-lg center-block bg-primary',
  value: 'Проверить мои результаты',
  parentElement: form
});
