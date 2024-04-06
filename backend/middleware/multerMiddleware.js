const multer = require("multer");
const path = require("path");

// destination path of uploads folder where all the images will be stored
const destinationPath = path.join(__dirname, "../../uploads");

// Set Storage engine
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, destinationPath);
  },
  filename: function (req, file, cb) {
    cb(
      null,
      `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`
    );
  },
});

// start upload
const upload = multer({
  storage: storage,
  limits: { fileSize: 1024 * 1024 * 25 }, // 25MB file size limit
});

module.exports = upload;
