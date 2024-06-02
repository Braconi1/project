const express = require('express');
const app = express();
const port = 3000;

const firma = {
    naziv: "Moja Firma",
    adresa: "Ulica Primjera 123",
    grad: "Grad Primjera",
    drzava: "Država Primjera",
    postanskiBroj: "12345",
    kontaktTelefon: "+385 1 234 5678",
    email: "info@mojafirma.hr"
};

app.get('/api/lokacija', (req, res) => {
    res.json(firma);
});

app.listen(port, () => {
    console.log(`API radi na http://localhost:${port}`);
});
