const express = require('express')
const app = express()
const PORT = 5000
const db = require('./app/models')
const cors =require('cors')
app.use(express.json())
app.use(express.urlencoded({extended : true}))
var corsOptions ={
    origin: 'http://localhost'
}
app.use(cors(corsOptions))
app.use(express.json())
app.use(express.urlencoded({ extended: true}))
db.mongoose.connect(db.url,{
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('ทำต่อได้')
})
.catch(err => {
    console.log('ทำไม่ได้อ่ะ',err)
})
require ('./app/routes/student.routes')(app)
app.listen(PORT,() => console.log(`Server satart on port  ${PORT}`))