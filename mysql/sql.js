module.exports = {
    //添加用户
    INS_ME: "insert userlist(uid,u_name) values(?,?)",
    //查询用户是否存在
    SELE_ME: "select * from userlist where u_name=?",
}