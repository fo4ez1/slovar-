let dictionary = {
    apple: "яблоко",
    mouse: "мышь",
    house: "дом",
  };

  let word;
  let translate;

  let ball = 0; // счетчик правильных ответов
  let errors = 0; // счетчик ошибок

  let userLanguage = prompt("Выберете язык");

  if (userLanguage == "Английский") {
    for (word in dictionary) {
      alert(word);
      translate = prompt("Введите перевод, для завершения -'!'");
      if (translate == dictionary[word]) {
        alert("Правильно!");
        ball++;
      } else {
        alert("Неправильно!");
        errors++;
      }
    }
  } else if (userLanguage == "Русский") {
      for (word in dictionary) {
        alert(dictionary[word]);
        translate = prompt("Введите перевод, для завершения -'!'");
        if (translate == word) {
          alert("Правильно!");
          ball++;
        } else {
          alert("Неправильно!");
          errors++;
        }
      }
    }

    alert("Правильно: " + ball + ", неправильно: " + errors); // выводим сообщение и значения счетчиков правильных и неправильных ответов

    for (const word in dictionary) {
      document.write(word + ":" + dictionary[word] + "<br>");
    }