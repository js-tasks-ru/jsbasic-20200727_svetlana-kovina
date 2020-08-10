var calculator = {
  read (n, m) {
     this.number1 = n;
     this.number2 = m
  },

  sum () {
      return this.number1 + this.number2;
  },

  mul() {
      return this.number1 * this.number2;
  }
}

// НЕ УДАЛЯТЬ СТРОКУ, НУЖНА ДЛЯ ПРОВЕРКИ
window.calculator = calculator; // делает ваш калькулятор доступным глобально
