const { getProfileData, insertProfileData } = require('./../database/queries/select_profile');


const getProfile = (req, res) => {
  const { id } = req.query;
  getProfileData(id, (err, result) => {
    if (err) {
      res.send({ err: 'Something went wrong, try again later' });
      return;
    }
    if (result.length === 0) {
      res.send({ err: 'There is no recored for this id' });
      return;
    }
    res.send(result);
  });
};

const postProfile = (req, res) => {
  console.log('g', req.body.url);

  const { id } = req.query;
  const {
    firstName, lastName, email, Company, linkedin, skype, aboutMe, achievement, Industry, selectedLearnSkill, selectedMasterSkill, url,
  } = req.body;

  const skillsvalueInsert = [];

  if (selectedLearnSkill) {
    selectedLearnSkill.map(({ label }) => skillsvalueInsert.push(label));
  }
  const skillsastervalueInsert = [];
  if (selectedMasterSkill) {
    selectedMasterSkill.map(({ label }) => skillsastervalueInsert.push(label));
  }


  insertProfileData({
    firstName, lastName, email, Company, linkedin, skype, aboutMe, achievement, Industry, skillsvalueInsert, skillsastervalueInsert, url, id,
  }, (err, result) => {
    if (err) {
      res.send({ err: 'Something went wrong' });
    } else {
      res.send({ msg: 'profile has been updated' });
    }
  });
};


module.exports = { postProfile, getProfile };
