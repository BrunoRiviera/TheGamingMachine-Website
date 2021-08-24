const express = require ('express');
const app = express();
const path = require('path');
const data = require('./utils/data')
const title = 'The Gaming Machine'
const port = process.env.PORT || 3000;


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res)=>{
    data.getAllGames((error, data)=>{
        if(error){
            return res.send({
                error
            })
        }
        const JSONBody = JSON.parse(data);
        return res.render('index', {
            title,
            JSONBody
        });

    })
});

app.get(`/saofatalbullet`, (req, res) => { res.render(`pages/saofatalbullet`,{title: `The Gaming Machine | S.A.O Fattal Bullet`})});
app.get(`/residentevil7`, (req, res) => { res.render(`pages/residentevil7`,{title: `The Gaming Machine | Resident Evil 7`})});
app.get(`/sekiro`, (req, res) => { res.render(`pages/sekiro`,{title: `The Gaming Machine | SEKIRO: Shadows Die Twice`})});

app.listen(port, ()=>{
    console.log('Funcionando en el puerto 3000')
})



