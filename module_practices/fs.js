const fs = require('fs');
const readLine = require('readline');

fs.open('./fruits.txt', 'w+', (err, file)=>{
    if (err) throw err;
    //file.write('ABC!');
    console.log('saved!');
    const buffer = Buffer.from('Jackfruits\nMango\nBanana');
    fs.write(file, buffer, (err)=>{
        if (err) {
            throw err;
        }
        fs.close(file, ()=>{
            console.log('Written Sucessfully!');
        })
    });

    
});

const rl = readLine.createInterface({
    input : fs.createReadStream('./fruits.txt')
});
rl.on('line', (line)=>{
    console.log(line);
});

rl.on('close', ()=>{
    console.log('Done!');
});
