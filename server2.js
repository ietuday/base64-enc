const Algorithm = "aes-128-ecb";
    var obj = xlsx.parse('D:/multiFileConfirmation/' + 'Payearly_Input_File_Format_ENC.xlsx');
    console.log("data...", obj)
    var sampleData = obj[0].data[0][0];
    let buff = Buffer.from(sampleData, 'base64');
    //let text = buff.toString('utf8');
    fs.writeFileSync('new-test.txt', buff);
    const KEY1 = Buffer.from("MTAwMDAwMDA4NA==");
    const inputData = fs.readFileSync('new-test.txt');
    const cipher = crypto.createDecipheriv(Algorithm, KEY1, Buffer.alloc(0));
    const output = Buffer.concat([cipher.update(inputData), cipher.final()]);
    fs.writeFileSync("newexcel.xlsx", output);
