const express = require("express");
const router = express.Router();
let Ship = require("../models/Ship");

/**
 * tell Express.js that when it receives a POST request at the URL /newShip/, to do this code.
 */
router.post("/newShip/", function(req, res){
  // look up documents in MongoDB by name.
  Ship.findOne({name: req.body.name}, function(error,doc){
    // if there was an error
    if(error){
      console.error("Error finding ship",error);
      res.status(500).send(error);
    }
    // if no document was found
    else if(!doc){
      // create a new instance of the Ship model, using the request body as the data.
      new Ship(req.body).save((err, doc) => {
        /**
         * this error/document fat-arrow function is required.
         * on an error, handle it. else send the newly created document back to the client.
         */
        if(err){
          console.error("Error saving new ship",err);
          res.status(500).send(err);
        }
        else{
          res.send(doc);
        }
      });
    }
    // a document was found, return it instead.
    else{
      res.send(doc);
    }
  });
});

router.get("/getShip/name", function(req, res){
  Ship.findOne({name: req.body.name}, function(error,doc){
    if(error){
      console.error("Error finding ship",error);
      res.status(500).send(error);
    }
    else if(!doc){
      console.log("Error: Could not find ship named "+doc);
      res.sendStatus(404);
    }
    else{
      res.send(doc);
    }
  });
});  

router.get("/getShip/secondaryBattery", function(req, res){
  Ship.find({secondaryBattery: req.body.name}, function(error, docs){
    if(error){
      console.error("Error finding ship",error);
      res.status(500).send(error);
    }
    else if(!docs){
      console.log("Error: Could not find any ship with such secondary battery");
      res.sendStatus(404);
    }
    else{
      res.send(docs);
    }
  });

});

router.post("/updateShip/", function(req,res){
  const filter = req.body.name;
  const update = req.body;
  const new_doc = Ship.findOneAndUpdate(filter, update, function(err,old_doc) {
    if(err){
      console.error("Error updating ship",err);
      res.status(500).send(err);
    }
    else if(filter==null){
      console.log("Error, no ship name given");
      res.sendStatus(400);
    }
    else if(!old_doc){
      console.log("Error: Could not find such ship");
      res.sendStatus(404);
    }
    else{
      res.send(new_doc);
    }
  });
});

module.exports = router;