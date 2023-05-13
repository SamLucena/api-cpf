# api-cpf

Uma api em node que realiza a validação do cpf de usuários.

## Exemplos Requisições

- GET: ``https://api-cpf.up.railway.app/CPF Aqui``
- GET: ``https://api-cpf.up.railway.app/12345678909``

## Resposta da requisão
```json
{
  "is_valid": true,
  "cpf": "12345678909"
}
```
``is_valid`` Pode ser ``false`` se o CPF informado não for valido. 
CI/CD no RailWay: [API-CPF](https://api-cpf.up.railway.app/12345678909)
