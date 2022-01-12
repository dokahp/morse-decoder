const MORSE_TABLE = {
    ".-": "a",
    "-...": "b",
    "-.-.": "c",
    "-..": "d",
    ".": "e",
    "..-.": "f",
    "--.": "g",
    "....": "h",
    "..": "i",
    ".---": "j",
    "-.-": "k",
    ".-..": "l",
    "--": "m",
    "-.": "n",
    "---": "o",
    ".--.": "p",
    "--.-": "q",
    ".-.": "r",
    "...": "s",
    "-": "t",
    "..-": "u",
    "...-": "v",
    ".--": "w",
    "-..-": "x",
    "-.--": "y",
    "--..": "z",
    ".----": "1",
    "..---": "2",
    "...--": "3",
    "....-": "4",
    ".....": "5",
    "-....": "6",
    "--...": "7",
    "---..": "8",
    "----.": "9",
    "-----": "0",
    '**********': ' '
  };
  
  function decode(expr) {
    let arr = [expr.slice(0, 10)];
    for (let i = 1; i < expr.length / 10; i++) {
      arr = [...arr, expr.slice(i * 10, i * 10 + 10)];
    }
    arr = arr.map((el) => {
      for (let i = 0; i < 5; i++) {
        el = el.replace("10", ".");
        el = el.replace("11", "-");
      }
      return MORSE_TABLE[el.slice(el.lastIndexOf('0') + 1)]
    });
    return arr.join('');
  }
  
  module.exports = {
    decode,
  };
  