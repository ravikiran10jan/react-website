

const db = require('./../db_connection');
// SELECT * FROM  users WHERE EXISTS (SELECT 1 FROM unnest(skills_learn ) AS skill WHERE skill LIKE 'Spring')


const getSearchResult = (valueSearch, cb) => {
  const sql = {
    text: 'SELECT id,first_name,last_name,about_me FROM  users WHERE EXISTS (SELECT 1 FROM unnest(skills_learn ) AS skill WHERE skill LIKE $1 )',
    // skills_learn[] like $1',
    values:['%' + valueSearch + '%']

  }
  db.query(sql, (err, result) => {
    if (err){
      console.log("err search",err);
      
      cb(err);
    } else {
      console.log("result",result.rows);
      
      
      cb(null, result.rows);
    }
  });
}


const insertFriendRequest = ({sender_id, recive_id},cb)=>{
 
  
  const sql = {
    text : 'INSERT INTO connections(sender_user_id, receiver_user_id) VALUES($1, $2)',
    values:[sender_id, recive_id]};
    db.query(sql, (err, result) => {
      if (err){
   cb(err);
      } else {
  cb(null, result);
      }
    });

}



// const checkFriendRelation = ({sender_id, recive_id}, cb) => {
// 	let sql = {
// 		text: 'select * from connections where sender_user_id = $1 OR receiver_user_id = $1',
// 		values: [sender_id, recive_id]
// 	}
// 		db.query(sql, (err, results) =>{
// 			if(err) return cb(err);
// 			return cb(null, results.rows)
// 		} )
// }


const notificationFriendRequest = (data, cb) => {
  let sql = {
    text: 'select users.first_name, connections.id from users INNER JOIN connections ON connections.sender_user_id = users.id where connections.receiver_user_id = $1 AND relation_state = $2',
    values: [data, 'pending']
  };

db.query(sql, (err, results) => {
  if (err){
    cb(err);
       } else {
   cb(null, results.rows);
   console.log("nite",results.rows);
   
       }
});
};
const acceptFriendRequest = (data, cb) => {
  let  sql = {
    text: 'UPDATE connections SET relation_state = $1 WHERE id = $2',
    values: ['approved', data]
  };
  
    db.query(sql, (err, results) => {
      if (err) return cb(err);
      return cb(null,results.rows);
    });
  };
  const rejectFriendRequest = (data, cb) => {
    let  sql = {
      text: 'delete from connections where id = $1 returning *',
      values: [data]
    };
    
      db.query(sql, (err, results) => {
        if (err) return cb(err);
        return cb(null,results.rows);
      });
    };
module.exports = {getSearchResult ,insertFriendRequest,notificationFriendRequest,acceptFriendRequest,rejectFriendRequest}