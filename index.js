const express=require("express")
const app=express()
const cors=require("cors")
const bodyParser=require("body-parser")
const port=3000;

app.use(bodyParser.urlencoded({              
	extended:true
}))

app.use(bodyParser.json())

app.use(cors())

app.get("/",(req,res)=>{
	res.send("server")
})

app.post("/newData",(req,res)=>{
	//const name=req.body.name,age=req.body.password
	const {name,password,carName,gender}=req.body;
	console.log(name,password,carName,gender)
	res.send("added")
})


app.listen(port,()=>console.log("it is working on port 3000"))