import  fs from 'fs';
import  path from 'path'


function directory(dirPath: string, space: number = 0 ): void {
    const items = fs.readdirSync(dirPath)
    const indentation = ' '.repeat(space * 2)
    try { 
        items.forEach(item => {
            const fullPath = path.join(dirPath, item); 
            const stats = fs.statSync(fullPath); 
            if (stats.isFile()) {
                console.log(` ${indentation} ${item}`);
                directory(dirPath, space + 1)
            } 
        })}catch(err){
            console.log(err)
        }
    
    }


directory('./src')