const pool = require("../../config/database");

module.exports = {
    create: (data, callBack) => {
        pool.query(
          `insert into registration(id,first_name, last_name, gender, email, password, number)
          values(?,?,?,?,?,?,?)`,
          [
            data.id,
            data.first_name,
            data.last_name,
            data.gender,
            data.email,
            data.password,
            data.number,
          ],
          
          (error, results, fields) => {
            if(error){
                return callBack(error)
            }
            return callBack(null, results)
          }
        );
    },

    getUsers: callBack => {
        pool.query(
            `select id,first_name, last_name, gender, email, password, number from registration`,
            [],
            (error, results, fields) => {
                if(error) {
                    callBack(error);
                }
                return callBack(null, results);
            }
        )
    },

    getUserByUserId: (id, callBack) => {
        pool.query(
            `select id,first_name, last_name, gender, email, password, number from registration where id = ?`,
            [id],
            (error, results, fields) => {
                if(error) {
                    callBack(error);
                }
                return callBack(null, results[0]);
            }
        );
    },

    updateUser: (data, callBack) => {
        pool.query(
            `update registration set first_name=?, last_name=?, gender=?, email=?, password=?, number=? where id = ?`,
            [
               
                data.first_name,
                data.last_name,
                data.gender,
                data.email,
                data.password,
                data.number,
                data.id
              ],

              (error, results, fields) => {
                if(error) {
                    callBack(error);
                }
                return callBack(null, results);
              }
        )
    },

    deleteUser: (data, callBack) => {
        pool.query(
            `delete from registration where id = ?`,
            [data.id],
            (error, results, fields) => {
                if(error) {
                     callBack(error);
                }
                return callBack(null, results[0]);
            }
        );
    },

    // functioin (req, res) {
    //     if(req.session.loggedin){
    //         res.send('Welcome back, ' + request.session.username + '!');
    //     }else{
    //         res.send('Please login to view this page!');
    //     }
    //     res.end();
    // },

    getUserByUserEmail: (email, callBack) => {

      let a = pool.query(
            `select * from registration where email = ?`,
            [email],
            (error, results, fields) => {
                // console.log({error,results })
                if(error) {
                    callBack(error);
                }
                return callBack(null, results[0]);
            }
        );
        
    },

    filterByGender: (gender, callBack) => {
        pool.query(
            `SELECT * FROM registration WHERE gender = ?`,
            [gender],
            (error, results, fields) => {
                if (error) {
                    return callBack(error);
                }
                return callBack(null, results);
            }
        );
    },

    searchByName: (name, callBack) => {
        pool.query(
            `SELECT * FROM registration WHERE first_name LIKE ? OR last_name LIKE ?`,
            [`%${name}%`, `%${name}%`],
            (error, results, fields) => {
                if (error) {
                    return callBack(error);
                }
                return callBack(null, results);
            }
        );
    },
    
};