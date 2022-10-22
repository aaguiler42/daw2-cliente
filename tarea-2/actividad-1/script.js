let edad

do {
    edad = Number(prompt("Introduce tu edad: "))
    if (edad < 0 || edad > 99 || Number.isNaN(edad))
        alert("Edad no válida")
} while (Number.isNaN(edad) || edad < 0 || edad > 99)

if (edad >= 18)
    alert("Ya puedes conducir")
else
    alert("Aún no puedes conducir")
