const express = require("express");
const { json } = require("express");
const flights = require("./controllers/flightController");
const models = require("./models/Flight");
const routes = require("./routes/flightRoute");
const flight = require("./flights.json")

const app = express();

app.use(json());

app.use("/", routes);
app.use(express.json())


app.get("/", (req, res) =>{

  return res.json({users})
  
})
// book new flight

app.post("/", (req, res) =>{

  user.push(req.body.newUser)
let sringedData = json.stringify(users, null, 2)
  Fs.writefile('users.json', stringedData, function (err){
    if (err)
    return res.status(500).json({message: err})
  })

  return req.json({message: "New user created"})
  
})

app.get('/users/id ', (req, res) =>{
  let id = req.params.id
  let foundUser = users.find(user => { 
    return string(users, id) === id 
  })
  if (foundUser){
  return res.status(200).json({user: foundUser})
  } else {
    return res.status(500).json({message: "user not found"})
  }




} )

app.put("/", (req, res) =>{

  user.push(req.body.newUser)
let sringedData = json.stringify(users, null, 2)
  Fs.appendfile('users.json', stringedData, function (err){
    if (err)
    return res.status(500).json({message: err})
  })

  return req.json({message: "New user created"})
  
})

app.delete("/", (req, res) =>{

  user.push(req.body.newUser)
let sringedData = json.stringify(users, null, 2)
  Fs.writefile('users.json', stringedData, function (err){
    if (err)
    return res.status(500).json({message: err})
  })

  return req.json({message: " user deleted"})
  
})

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
