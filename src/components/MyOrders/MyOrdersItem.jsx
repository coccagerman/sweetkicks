function MyOrdersItem ({order}) {
    return (
        <> 
            <h2>Im an order</h2>
            <button onClick={()=>console.log(order)}>test</button>
        </>
    )
}

export default MyOrdersItem