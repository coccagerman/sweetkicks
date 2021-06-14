import { useContext } from "react"
import MyOrdersItem from './MyOrdersItem'
import Context from '../../Context'

function MyOrders ({orders}) {
    
    // Hook used to access context
    const context = useContext(Context)

    return (
        <>
            <h1>My orders</h1>
            {orders.map((order, i) => <MyOrdersItem key={i} order={order}/>)}
            <button onClick={()=> context.ordersErase()}>Erase orders</button>
        </>
    )
}

export default MyOrders