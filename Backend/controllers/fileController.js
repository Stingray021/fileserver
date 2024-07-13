const { response } = require("express");
const { getFiles, getFileData } = require("../function/files");
const fs = require("fs");
const mime = require("mime-types");
const { error } = require("console");

class UserController {
  async getFile(req, res) {

    const { name } = req.params;
    const folderPath = "./static";
    const filePath = `${folderPath}/${name}`;
    await fs.promises.readFile(filePath).then((data) => {
        res.header("Content-Type", mime.lookup(filePath))
        res.set({"Content-Type": mime.lookup(filePath)})
        res.end(data);
    }).catch((error) => {
      res.statusCode = 404;
      res.end("File not found!");
    });
  }
  async getFileList(req, res) {
    try {
      const fileList = await getFiles();
      return res.json({ fileList });
    } catch (e) {
      return res.json({ error: e.message });
    }
  }
}

module.exports = new UserController();
