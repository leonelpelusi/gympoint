import User from '../models/User';

class UserController {
  async store(req, res) {
    const userExist = await User.findOne({
      where: { email: req.body.email },
    });

    if (userExist)
      return res.status(400).json({ error: 'Email already exists' });

    const user = await User.create(req.body);

    return res.status(200).json(user);
  }
}

export default new UserController();
