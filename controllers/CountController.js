var mongoose = require("mongoose");
// const { count } = require("../models/count");
var Count = require("../models/count");

var countController = {};


countController.save = async(req, res) =>{

    const count = new Count(req.body);
    
    try {
        await count.save();
        res.send(count);
      } catch (error) {
        res.status(500).send(error);
      }
}

countController.get = async(req, res) =>{
    console.log(req.query.meetingid)
    console.log((Date.now() - 5000), Date.now());
    var meetingid = req.query.meetingid
    try {
    const totalCount = await Count.countDocuments({
        MeetingId: meetingid,
        updated_at : { $lt:Date.now(), $gt: (Date.now()-10000)}
        // updated_at : "1631708183364"
    })
    console.log(totalCount);
    res.send(String(totalCount))
}catch (error) {
    console.log(error)
    res.send("Error");
  }
}






module.exports = countController;
