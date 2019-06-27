const db = require('./../db_connection');


const getProfileData = (id, cb) => {
  const sql = {
    text: 'SELECT * FROM users WHERE id = $1',
    values: [id],
  }
  db.query(sql, (err, result) => {
    if (err){
      cb(err);
    } else {
      cb(null, result.rows);
    }
  });
}



const insertProfileData = ({firstName,lastName,email,Company,linkedin,skype,aboutMe,achievement,Industry ,url,skillsvalueInsert,skillsastervalueInsert,id} , cb) => {
  console.log("data qyer",skillsvalueInsert);
  


  const sql = {
    text: 'UPDATE users SET (first_name,last_name ,email,company_name, linked_profile, skypeid,about_me,  achievement,industry,image,skills_learn [1],skills_masterd[1]) = ($1, $2, $3, $4, $5,$6,$7,$8,$9,$10,$11,$12) where id= $13',
    values: [firstName,lastName,email,Company,linkedin,skype,aboutMe,achievement,Industry,url,skillsvalueInsert ,skillsastervalueInsert,id]
  }
  db.query(sql, (err, result) => {

    if (err){
     console.log("err in database",err);
     
      cb(err);
    } else {
     
    
      
      cb(null, result);
    }
  });
}


module.exports = {getProfileData , insertProfileData};