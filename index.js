
import express from "express"
const app = express();
const port = 3000;
import fetch from "node-fetch";



app.use(express.static('public'));

app.listen(port, () => {console.log(`example app listening at http://localhost:${port}`);
});

app.get('/Random',async(Request, Response) => { 
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '78b5d941bcmshf66494bb618a671p14921ejsne4c8934f6efd',
            'X-RapidAPI-Host': 'dad-jokes.p.rapidapi.com'
        }
    };
    
    const fectApi = fetch('https://dad-jokes.p.rapidapi.com/random/joke', options)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));
});