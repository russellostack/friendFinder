var friendsdata = require("../arrayData/array");
module.exports = function(app){
    app.get("/api/array", function (req,res){
        res.json(friendsdata);
    });
    app.post("/api/array", function (req, res){
        var newFriend = req.body;
        var diffArray = [];
        for (var i=0; i<friendsdata.length;i++){
            var sum = 0;
            for (var u = 0; u < friendsdata[i].scores.length; u++){
                sim += Math.abs(parseInt(newFriend.scores[j]- parseInt(friendsdata[i].scores[j])));
            }
            diffArray.push(sum);
        }
        var match = 0;
        var matchValue = parseInt(diffArray[0]);
        for (var p = 1; p< diffArray.length; p++){
            if (parseInt(diffArray[p]<matchValue)){
            match = p;
            matchValue = parseInt(diffArray[p])
            }
        }
        friendsdata.push(newFriend);
        res.send(friendsdata[match]);
    })
}