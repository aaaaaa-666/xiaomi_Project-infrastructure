import Mock from 'mockjs'
Mock.mock('/api/user/login', {
    "status": 0,
    "data": {
        "id | 10001-11000": 0,     // | 10001-11000 表示随机生成 10001到11000之间的一个随机数
        "username": "@cname", // @cname 表示随机生成中文名
        "email": "admin@51purse.com",
        "phone": null,
        "role": 0,
        "createTime": 1479048325000,
        "updateTime": 1479048325000
    }
})