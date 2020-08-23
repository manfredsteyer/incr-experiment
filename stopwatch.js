const { exec } = require("child_process");
const cmd = process.argv.slice(2).join(' ');

const d0 = new Date();

exec(cmd, (error, stdout, stderr) => {
    if (error) {
        console.log(`error: ${error.message}`);
    }
    if (stderr) {
        console.log(`stderr: ${stderr}`);
    }
    console.log(`stdout: ${stdout}`);

    const d1 = new Date();

    const delta = d1.getTime() - d0.getTime();
    console.log('Elapsed time:', delta, 'msec')
});
