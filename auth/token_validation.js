const { verify } = require("jsonwebtoken");

module.exports = {
    checkToken: (req, res, next) => {
        let token = req.headers.authorization;
        console.log({ans: token});
        if(token){
             token = token.slice(7);
             verify(token, "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyZXN1bHQiOnsiSWQiOjEsImZpcnN0X25hbWUiOiJzYXR5YW0iLCJsYXN0X05hbWUiOiJ0aGFrdXIiLCJnZW5kZXIiOiJNIiwiZW1haWwiOiJzYXR5YW1AZ21haWwuY29tIiwibnVtYmVyIjo3OTc0MjU1NTV9LCJpYXQiOjE3MDc5MDUyMzMsImV4cCI6MTcwNzkxMjQzM30.Em93ocUmgrDKHr35t-mABHPpJ9zlXoxGUw3EAldkiHI", (err, decoded) => {
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