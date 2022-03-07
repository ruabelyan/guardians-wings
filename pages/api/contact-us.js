import nodemailer from "nodemailer";

const contactUsHandler = async (req, res) => {
  try {
    const requestModel = req.body;

    const EMAIL_USER = "abelyan2421@gmail.com";
    const EMAIL_PASS = "13629Rub!!";
    const RECEIVER_EMAIL = "ru.abelyan@mail.ru";

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: EMAIL_USER,
        pass: EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `<${EMAIL_USER}>`,
      to: RECEIVER_EMAIL,
      subject: "New request!",
      text: `You have a new request from ${requestModel.email}`,
      html: `
            <p data-renderer-start-pos="89">
                <strong data-renderer-mark="true">Name: </strong> <em data-renderer-mark="true">${requestModel.name}</em><br>
                <strong data-renderer-mark="true">Email: </strong> <em data-renderer-mark="true">${requestModel.email}</em><br>
                <strong data-renderer-mark="true">Phone Number: </strong> <em data-renderer-mark="true">${requestModel.phone}</em><br>
                <strong data-renderer-mark="true">Message: </strong> <em data-renderer-mark="true">${requestModel.description}</em><br>
            </p>
            `,
    });

    res.status(200).json({ success: true, data: requestModel });
    console.log(res)
  } catch (error) {
    const typedError = error;

    console.log(typedError);

    if (typedError.errors)
      return res
        .status(400)
        .json({ success: false, errors: typedError.errors });

    res.status(501).json({ success: false, error: typedError });
  }
};

export default contactUsHandler;
