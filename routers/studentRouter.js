const express = require("express");
const studentController = require("../controller/studentController")
const router = express.Router();

router.post("/nuevo", studentController.addStudent);
router.get("/estudiante/:DNI", studentController.getStudent);
router.get("/estudiantes", studentController.getStudents);
router.delete("/borrar/:DNI", studentController.deleteStudent);



module.exports = router;