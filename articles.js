const express = require("express");
const router = express.Router();
const Articles = require("../models/articles");

//REQUEST TO GET ALL ARTICLES
router.get("/", (req, res) => {
    Articles.find()
    .then(article => res.json(article))
    .catch (err => res.status(400).json(`Error: ${err}`));
});

//REQUEST TO ADD NEW ARCTICLE
router.post('/add', (req, res) => {
    const newArticle = new Articles({
        name: req.body.name,
        designation: req.body.designation,
        from: req.body.from,
        to: req.body.to,
        typeofleave: req.body.typeofleave,
        reason: req.body.reason,
        alternativefaculty: req.body.alternativefaculty
    });
    newArticle.save()
    .then(() => res.json("The Leave Application posted successfully!"))
    .catch(err => res.status(400).json(`Error: ${err}`));
});

//REQUEST FIND ARTICLE BY ID
router.get("/:id", (req, res) => {
    Articles.findById(req.params.id)
     .then(article => res.json(article))
     .catch(err => res.status(400).json(`Error: ${err}`));
});

//REQUEST FIND ARTICLE BY ID AND UPDATE
router.put("/update/:id", (req, res) => {
    Articles.findById(req.params.id)
    .then(article => {
        article.name = req.body.name;
        article.designation = req.body.designation;
        article.from = req.body.from;
        article.to = req.body.to;
        article.typeofleave = req.body.typeofleave;
        article.reason = req.body.reason;
        article.alternativefaculty = req.body.alternativefaculty;

        article
        .save()
        .then(() => res.json("The Application is UPDATED successfully!"))
        .catch(err => res.status(400).json(`Error: ${err}`));
    })
    .catch(err => res.status(400).json(`Error: ${err}`));
});

//REQUEST FIND ARTICLE BY ID AND DELETE
router.delete("/:id", (req, res) => {
    Articles.findByIdAndDelete(req.params.id)
    .then(() => res.json("The Application is DELETED!"))
    .catch(err => res.status(400).json(`Error: ${err}`));
});


module.exports = router;