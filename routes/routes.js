var {Router} = require('express');
var userModel = require('../src/user/userModel');
var bookModel = require('../src/user/bookModel');
var jwt = require('jsonwebtoken');

const router = Router();

router.post('/book/add', async (req, res) => {
  
    let title = req.body.title
    let writer = req.body.writer
    let genre = req.body.genre

    const record = await bookModel.findOne({title:title})
    if(record) {
        return res.status(400).send({
            messagge:"Book is added!"
        });
    } else {
        const book = new bookModel({
        title: title,
        writer:writer,
        genre:genre,
    })
    const result = await book.save();
    
    res.json({
        user:result
    })   
}
})


router.post('/user/logout', (req,res) => {
    res.cookie("jwt", {maxAge:0})

    res.send({
        message:"success"
    })
})

router.post('/user/create', async (req, res) => {
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


    res.json({
        user:result
    })   
}
});



router.get("/book/list",  (req, res) => { 
      bookModel.find().then(rec => {
         if(rec) {
            res.send(rec);
         } else { 
            res.send([]);
         }
      })
});

router.get("/book/edit", async (req, res) => { 
    const book = await bookModel.find(title);
    bookModel.findOne({_id}).then(rec => {
       if(rec) {
          res.send(rec);
       } else { 
          res.send([]);
       }
    })
});

router.get("/user/username", async (req, res) => { 
    try {
        const cookie = req.cookies['jwt']

        const claims = jwt.verify(cookie, "secret")
        if(!claims){
            return res.status(401).send({
                message:"unauthenticated"
            })
        }

        const user = await userModel.findOne({_id:claims._id})
        const {password, ...data} = await user.toJSON();
        res.send(data);
    } catch(err){
return res.status(401).send({
    message:"unauthenticated"
})
    }
});

router.post("/user/login", async(req, res) => {
    const user = await userModel.findOne({email:req.body.email})
    if(!user) {
        return res.status(404).send({
            message:"User not Found"
        })
    }
    if(req.body.password != user.password)
    {
        return res.status(400).send({
            message:"Password is incorrect"
        })
    }

    const token = jwt.sign({_id:user._id}, "secret")

    res.cookie("jwt", token, {
        httpOnly:true,
        maxAge:24*60*60*1000 
    })

    res.send({
        message:"success"
    })
})
module.exports = router