const express = require('express')

const app = express();
app.use(express.json());
app.set('port', process.env.PORT || 3000);
app.get('/', function (req, res) {
  res.send('Hello World')
});


app.post('/palindrome', async function (req, res) {
    res.setHeader('Content-Type', 'application/json');
    let Boolean = await palindrome(req.body.phrase);
    res.end(JSON.stringify({ palindrome: Boolean }, null, 3));
});

app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
});
function palindrome(str){
    var LowerCaseStr=str.toLowerCase();  
    var str2=LowerCaseStr.split("");
    var z="";
    for (var i=0;i<str2.length;i++){
        if (str2[i]!=""){
            z=str2[i];
        }
    }
    var n=z.split("");
    var m=z.split("").reverse();
    for (var i=0;i<n.length;i++){
        if(n[i]==m[i]){
            return true;
        }
        else{
            return false;
        }
    }
}