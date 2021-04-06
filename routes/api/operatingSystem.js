const express = require('express');
const router = express.Router();
const uuid = require('uuid');
const operatingSystems = require('../../SampleData/OperatingSystem');
const app = express();

router.get('/', (req, res)=>{
    //res.writeHead(200, {'Content-Type': 'application/json'});
    res.json(operatingSystems);
});

router.get('/:id', (req, res)=>{
    const found = operatingSystems.some(user => user.id === parseInt(req.params.id));
    if(found){
        res.json(operatingSystems.filter(p=>p.id === parseInt(req.params.id)));
    } else{
        res.sendStatus('404');
    }
});

router.post('/', (req, res) => {
    const newOs = {
        id: uuid.v4(),
        name: req.body.name,
        version: req.body.version,
        kernel: req.body.kernel,
        edition: req.body.edition,
        guiEnabled: req.body.guiEnabled
        
    }
    if(!newOs.name || !newOs.kernel){
        res.sendStatus(400);
    }
    else{
        operatingSystems.push(newOs);
        res.json(operatingSystems);
    }
});

router.put('/:id', (req, res)=>{
    const os = req.body;

    operatingSystems.filter(p=> p.id === +req.params.id).forEach(modifiedOs => {
        modifiedOs.kernel = os.kernel ? os.kernel : modifiedOs.kernel;
        modifiedOs.version = os.version ? os.version : modifiedOs.version;
        modifiedOs.edition = os.edition ? os.edition : modifiedOs.edition;
        modifiedOs.name = os.name ? os.name : modifiedOs.name;
        modifiedOs.guiEnabled = os.guiEnabled ? os.guiEnabled : modifiedOs.guiEnabled;
        res.json({msg: "Updated!", os: modifiedOs});
    });


});

router.delete('/:id', (req, res)=>{
    const found = operatingSystems.some(user => user.id === parseInt(req.params.id));
    if(found){
        var os = operatingSystems.filter(p=>p.id === parseInt(req.params.id));
        
        res.json({msg: `Deleted! Id: ${req.params.id}`, os :
            [
            ...operatingSystems.filter(p=>p.id !== parseInt(req.params.id))
        ]});
    } else{
        res.sendStatus('404');
    }
});

module.exports = router;