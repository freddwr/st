const 	express = require('express'),
	path = require('path');

const app = express();

app.use(express.static( __dirname + '/dist/exam1' ));

app.get('/*', function(req, res){
	res.sendFile( path.join( __dirname, '/dist/exam1/index.html'));
});

app.listen(process.env.PORT || 8080, ()=>{ console.log('server started');})
