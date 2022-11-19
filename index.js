let spy;

  beforeEach( () => {
    spy = sinon.spy( console, 'log' );
  } );

  afterEach( () => {
    spy.restore();
  } );

function writeCards(name, suprise) {
    for (let i = 0; i < name.length; i++) {
        name[i] = `Thank you, ${name[i]}, for the wonderful ${suprise} gift!`;
    }
    return name;
}


writeCards(["Guadalupe", "Ollie", "Aki"], "surprise")


function countDown(number) {
    
    while (number >= 0) {
        console.log(number--);
        debugger;
    }
}
countDown(4)
