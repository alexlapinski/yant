const Promise = require('bluebird');
const { exec } = require('child_process');

const execAsync = Promise.promisify(exec);


const command = 'tesseract imagename outputbase [-l lang] [--oem ocrenginemode] [--psm pagesegmode] [configfiles...]';
execAsync(command)
    .then((stdout, stderror) => {
        console.log(`stdout: ${stdout}`);
        console.log(`stderr: ${stderr}`);
    })
    .catch(error => {
        console.log(`ERROR: ${error}`);
    });