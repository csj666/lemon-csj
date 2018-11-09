/*
 * @Author: chenshujiang 
 * @Date: 2018-11-09 08:27:54 
 * @Last Modified by: chenshujiang
 * @Last Modified time: 2018-11-09 11:08:03
 */

var mysql = require("mysql");
var pool = mysql.createPool({
    user: 'root',
    password: 'root',
    database: 'lemon'
});

function packaPool(sql, arr, fn) {
    fn = fn ? fn : arr;
    arr = arr || [];
    pool.getConnection(function(err, con) {
        if (err) {
            fn(err)
        } else {
            con.query(sql, arr, function(err, result) {
                if (err) {
                    fn(err)
                } else {
                    fn(null, result);
                    con.release();
                }
            })
        }
    })

}

module.exports = packaPool;