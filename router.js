const express=require('express')
const router=express.Router()

let users=[
    {name:'Ben',age:'20'},
    {name:'John',age:'30'},
    {name:'Christ',age:'40'},
    {name:'Jane',age:'50'}
    
]

router.get('/api/user',(req,res)=>{
    res.send({
        msg:'get users succeed',
        data:users
    })
})

router.post('/api/user',(req,res)=>{
    const newUser=req.body
    if(newUser){
        users.push(newUser)
        res.send({
            msg:'post user succeed',
            data:users
        })
    }else{
        res.status(400).send('user is required')
    }
})

router.delete('/api/user',(req,res)=>{
    users=[]
    res.send({
        msg:'delete success'
        
    })
})
module.exports=router