function insert(char) {
    document.getElementById('result').value += char;
  }
  
  function calculate() {
    document.getElementById('result').value = eval(document.getElementById('result').value);
  }
  
  function clearResult() {
    document.getElementById('result').value = '';
  }
  