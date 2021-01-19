var i = 0;
    const Algorithm = "aes-128-ecb";
    var obj = xlsx.parse('D:/multiFileConfirmation/' + 'Payearly_Input_File_Format_ENC.xlsx');
    function encryptFile(key, inputFile, outputFile) {
        const inputData = fs.readFileSync(inputFile);
        const cipher = crypto.createCipheriv(Algorithm, key, Buffer.alloc(0));
        const output = Buffer.concat([cipher.update(inputData), cipher.final()]);
        fs.writeFileSync(outputFile, output);
    }

    function decryptFile(key, inputFile, outputFile) {
        const inputData = fs.readFileSync(inputFile);
        const cipher = crypto.createDecipheriv(Algorithm, key, Buffer.alloc(0));
        const output = Buffer.concat([cipher.update(inputData), cipher.final()]);
        fs.writeFileSync(outputFile, output);
    }

    const KEY = Buffer.from("MTAwMDAwMDA4NA==", "utf8");

    encryptFile(KEY, "D:/multiFileConfirmation/hyva_fileInvoicemart-30112020.xlsx", "node-input.txt");
    decryptFile(KEY, "node-input.txt", "node-decrypted.xlsx");
