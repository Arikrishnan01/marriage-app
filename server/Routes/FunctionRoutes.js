import express from 'express';
import { 
    createFunction, 
    deleteFunctionById, 
    getAllFunction, 
    getFunctionById, 
    updateFunctionById
} from '../Controllers/FunctionController.js';
import { verifyToken } from '../Middleware/AuthJWT.js';

const router = express.Router();
/** EXPORT THE DUB ROUTERS */
router.post('/createFunction',[ verifyToken ], createFunction);
router.get('/getAllFunction',[ verifyToken ], getAllFunction);
router.get('/:id', getFunctionById);
router.put('/:id', updateFunctionById);
router.delete('/:id', deleteFunctionById);

const functionRouter = router;
export default functionRouter;