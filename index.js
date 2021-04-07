const express = require('express');
const cors = require('cors');
const app = express();


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use('/api/os', require('./routes/api/operatingSystem'))
app.listen(3030, ()=>{
    console.log("Express started at port: 3030");
});
