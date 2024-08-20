import  fs from 'fs';
import  path from 'path'


function directory(dirPath: string ): void {

    try {
        const items = fs.readdirSync(dirPath); 
        items.forEach(item => {
            const fullPath = path.join(dirPath, item); 
            const stats = fs.statSync(fullPath); 
            if (stats.isFile()) {
                
                console.log(` ${item}`);
            } 
        })}catch(err){
            console.log(err)
        }
    
    }


