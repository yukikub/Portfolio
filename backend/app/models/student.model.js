module.exports = (mongoose) =>{
    var schema = mongoose.Schema(
        {
            advice: String,
            firstname: String,
            lastname: String,
            email: String
        },
        {
            timestamps: true
        }
    );
    const Student = mongoose.model("Student", schema)
    return Student
}