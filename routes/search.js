var express = require("express"),
  sql = require("mssql"),
  cors = require("cors");

var router = express.Router();
router.use(cors());

var database = {
  server: "127.0.0.1",
  database: "VO_Medical_Coding",
  user: "sa",
  password: "Stealth99"
};

router.get("/api/cpt-letters", function(req, res) {
  letters = [];

  sql.connect(database, function(err) {
    if (err) console.log(err);

    var request = new sql.Request();
    request
      .input("code", req.query.code)
      .execute("sp_CPT_Crosswalk_Letters", function(err, response) {
        if (err) console.log(err);

        results = response.recordset;
        for (var i in results) {
          letters.push(results[i].Letter);
        }

        sql.close();
        console.log(letters);

        res.send(letters);
      });
  });
});

router.get("/api/cpt-categories", function(req, res) {
  categories = [];

  sql.connect(database, function(err) {
    if (err) console.log(err);

    var request = new sql.Request();
    request
      .input("code", req.query.code)
      .input("letter", req.query.letter)
      .execute("sp_CPT_Crosswalk_Categories", function(err, response) {
        if (err) console.log(err);

        results = response.recordset;
        for (var i in results) {
          categories.push([
            results[i].Key,
            //results[i].Range,
            results[i].Category
          ]);
        }

        sql.close();
        console.log(categories);
        res.send(categories);
      });
  });
});

router.get("/api/cpt-diagnosis-codes", function(req, res) {
  diagnosisCodes = [];

  sql.connect(database, function(err) {
    if (err) console.log(err);

    console.log(req.query.code, req.query.letter, req.query.category);

    var request = new sql.Request();
    request
      .input("code", req.query.code)
      .input("letter", req.query.letter)
      .input("category", req.query.category)
      .execute("sp_CPT_Crosswalk_Diagnosis_Codes", function(err, response) {
        if (err) console.log(err);

        results = response.recordset;
        for (var i in results) {
          diagnosisCodes.push([results[i].Diagnosis, results[i].Description]);
        }

        sql.close();
        console.log(diagnosisCodes);
        res.send(diagnosisCodes);
      });
  });
});

module.exports = router;
