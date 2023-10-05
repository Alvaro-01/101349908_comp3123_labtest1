const fs = require('fs');
const path = require('path'); 

const logsDir = path.join(__dirname, 'Logs'); 

if (!fs.existsSync(logsDir)) {
    fs.mkdirSync(logsDir);
  }
  
  fs.readdir("./Logs", (err, files) => {
    if (err) {
      console.error('Error reading directory:', err);
      return;
    }
    process.chdir(logsDir); 
    
    files.forEach((file) => {
        fs.unlink(`./${file}`, (err) => {
            if (err) {
              console.error(err);
              return;
            }
            console.log(`File "${file}" deleted successfully`);
          });
          
    });
  });