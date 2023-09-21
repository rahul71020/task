const registerModal = require('../Models/index') 


module.exports.Register = async (req, res) => {
  try { 
    const { email } = req.body
    try {
      const { First_Name, Last_Name, email, selectedCountry, selectedState, selectedCity, Gender, Date_of_Birth, Age } = req.body
      if (!(First_Name && Last_Name && email && selectedCountry && selectedState && selectedCity && Gender && Date_of_Birth, Age)) {
        res.status(400).json({ status: false, message: 'all input are required' })
      }
      const userExist = await registerModal.findOne({ email });
      if (userExist) {
        return res.status(422).json({ error: "Email already exists" });
      }
      else { 
        const dataToCreate = { First_Name, Last_Name, email, selectedCountry, selectedState, selectedCity, Gender, Date_of_Birth, Age}
        const RegisterResult = await registerModal.create(dataToCreate)
        res.status(200).json({
          status: true, message: 'inseted successfully',
          RegisterResult: { 
            "email": RegisterResult.email,
          }
        })
        // res.status(200).json({ status: true, message: 'inseted successfully', RegisterResult,token:token })
      }
    } catch (error) {
      console.log(error)
      res.status(400).json({ status: false, message: 'failed' })
    }
    
  } catch (error) {

  }
}
// module.exports.login = async (req, res) => {
//     try {
//         const { email, password } = req.body
//         const user = await Admindata.Admin.findOne({ email: email });
//         if (!user) {
//             res.status(400).json({ status: false, message: 'user not found' })
//         } else {
//             const compair = await bcrypt.compare(password, user.password)
//             if (compair) {
//                 const jwtSecret = "rahul1234567890"
//                 let token = jwt.sign({ email, password }, jwtSecret);
//                 user.token = token
//                 await user.save()
//                 const result = {
//                     token: user.token,
//                     email: user.email,
//                     id: user._id,
//                     message: "Admin login successfully"
//                 }
//                 res.status(200).json({ result })
//             } else {
//                 res.status(400).json({ status: false, message: "invalid password " })
//             }

//         }
//     } catch (error) {
//         res.status(500).json({ status: false, message: "internal server error" })
//     }
// }