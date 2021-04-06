const express = require('express');
const router = express.Router();
const uuid = require('uuid');
const users = require('../../SampleData/OperatingSystem');
const app = express();

router.get('/', (req, res)=>{
    //res.writeHead(200, {'Content-Type': 'application/json'});
    res.json(users);
});

router.get('/:id', (req, res)=>{
    const found = users.some(user => user.id === parseInt(req.params.id));
    if(found){
        res.json(users.filter(p=>p.id === parseInt(req.params.id)));
    } else{
        res.sendStatus('404');
    }
});

module.exports = router;