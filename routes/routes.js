var {Router} = require('express');
var userModel = require('../src/user/userModel');
var userController = require('../src/user/userController');
var jwt = require('jsonwebtoken');

const router = Router();

router.post('/logout', (req,res) => {
    res.cookie("jwt", {maxAge:0})

    res.send({
        message:"success"
    })
})

router.post('/create', async (req, res) => {
    let email = req.body.email
    let password = req.body.password
    let lastname = req.body.lastname
    let firstname = req.body.firstname
    const record = await userModel.findOne({email:email})
    if(record) {
        return res.status(400).send({
            messagge:"Email is already registered!"
        });
    } else {
        const user = new userModel({
        firstname: firstname,
        email:email,
        password:password,
        lastname:lastname
    })
    const result = await user.save();
    // JWT Token 
    const {_id} = await result.toJSON();
    const token = jwt.sign({_id:_id}, "secret")

    res.cookie("jwt", token, {
        httpOnly:true,
        maxage:2*30*30*1000
    })
    // res.status({
    //     message:"success"
    // })

    res.json({
        user:result
    })   
}
})

// router.route('/user/login').post(userController.logoutUserControllerFn);
// router.route('/user/logout').post(userController.loginUserControllerFn);
// router.route('/user/create').post(userController.createUserControllerFn);
// router.route('/book/getAll').get(userController.getBookConntrollerfn);
// router.route('/book/create').post(userController.createBookControllerFn);
// router.route('/book/update/:id').patch(userController.updateBookController);
// router.route('/book/delete/:id').delete(userController.deleteBookController);

//router.route('/user').get(userController.userControllerFn);





router.get("/username", async (req, res) => { 
    try {
        const cookie = req.cookies['jwt']

        const claims = jwt.verify(cookie, "secret")
        if(!claims){
            return res.status(401).send({
                message:"unauthenticated"
            })
        }

        const user = await userModel.findOne({_id:claims._id})
        const {password, ...data} =await user.toJSON();
        res.send(data);
    } catch(err){
return res.status(401).send({
    message:"unauthenticated"
})
    }
});

router.post("/login", async(req, res) => {
    const user = await userModel.findOne({email:req.body.email})
    if(!user) {
        return res.status(404).send({
            message:"User not Found"
        })
    }
    if(!(req.body.password === user.password))
    {
        return res.status(400).send({
            message:"Password is incorrect"
        })
    }

    const token = jwt.sign({_id:user._id}, "secret key")

    res.cookie("jwt", token, {
        httpOnly:true,
        maxAge:24*60860*1000 
    })

    res.send({
        message:"success"
    })
})
module.exports = router