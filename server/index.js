import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import Customer from './routes/customer.js'
import Cart from './routes/cart.js';
import cors from 'cors'

const app=express()
app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

mongoose.connect('mongodb+srv://parameshmello:9626986540@cluster0.rnhn9n3.mongodb.net/?retryWrites=true&w=majority')
.then(()=>console.log('db connected'))
.catch((e)=>console.log('error'))


app.use('/api/customer',Customer);
app.use('/api/cart',Cart);

app.get('/',(req,res)=>{res.send('server connected')})

const port=process.env.PORT || 3002
app.listen(port,()=>{
    console.log(`server running at ${port}`);
})