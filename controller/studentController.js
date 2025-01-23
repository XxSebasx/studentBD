const student = require("../models/student");
module.exports = {
    addStudent: async (req,res) => {
        let result = {success: false};
        let studentReq = req.body;
        console.log(studentReq.nombre)
        if(studentReq.edad >= 18){
            let newStudent = await student.findOrCreate({where : {DNI: studentReq.DNI},defaults: studentReq});
            result.success = true;
            console.log(newStudent);
        }
        res.json(result);
    },

    getStudent: async(req,res) => {
        let DNI = req.params;
        let findStudent = await student.findOne({where: DNI})
        res.json(findStudent);
    },

    getStudents : async(req,res) => {
        let students = await student.findAll();
        res.json(students);
    },

    deleteStudent : async(req,res) => {
        let deleteStudent = await student.destroy({where: req.params});
        res.json(deleteStudent);
    }
}