const express = require('express');
const app = express();

app.use(express.json());
app.listen(3000);

app.route('/:cpf').get((req, res) => {
  const cpf = req.params.cpf;
  res.send(validate(cpf));
});

const validate = (cpf) => {
  const cpfNumbers = cpf.split("");
  const digits = [];
  let sum = 0;
  let countDown = 10;
  cpfNumbers.forEach(digit => {
    digits.push(Number(digit));
  });
  for(let i = 0; i < digits.length - 2; i++){
    sum += digits[i] * countDown;
    countDown--;
  }
  let result = Math.floor((sum * 10) % digits.length);
  if(result == 10 || result == 11) result = 0;
  if(result != digits[9]) {
    return {
      is_valid: false,
      cpf: cpf
    };
  }else{
    sum = 0;
    countDown = 11;
    for(let i = 0; i < digits.length - 1; i++){
      sum += digits[i] * countDown;
      countDown--;
    }  
    let result = Math.floor((sum * 10) % digits.length);
    if(result == 10 || result == 11) result = 0;
    if(result != digits[10]){
      return {
        is_valid: false,
        cpf: cpf
      };
    }else{
      return {
        is_valid: true,
        cpf: cpf
      };
    }
  }
}

