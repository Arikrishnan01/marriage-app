import FunctionModel from "../Models/FunctionModel.js";

/**
 * REQ: INPUT
 * RES: OUTPUT
 * METHOD: POST
 * PATH: /createFunction
 */
export const createFunction = async(req, res) => {
    try{
        const {
            name,
            city,
            amount,
            gold,
            category
        } = req.body;
        const userId = req.userId;
    
        /** CREATE NEW FUNCTION DATA */
        const  newFunction = new FunctionModel({
            userId,
            name,
            city,
            amount,
            gold,
            category
        })
        await newFunction.save()
        return res.status(200).json({
            message: "New function data created successfuly!!!",
            data: newFunction
        });
    }
    catch(error){
        return res.status(500).json({
            message: "Internal server Error!!!",
            error: error.message
        });
    }
};

/**
 * REQ: INPUT
 * RES: OUTPUT
 * METHOD: GET
 * PATH: /getAllFunction
 */
export const getAllFunction = async(req, res) => {
    try{
        const userId  = req.userId;
        /** CHECH USER   */
        if(!userId){
            return res.status(400).json({
                message: "Unauthrized !!!"
            });
        }

        const allData = await FunctionModel.find({ userId });
        if(allData){
            return res.status(200).json({
                message: "Atlas, Function data fetched successfully!!!!",
                data: allData
            });
        }
        else{
            return res.status(404).json({
                message: "Atlas, couldn't fetch the function data",
            });
        }
    }
    catch(error){
        return res.status(500).json({
            message: "Internal server error!!",
            error: error.message
        });
    }
};

/**
 * REQ: INPUT
 * RES: OUTPUT
 * METHOD: GET
 * PATH: /getAllFunction
 */
export const getFunctionById = async (req, res) => {
    try{
        const { id } = req.params;
        const dataById = await FunctionModel.findById(id);
        if(dataById){
            return res.status(200).json({
                message: "atlas, data fetched successfully!!!",
                data: dataById
            });
        }
        else{
            return res.status(404).json({
                message: "Atlas!, couldn't function data "
            });
        }
    }
    catch(error){
        return res.status(500).json({
            message: "Internal server Error!!",
            error: error.message
        });
    }
};

/**
 * REQ: INPUT
 * RES: OUTPUT
 * METHOD: PUT
 * PATH: /updateFunctionById
 */
export const updateFunctionById = async(req, res) => {
    try{
        const { id } = req.params;
        const updateById = await FunctionModel.findByIdAndUpdate(id, req.body, { new: true});
        if(updateById){
            return res.status(200).json({
                message: "Atlas, Data updated successfully!!!",
                data: updateById
            });
        }
        else{
            return res.status(404).json({
                message: "Atlas, couldn't fetch the data!!!!",
            });
        }

    }
    catch(error){
        return res.status(500).json({
            message: "Internal server error!!",
            error: error.message
        });
    }
};

/**
 * REQ: INPUT
 * RES: OUTPUT
 * METHOD: DELETE
 * PATH: /deleteFunctionById
 */
export const deleteFunctionById  = async(req, res) => {
    try{
        const { id } = req.params;
        const deleteById = await FunctionModel.findByIdAndDelete(id); 
        if(deleteById){
            return res.status(200).json({
                message: "Atlas, data deleted successfully!!",
                data: deleteById
            });
        }
    }
    catch(error){
        return res.status(500).json({
            message: "Internal server Error!!",
            error: error.message
        });
    }
};

/**
 * REQ: INPUT
 * RES: OUTPUT
 * METHOD: GET
 * PATH: /getAllFunction
 */
// export const getallFunctionByUserId = async (req, res) => {
//     try{
//         const { userId } = req.body;
//         const dataById = await FunctionModel.findById({ userId });
//         if(dataById){
//             return res.status(200).json({
//                 message: "atlas, data fetched successfully!!!",
//                 data: dataById
//             });
//         }
//         else{
//             return res.status(404).json({
//                 message: "Atlas!, couldn't function data "
//             });
//         }
//     }
//     catch(error){
//         return res.status(500).json({
//             message: "Internal server Error!!",
//             error: error.message
//         });
//     }
// };

