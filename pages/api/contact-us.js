import nodemailer from "nodemailer";

export const contactUsHandler = async (req, res) => {
    try {
        const requestModel = req.body;


        const EMAIL_USER = "abelyan2421@gmail.com";
        const EMAIL_PASS = "13629Rub!!";
        const RECEIVER_EMAIL = "ru.abelyan@mail.com";

        const transporter = nodemailer.createTransport({
            // host:
            //  process.env.NODE_ENV === "production" ? "smtp.yandex.ru" : "smtp.gmail.com",
            // port: process.env.NODE_ENV === "production" ? 25 : 587,
            host: "smtp.gmail.com",
            port: 465,
            secure: true,
            auth: {
                user: EMAIL_USER,
                pass: EMAIL_PASS,
            },
        });
        debugger;
        await transporter.sendMail({
            from: `<${EMAIL_USER}>`,
            to: RECEIVER_EMAIL,
            subject: "New request!",
            text: `You have a new request from ${requestModel.email}`,
            html: `
            <p data-renderer-start-pos="89">
                <strong data-renderer-mark="true">Name: </strong> <em data-renderer-mark="true">${requestModel.name
                }</em><br>
                <strong data-renderer-mark="true">Email: </strong> <em data-renderer-mark="true">${requestModel.email
                }</em><br>
                <strong data-renderer-mark="true">Experience: </strong> <em data-renderer-mark="true">${requestModel.address
                }</em><br>
                <strong data-renderer-mark="true">Phone Number: </strong> <em data-renderer-mark="true">${requestModel.phone
                }</em><br>
                <strong data-renderer-mark="true">Message: </strong> <em data-renderer-mark="true">${requestModel.description
                }</em><br>
            </p>
            `,
        });

        res.status(200).json({ success: true, data: requestModel });
    } catch (error) {
        const typedError = error

        console.log(typedError);

        if (typedError.errors)
            return res.status(400).json({ success: false, errors: typedError.errors });

        res.status(501).json({ success: false, error: typedError });
    }
};
