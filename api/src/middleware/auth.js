const jsonwebtoken = require("jsonwebtoken");
const UserRepository = require("../repositories/UserRepository.js")

const PRIVATE_KEY = "70dd049806c1663430a0456c4467be548289a8cb7ce1fcdf3301898ae32e0b0f"

module.exports = async function tokenValited(req, res, next) {

  const authHeader = req.headers.authorization;
  if(!authHeader) return res.status(401).send("Access token not provided.");

  const [authScheme, authToken] = authHeader.split(" ");

  if (authScheme !== "Bearer") {
    return res.status(401).json({ error: "Invalid authentication scheme." });
  }

  try {
    const {username} = jsonwebtoken.verify(authToken, PRIVATE_KEY);
    const res = await UserRepository.getUserByUsername(username)
    
    if(!res) return res.send(401).json({ message: "Invalid token" });

    return next();
  } catch(error) {
    console.log(error);
    return res.status(401).json({ message: "Invalid token" });
  }
}