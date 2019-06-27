const {acceptFriendRequest} = require('../database/queries/select_search');

    exports.post = (req, res) => {
      const {connectionsId} = req.body;
      console.log("accept",req.body);
      
      
       acceptFriendRequest(connectionsId, (err, results) => {
        if (err) 
        {return res.send({msg: 'Accept Freind Request Failed',code:err.code, status: false});
       }else{
         console.log("result accept",results);
         console.log("id accept",connectionsId);
         
         
        return res.send({msg: 'Freind Request accepted Successfully', status: true, deleteId:connectionsId})
       }
      })
    }
