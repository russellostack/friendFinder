var friendsData = require("../arrayData/array");
module.exports = function(app){
    app.get("/api/array", function (req,res){
        res.json(friendsData);
    });
    app.post("/api/array", function (req, res){


        var userData = req.body;
        var diffArray = [];
        for (var i=0; i<friendsData.length;i++){
            var sum = 0;
            for (var u = 0; u < friendsData[i].scores.length; u++){
                sum += Math.abs(parseInt(userData.scores[u]- parseInt(friendsData[i].scores[u])));
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
        friendsData.push(userData);
        res.send(friendsData[match]);
    })
}