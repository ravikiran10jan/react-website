const {getProfileData,insertProfileData} = require('./../database/queries/select_profile')




const getProfile = (req, res) => {
  const { id } = req.query;
  getProfileData(id, (err, result) => {
    if (err) {
      res.send({ err: 'Something went wrong, try again later'});
      return;
    }
    if (result.length === 0) {
      res.send({ err: 'There is no recored for this id'});
      return;
    }
    res.send(result);

  });
}

const postProfile = (req, res) => {

  const  { firstName,lastName,email,Company,linkedin,skype,aboutMe,achievement,Industry } = req.body;

  const {id}= req.query;
 
  
  insertProfileData({ firstName,lastName,email,Company,linkedin,skype,aboutMe,achievement,Industry ,id}, (err, result) => {
  
    if (err) {
  
      res.send({ err: 'Something went wrong'});
    } else {

      res.send({ msg: 'profile has been updated'});
  
      
    }
  });
}



module.exports = { postProfile, getProfile};




