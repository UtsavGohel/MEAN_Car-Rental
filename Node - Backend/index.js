const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const app = express()
require('./conn')
const db = require('./Allmodule')
const { query } = require('express')
app.use(bodyParser.json())
app.use(cors())
app.use(express.urlencoded({ extended: true }));

app.post('/brand',async(req,res)=>{
 const data = await db.Brand.create(req.body);
 await data.save()
 res.json(data)
})
app.get('/brand',async(req,res)=>{
  const data = await db.Brand.find()
  res.json(data)
})

app.post('/type',async(req,res)=>{
  const data = await db.Type.create(req.body);
  await data.save()
  res.json(data)
})
app.get('/type',async(req,res)=>{
  const data = await db.Type.find()
  res.json(data)
})


app.post('/car',async(req,res)=>{
  const data = await db.Car.create(req.body);
  await data.save()
  res.json(data)
})
app.get('/car',async(req,res)=>{
  db.Car.find().populate('brand').populate('type').then(function(dbcar){
    res.json(dbcar)
  }).catch(function(err){
    res.json(err)
  })
})

app.post('/rental',async(req,res)=>{
  const data = await db.Rental.create(req.body);
  await data.save()
  res.json(data)
})
app.get('/rental',async(req,res)=>{
  db.Rental.find().populate('carname').then(function(dbrental){
    res.json(dbrental)
  }).catch(function(err){
    res.json(err)
  })
})

app.post('/user',async(req,res)=>{
  const data = await db.User.create(req.body);
  await data.save()
  res.json(data)
})
app.get('/user',async(req,res)=>{
  db.User.find().populate('carRentType').then(function(dbuser){
    res.json(dbuser)
  }).catch(function(err){
    res.json(err)
  })
})
app.delete('/car/:id',async(req,res)=>{
  const data = await db.Car.findByIdAndDelete(req.params.id);
  // await data.save()  
  res.json(data)
})

app.delete('/car',async(req,res)=>{
  const data = await db.Car.deleteMany(req.params.id);
  // await data.save()  
  res.json(data)
})
app.delete('/rental',async(req,res)=>{
  const data = await db.Rental.deleteMany(req.params.id);
  // await data.save()  
  res.json(data)
})
app.delete('/rental/:id',async(req,res)=>{
  const data = await db.Rental.findByIdAndDelete(req.params.id);
  // await data.save()  
  res.json(data)
})
app.listen(3000, () => {
  console.log('Server running on port 3000')
})