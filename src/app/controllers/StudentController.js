import Student from '../models/Student';

class StudentController {
  async store(req, res) {
    console.log('########################');
    const studentExist = await Student.findOne({
      where: { email: req.body.email },
    });

    if (studentExist)
      return res.status(400).json({ error: 'Email already exists' });

    const student = await Student.create(req.body);

    return res.status(200).json(student);
  }
}

export default new StudentController();
