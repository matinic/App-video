// Require the cloudinary library
require('dotenv').config()
const cloudinary = require('cloudinary').v2;
const router = (require('express')).Router()
const auth = require('../middlewares/JWT_verifyToken')
  
  // Server-side function used to sign an Upload Widget upload.

router.get('/',auth,(req,res)=>{

      const timestamp = Math.round((new Date).getTime()/1000);

      const params = {
        timestamp: timestamp
      };
    
      const signature = cloudinary.utils.api_sign_request(
          params,
          process.env.API_SECRET
        );

        return res.status(200).json({timestamp,signature})
    
})

module.exports = router
