import express from 'express';
import dotenv from 'dotenv';
import colors from 'colors';
import cors from 'cors';
import { connectDB } from './Config/db.js';
import bodyParser from 'body-parser';
import userRouter from './Routes/UserRoutes.js';
import functionRouter from './Routes/FunctionRoutes.js';

const app = express();
/** CNFIGURE THE DOTENV */
dotenv.config();
const PORT = process.env.PORT;

/**IMPORT THE DB CONNECTION */
connectDB();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

/**CORS */
app.use(cors());


/**API HOME END POINT */
app.get('/',(req, res) => {
    return res.status(200).json({
        message: "API RUNNING SUCCESSFULLY!!!"
    });
});

/** IMPORT THE SUB ROUTERS HERE */
app.use('/user', userRouter);
app.use('/function', functionRouter);


/** SERVER LISTEN WITH PORT NUMBER */
app.listen(PORT, () => {
    console.log(`SERVER STARTED : ${PORT}`.bold.yellow);
});