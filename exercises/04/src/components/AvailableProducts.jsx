function AvailableProducts(props) {

    return (
      <ul>
        {props.products.map((p, index) => (
          <li key={p.name}>
            <p>{p.name} - {p.price}€</p>
            <button onClick={() => props.handlerAdd(p)} data-testid={`add-${index}`}>Add</button>
          </li>
        ))}
      </ul>
    )
  }

export default AvailableProducts