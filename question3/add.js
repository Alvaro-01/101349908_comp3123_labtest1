const fs = require('fs');
const path = require('path'); 

const logsDir = path.join(__dirname, 'Logs');

if (!fs.existsSync(logsDir)) {
  fs.mkdirSync(logsDir);
}

process.chdir(logsDir); 

for(let i = 0; i < 10; i++){
    const file = `log${i}.txt`
    const filepath = path.join(logsDir, file);
    const text = `This is log file ${i}.`;
    fs.writeFileSync(filepath, text);
    console.log(file);
}