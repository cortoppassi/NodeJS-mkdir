const fs = require('fs')
const assets = ['html', 'css', 'js']

function make(dir){

    dir.forEach((item) => {
        fs.mkdir(`projeto/${item}`,{recursive: true},(err) => {
            if(err) throw err
            console.log('Diretorio Criado com sucesso:', item)
        });
   });
}

make(assets)

//kdir pra criar diretorios