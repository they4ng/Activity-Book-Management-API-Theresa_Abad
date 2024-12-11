const express = require("express");
const router = express.Router();
const {

    getAllbooks,
    getBooksByGenre,

} = require("../controllers/booksController");

router.get("/", getAllbooks);
router.get("/genre/:genre",getBooksByGenre,);


module.exports = router;
