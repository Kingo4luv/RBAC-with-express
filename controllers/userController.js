const {User} = require("../models");
const jwt = require("jsonwebtoken");

exports.signup = async (req, res) => {

  const { name, email, password, role } = req.body;

  try {
    let user = await User.findOne({ where: { email } });
    if (user) {
      return res.status(422).json({ errors: [{ msg: "User already exists" }] });
    }

    await User.create({ name, email, password, role });

    res.status(201).json({msg: "Sign up successful"});

  } catch (error) {
    console.error(error.message);
    res.status(500).send("server error");
  }
};
exports.login = async (req, res) => {

  const { email, password } = req.body;

  try {
    let user = await User.findOne({ where: { email, password } });
    if (!user) {
      return res.status(422).json({ errors: [{ msg: "Invalid Details" }] });
    }

    const userJwt = jwt.sign({
            user
        },
        "qwerty"
    );
    req.session = {
        jwt: userJwt,
    };

    res.status(200).json({msg: "Login successful"});

  } catch (error) {
    console.error(error.message);
    res.status(500).send("server error");
  }
};
exports.logout = async (req, res) => {
    req.session = null;
    res.send({msg: "Logout successful"});
};