# Ejercicio con Pseudocòdigo, diagrama de flujo y GitHub

## greetCustomer :memo:

_Escribe una función llamada greetCustomer.

Dando un nombre, greetCustomer devuelve un saludo basado en cuántas veces ese cliente ha visitado el restaurante. Consulte el objeto customerData.

El saludo debe ser diferente, dependiendo del nombre de la reservación._ :book:

- [ ] Cliente desconocido (el nombre no está presente en los datos de cliente) :question:
- [ ] Cliente que ha visitado sólo una vez (el valor de las visitas es 1) :star:
- [ ] Repetir cliente: (valor de' visitas' es mayor que 1) :two_hearts:

1. Recibir parámetro firstName
2. Si **(firstName == unknow)** entonces
 2.1 regresar ’Welcome! Is this your first time?
3. Si **(firstName.visits == 1)** entonces
 3.1 regresar ’Si  ‘Welcome back, + firstName + We’re glad you liked us the first time!’
4. Si **(firstName.visits < 1)** entonces
 4.1 regresar ’Si  ‘Welcome back, + firstName! So glad to see you again’
5. firstName
