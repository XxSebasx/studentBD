document.getElementById("formStudent").addEventListener("submit", addStudent);
document.getElementById("eliminar").addEventListener("click", deleteStudent);
document.getElementById("buscar").addEventListener("click", getStudent);

getStudents()

async function addStudent(event) {
    event.preventDefault();
    let DNI = document.getElementById("DNI").value;
    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let campus = document.getElementById("campus").value;
    let edad = parseInt(document.getElementById("edad").value);
    try {
        const response = await fetch("/nuevo", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ DNI, nombre, apellido, campus, edad }),
        });
        const data = await response.json();
        getStudents();
        console.log(data);

    } catch (error) {
        console.log(error)
    }
}

async function getStudents() {
    let tabla = document.getElementById("cuerpoTabla")
    try {
        const response = await fetch("/estudiantes",{
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            }
        });

        let filas =``;
        const data = await response.json();
        for (let index = 0; index < data.length; index++) {
            let student = data[index];
            let fila = `<tr><td>${student.DNI}</td><td>${student.fullName}</td><td>${student.campus}</td><td>${student.edad}</td></tr>`;
            filas += fila;
        }
        tabla.innerHTML = filas;
        
    } catch (error) {
        
    }
}

async function deleteStudent() {
    let DNI = document.getElementById("DNIBuscar").value;
    try {
        const response = await fetch(`/borrar/${DNI}`,{
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            }
        });
        
        const data = await response.json();
        console.log(data)
        getStudents();
    } catch (error) {
        
    }
}

async function getStudent() {
    let tabla = document.getElementById("cuerpoTabla")
    let DNI = document.getElementById("DNIBuscar").value;
    try {
        const response = await fetch(`/estudiante/${DNI}`,{
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            }
        });
        
        const data = await response.json();
        tabla.innerHTML = `<tr><td>${data.DNI}</td><td>${data.fullName}</td><td>${data.campus}</td><td>${data.edad}</td></tr>`
        
    } catch (error) {
        
    }
}