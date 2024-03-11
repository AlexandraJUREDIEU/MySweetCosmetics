function Cart() {
    const ralPrice = 4.6
    const mascaraPrice = 7
    const faoPrice = 6.5

    return (<div>
        <h2>Panier</h2>
        <ul>
        <li>Rouge Divin : {ralPrice}€</li>
         <li>Mascara : {mascaraPrice}€</li>
         <li>Fard à paupière : {faoPrice}€</li>
        </ul>
          Total : {ralPrice + mascaraPrice + faoPrice }€
          </div>)
    }

    export default Cart