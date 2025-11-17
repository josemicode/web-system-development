function Cart(props) {

    if (props.items.length) {
      return (
        <>
          <h3 data-testid="cart-total" >Total: {props.items.reduce(((result, currItem) => currItem.price + result), 0)}</h3>
          <ol>
            {props.items.map((i, index) => (
              <li key={index} data-testid={`cart-item-${index}`} >
                <p>{i.name}</p>
                <button onClick={() => props.handlerRemove(index)} data-testid={`remove-${index}`} >Drop</button>
              </li>
            ))}
          </ol>
        </>
      )
    }
  }

export default Cart