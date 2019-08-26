

const db = require('./../db_connection');


const getSearchResult = (valueSearch, id, cb) => {
  const sql = {
    text: 'SELECT id,first_name,last_name,about_me FROM  users WHERE EXISTS (SELECT 1 FROM unnest(skills_learn ) AS skill WHERE skill LIKE $1  )AND id != $2',

    values: [`%${valueSearch}%`, id],

  };
  db.query(sql, (err, result) => {
    if (err) {
      cb(err);
    } else {
      cb(null, result.rows);
    }
  });
};


const insertFriendRequest = ({ sender_id, recive_id }, cb) => {
  const sql = {
    text: 'INSERT INTO connections(sender_user_id, receiver_user_id) VALUES($1, $2)',
    values: [sender_id, recive_id],
  };
  db.query(sql, (err, result) => {
    if (err) {
      cb(err);
    } else {
      cb(null, result);
    }
  });
};


const notificationFriendRequest = (data, cb) => {
  const sql = {
    text: 'select users.first_name, connections.id from users INNER JOIN connections ON connections.sender_user_id = users.id where connections.receiver_user_id = $1 AND relation_state = $2',
    values: [data, 'pending'],
  };

  db.query(sql, (err, results) => {
    if (err) {
      cb(err);
    } else {
      cb(null, results.rows);
      console.log('nite', results.rows);
    }
  });
};
const acceptFriendRequest = (data, cb) => {
  const sql = {
    text: 'UPDATE connections SET relation_state = $1 WHERE id = $2',
    values: ['approved', data],
  };

  db.query(sql, (err, results) => {
    if (err) return cb(err);
    return cb(null, results.rows);
  });
};
const rejectFriendRequest = (data, cb) => {
  const sql = {
    text: 'delete from connections where id = $1 returning *',
    values: [data],
  };

  db.query(sql, (err, results) => {
    if (err) return cb(err);
    return cb(null, results.rows);
  });
};
module.exports = {
  getSearchResult, insertFriendRequest, notificationFriendRequest, acceptFriendRequest, rejectFriendRequest,
};
