const { student } = require('../models');
const db = require('../models')
const Student = db.student
exports.create = (req,res) => {
    if(!req.body.firstname){
        res.status(400).json({message:"content can not be emtry!"})
        return;
    }
    const student = new Student(
        {             
        advice : req.body.advice,
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email
        }
    );
        student
        .save(student)
        .then(data => {
            res.send(data)
        })
        .catch(err => {
            res.status(500)
            .json({message:err.message || "Some error occurred while creating the student."})
        })
}
exports.findAll = (req,res) => {
    Student.find()
        .then(data => {
            res.json(data)
        })
        .catch(err => {
            res.status(500)
            .json({message:err.message || "Some error occurred while creating the student."})
        })
}
exports.findOne = (req,res) =>{
    const id = req.params.id
    Student.findById(id)
    .then(data => {
        if(!data){
            res.status(404).json({message:"Not found!"})
        }
        else{
            res.json(data)
        }
    })
    .catch(err => {
        res.status(500).json({message:"Error retrieving data!"})
    })
}
exports.update = (req,res) => {
    if(!req.body) {
        return res.status(400).json({
            message: "Data to update cannot be empty!"
        })
    }
    const id = req.params.id
    Student.findByIdAndUpdate(id, req.body, {useFindAndModify: false})
    .then(data => {
        if(!data){
            res.status(404).json({
                message:`Connot update with id=${id}`
            })
        }
        else{
            res.json({message: "Data was updated"})
        }
    })
    .catch(err => {
        res.status(500)
        .json({message:err.message || "Some error occurred while creating the student."})
    })
}
exports.delete= (req,res) => {
    const id = req.params.id
    student.findByIdAndRemove(id, {useFindAndModify: false})  
    .then(data => {
        if(!data){
            res.status(404).json({
                message:`Connot deletted with id=${id}`
            })
        }
        else{
            res.json({message: "Data was deletted"})
        } 
})
.catch(err => {
    res.status(500)
    .json({message:err.message || "Some error occurred while creating the student."})
})
}