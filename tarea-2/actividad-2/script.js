let note

do {
    note = Number(prompt("Introduce tu nota: "))
    if (note < 0 || note > 10 || Number.isNaN(note))
        alert("Nota no válida")
} while (Number.isNaN(note) || note < 0 || note > 10)

if (note < 5)
    alert("Suspenso")
else if (note < 6)
    alert("Suficiente")
else if (note < 7)
    alert("Bien")
else if (note < 9)
    alert("Notable")
else if (note <= 10)
    alert("Sobresaliente")
