### HTML:
The HTML defines the structure of the calculator. It includes a heading, a display area (`<h1 class="input">0</h1>`), and buttons arranged in rows for the calculator's functionality. The buttons are given classes to style them and identify their position.

### CSS:
The CSS styles the calculator, ensuring a modern and responsive design. It uses Google Fonts for the text and styles the buttons, input display, and container. The `button` class sets the appearance of the buttons, including size, color, and border. Special classes (`row1`, `coloum1`, etc.) adjust the appearance and placement of specific buttons. The `.input` class styles the display area, aligning text to the right and setting color and padding.

### JavaScript:
The JavaScript adds interactivity to the calculator:

1. **Variables**: `string` holds the current input, `button` selects all buttons, and `input` selects the display element.
2. **Event Listeners**: Each button gets a click event listener.
3. **Click Handling**:
    - **`=` button**: Evaluates the arithmetic expression, replacing `x` with `*` and `÷` with `/`, then displays the result. Errors in evaluation display "Error".
    - **`AC` button**: Clears the input.
    - **`+/-` button**: Toggles the sign of the current input.
    - **`%` button**: Converts the current number to a percentage.
    - **Other buttons**: Append the clicked value to `string` and update the display if the value is a number or decimal point.

### Summary:
The calculator displays only numbers and the final result, not the arithmetic operators, as per the specified requirement. The CSS ensures a clean, user-friendly interface, and the JavaScript manages the calculator's logic, handling button clicks and updating the display accordingly. This combination provides a functional and visually appealing calculator.
