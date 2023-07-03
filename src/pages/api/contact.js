const mail = require("@sendgrid/mail");
mail.setApiKey(process.env.SENDGRID_API_KEY);

export default async (req, res) => {
  try {
    const body = JSON.parse(req.body);
    const message = `
      Ім'я: ${body.name}\r\n
      Телефон: ${body.phone}\r\n
      Послуга: ${body.service}
    `;
    const data = {
      to: "alex.school.ua@gmail.com",
      from: "alex.school.ua@gmail.com",
      subject: `Нове повідомлення з сайту від ${body.name}`,
      text: message,
      html: message.replace(/\r\n/g, "<br />"),
    };
    const sended = await mail
      .send(data)
      .then(() => {
        console.log("Email sent");
      })
      .catch((error) => {
        console.error(error);
      });
    console.log("sended: ", sended);

    res.status(200).json({ status: "OK" });
    return { success: true };
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred" });
    return { succes: false };
  }

  //   const sended = await mail.send(data);
  //   console.log("sended: ", sended);
  //   return { success: true };
  // } catch (error) {
  //   console.error(error);
  //   return { succes: false };
  // }
};
