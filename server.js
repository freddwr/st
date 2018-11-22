const express = require('express');
const path = require('path');

const app = express();


app.use(express.static(__dirname + './dist/exam1'));

app.get('/*', (req,res)=>{
	res.sendFIle(path.join(__dirname, '/dist/exam1/index.html'));
});


app.listen(process.env.PORT || 8080, ()=>{
	console.log('servidor iniciado');
});
