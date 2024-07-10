    let string = "";
    let button = document.querySelectorAll('.button');
    let input = document.querySelector('.input');

    Array.from(button).forEach((button) => {
      button.addEventListener('click', (e) => {
        let value = e.target.innerHTML;
  
        if (value === '=') {
          try {
            string = eval(string.replace(/x/g, '*').replace(/÷/g, '/')).toString();
          } catch (error) {
            string = "Error";
          }
          input.innerHTML = value;
          input.innerHTML = string;
        } else if (value === 'AC') {
          string = "";
          input.innerHTML = "0";
        } else if (value === '+/-') {
          if (string) {
            string = (parseFloat(string) * -1).toString();
            input.innerHTML = value;
            input.innerHTML = string;
          }
        } else if (value === '%') {
          if (string) {
            string = (parseFloat(string) / 100).toString();
            input.innerHTML = value;
            input.innerHTML = string;
          }
        } else {
          string += value;
          if (!['+', '-', 'x', '÷'].includes(value)) {
            input.innerHTML = value;
          }
        }
      });
    });
  