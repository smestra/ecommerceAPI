import  express  from "express";

import {
getOrders, getOrdersById, getOrdersByDate, postOrder, deleteOrders, putOrders

} from '../services/orders.service';

const router = express.Router();

router.get('', async(req, res) => {
try {
    const limit = req.query.limit;
    const response = await
    getOrders(limit as string);
    res.status(response.code).json({result: response.result});
} catch (error) { console.log(error);
    const ordersError = error as {code: number, message: string}
    res.status(ordersError.code).json(ordersError.message);
}
});

router.get('/id/:id', async(req, res)=>{
    try {
        const orderId = req.params.id;
        const response = await
        getOrdersById(orderId);
        res.status(response.code).json(response.message);
    } catch (error) {console.log(error);
        const orderError = error as { code: number, message: string};
        res.status(orderError.code).json(orderError.message);
        
    };
});


router.get('/date/:date', async (req,res)=>{
    try {
        const date = req.params.date;
        const response = await
        getOrdersByDate(date);
        res.status(response.code).json(response.message);
    } catch (error) {console.log(error);
        const orderError = error as {code: number, message: string};
        res.status(orderError.code).json(orderError.message);
    };
});


router.post('', async function(req, res){
    try {
        const body = req.body;
        const response = await
        postOrder(body);
        res.status(response.code).json(response.message);
    } catch (error) {
        console.log(error);
        const orderError = error as { code: number, message: string};
        res.status(orderError.code).json(orderError.message);
    }
});


router.put('/:id', async function(req, res){
    try {
        const orderId = req.params.id
        const body = req.body;
        const response = await
        putOrders(orderId, body);
        res.status(response.code).json(response.message);
    } catch (error) {console.log(error);
        const orderError = error as {code: number, message: string};
        res.status(orderError.code).json(orderError.message);
    }
});

router.delete('/:id', async function(req, res){
    try {
       const orderId = req.params.id;
       const response = await
       deleteOrders(orderId);
       res.status(response.code).json(response.message);
    } catch (error) {
        console.log(error);
        const orderError = error as { code: number, message: string};
        res.status(orderError.code).json(orderError.message);
    }
});

export default router;