const express = require('express');
var parseUrl = require('body-parser')
const app = express();
const port = 4000
let encodeUrl = parseUrl.urlencoded({ extended: false })

app.use(express.static('public'));

app.post('/inserisci',encodeUrl, (req,res)=>{
    var nome=req.body.nome;
    console.log("ecco il nome da usare nell'sql", nome);
    console.log("SELECT * from Collaboratore WHERE NOME='"+nome+"'");

    //' or 1=1#
    //' or 1=1;SELECT * from Circolari#
});

app.listen(port, () => {
    console.log(`Sito listening at http://localhost:${port}`)
})