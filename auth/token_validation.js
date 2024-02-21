const { verify } = require("jsonwebtoken");

module.exports = {
    checkToken: (req, res, next) => {
        let token = req.headers.authorization;
        console.log({ans1: token});
        if(token){
             token = token.slice(7);
             console.log({ans2: token});
             verify(token,"arv1236", (err, decoded) => {
                if(err){
                    res.json({
                        success: 0,
                        message: "Invalid token"
                    });
                }else{
                    next();
                }
             });
        }else{
            res.json({
                success: 0,
                message: "Access denied! unauthorized user"
            });
        }
    }
}