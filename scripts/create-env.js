const fs = requiere('fs');

fs.writefileSync('./.env',`API=${process.env.API}\n`)