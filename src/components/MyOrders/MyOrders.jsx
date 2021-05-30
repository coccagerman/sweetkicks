import { useContext } from "react"
import MyOrdersItem from './MyOrdersItem'
import Context from '../../Context'

function MyOrders ({orders}) {
    
    // Hook used to access context
    const context = useContext(Context)

    const showOrders = () => orders.map(order => <MyOrdersItem order={order}/>)
    
    return (
        <>
            <h1>My orders</h1>
            {showOrders()}
            <button onClick={()=> context.ordersErase()}>Erase orders</button>
        </>
    )
}

export default MyOrders