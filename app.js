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
  
})
app.listen(port, ()=>{
    console.log('Funcionando en el puerto 3000')
})



