import express from "express";

import {
getSeller,
getSellerByID,
getSellerByName,
postSeller,
putSeller,
deleteSeller

} from '../services/sellers.service';

const router = express.Router();

router.get('', async(req,res)=> {
    try {
        const limit = req.query.limit;
        const response = await
        getSeller(limit as string);
        res.status(response.code).json({result: response.result});
    } catch (error) {console.log(error);
        const sellerError = error as {code: number, message: string}
        res.status(sellerError.code).json(sellerError.message);
    }
});

router.get('/id/:id', async(req, res)=> {
    try {
       const sellerId = req.params.id;
       const response = await
       getSellerByID(sellerId);
       res.status(response.code).json(response.message);
    } catch (error) {
        console.log(error);
        const sellerError = error as {code: number, message: string};
        res.status(sellerError.code).json(sellerError.message);
    }
});

router.get('/name/:name', async (req, res)=>{
    try {
      const sellerName = req.params.name;
      const response = await
      getSellerByName(sellerName);
      res.status(response.code).json(response.message);
    } catch (error) {console.log(error);
        const sellerError = error as {code: number, message: string};
        res.status(sellerError.code).json(sellerError.message);
    }
});

router.post('', async function(req, res){
    try {
        const body = req.body;
        const response = await
        postSeller(body);
        res.status(response.code).json(response.message);
    } catch (error) {console.log(error);
        const sellerError = error as { code: number, message: string};
        res.status(sellerError.code).json(sellerError.message);
    }
});

router.put('/:id', async function(req, res){ try {
    const sellerId = req.params.id
    const body = req.body;
    const response = await
    putSeller(sellerId, body);
    res.status(response.code).json(response.message)
} catch (error) {console.log(error);
    const sellerError = error as { code: number, message: string};
    res.status(sellerError.code).json(sellerError.message);
}
 });

 router.delete('/:id', async function (req, res){
    try {
        const sellerId = req.params.id;
        const response = await
        deleteSeller(sellerId);
        res.status(response.code).json(response.message);
    } catch (error) {console.log(error);
        const sellerError = error as { code: number, message: string};
        res.status(sellerError.code).json(sellerError.message);
     }
 });

export default router;