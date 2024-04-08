module.exports = (req, res, next) => {
  if(req.method === 'POST'&& req.path === '/auth/login') {
    if(req.body.username === 'admin' && req.body.password === '123456') {
      return res.status(200).json({
        code: 200,
        data:{
          token:'thisisafaketoken123'
        },
        msg: '登录成功'
      })
    }else{
      return res.status(400).json({
        code: 400,
        data: null,
        msg:'用户名或者密码错误'
      })
    }
  }
  next()
}
