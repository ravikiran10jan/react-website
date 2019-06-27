const {getSearchResult }= require('./../database/queries/select_search');

exports.post =  (req, res) => {
console.log("search",req.body.data.value1.label);

  
  getSearchResult(req.body.data.value1.label,(err, result) => {

      if (err) {
      
        
        res.send({ err: 'Something went wrong, try again later'});
        return;
      }
      if (result.length === 0) {
        res.send({ err: 'There is no mentors for this search'});
        return;
      }
      res.send(result);
 
  
    });
  }

