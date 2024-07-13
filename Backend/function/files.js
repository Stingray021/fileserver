const fs = require("fs");

const folderPath = "./static";

//Функция получения массива с именем файлов

const getFiles = async () => {
  let files = await fs.promises.readdir(folderPath);
  console.log(files)
  //Возврат файлов с необходимым расширением
  return files.filter((name) => /\.((htm(l|))|png|txt|json|jpg)$/.test(name));
};

const getFileData = async (fileName) => {
  let result
  await fs.promises.readFile(`${folderPath}/${fileName}`).then((error, data) => {
    result = data
    console.log(typeof result)
  });
  return result
};

module.exports.getFiles = getFiles;
module.exports.getFileData = getFileData;
