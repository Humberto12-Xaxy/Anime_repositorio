const express = require('express');
const app = express();
const jikan = require('jikan4.js');

app.use(express.json());

const client = new jikan.Client()

app.get('/', (req, res)=>{
    res.send('Hello world')
})

app.get('/anime', async (req, res) => {
    let {id} = req.body
    const anime = await client.anime.get(id)
    
    if(anime){
        res.json({id : anime.id, nombre : anime.title.default, synopsis: anime.synopsis})
    }else{
        res.json({error: 'El ID no existe'})
    }
});

app.get('/animep/:id', async (req, res) =>{
    let {id} = req.params
    const anime = await client.anime.get(id)
    
    if(anime){
        res.json({id : anime.id, nombre : anime.title.default, synopsis: anime.synopsis})
    }else{
        res.json({error: 'El ID no existe'})
    }
});


app.listen(3000, () => {
    console.log('Server on port 3000');
});
