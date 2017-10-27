var customerData = {
  'Joe': {
    visits: 1
  },
  'Carol': {
    visits: 2
  },
  'Howard': {
    visits: 3
  },
  'Carrie': {
    visits: 4
  }
};

var firstName = prompt ('¿Cuál es tu primer nombre')

function greetCustomer(firstName) {
  var greeting = '';

  if (customerData[firstName] === undefined) {
    greeting = 'Welcome! Is this your first time?';
  }
  else if (customerData[firstName] === 1) {
    greeting = 'Welcome back,'+ ' ' + firstName+'!'+ ' ' + "We're glad you liked us the first time!";
  }
  else { greeting = 'Welcome back,' + ' '+ firstName+'!'+ ' ' + "So glad to see you again!"
  }

  return greeting;
}

alert (greetCustomer())
