import axios from "axios";
import { useEffect } from "react";

function Orders(){
    useEffect(async()=>{
        let order = localStorage.getItem("orders");
        let orders = order.map((item)=>({
            count: item.count,
            item_id: item.item_id,
            userd:  item.userid,
            image:  item.product,
            price: item.price,
            size: item.size


        

    }))
     let result = await axios.post("http://localhost:5000/orders", orders);

    }, [])
    return (
        <>

            
        </>
    )
}
export default Orders;