var express = require("express");
var query = require("../../mysql/query");
var sql = require("../../mysql/sql");
var uuid = require("node-uuid");

function addLemon(req, res, next) {
    var params = req.body;
    //判断cid是否存在
    if (!params.c_name) {
        res.json({ cod: 0, msg: "用户不存在" });
    } else {
        //添加用户  先进判断是否已经添加
        query(sql.SELE_ME, [params.c_name], function(err, result) {
            //判断服务器
            if (!err) {
                //判断
                if (result.length > 0) {
                    res.json({ cod: 3, msg: "该用户存在" });
                } else {
                    //添加用户
                    //随机的生成uid
                    var uid = uuid.v1();
                    query(sql.INS_ME, [uid, params.c_name], function(err, result) {
                        if (!err) {
                            res.json({ cod: 1, msg: "添加成功" });
                        } else {
                            res.json({ cod: 2, err });
                        }
                    })
                }
            } else {
                res.json({ cod: 2, err });
                // res.json({ cod: 2, msg: "数据库有误" });
            }
        })
    }
}

module.exports = {
    addLemon: addLemon
}