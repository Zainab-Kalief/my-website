const nodemailer = require("nodemailer");

const emailSender = ""; // this is the email address you will be sending the mail from. This is expected to be a gmail.
const emailSenderPassword = ""; // password for the email above
const emailReceiver = ""; // this is the email that receives the mail

module.exports = function(app) {
  app.get("/", (request, response) => {
    response.render("index");
  });

  app.get("/about", (request, response) => {
    response.render("about");
  });

  app.get("/portfolio", (request, response) => {
    response.render("portfolio");
  });

  app.get("/experience", (request, response) => {
    response.render("experience");
  });
  app.get("/work1", (request, response) => {
    response.render("work1");
  });
  app.get("/work2", (request, response) => {
    response.render("work2");
  });
  app.get("/work3", (request, response) => {
    response.render("work3");
  });
  app.get("/work4", (request, response) => {
    response.render("work4");
  });
  app.get("/game", (request, response) => {
    response.render("game");
  });

  app.post("/email", (request, response) => {
    if (!request.body.name || !request.body.email || !request.body.message) {
      response.json({ message: "All fields are required", status: false });
    } else {
      var transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: emailSender,
          pass: emailSenderPassword
        }
      });
      var mail = {
        from: emailSender,
        to: emailReceiver,
        subject: "Someone has a crush on your website",
        text: `Hi wura it's ${request.body.name}, \nMy message: ${request.body.message} \nMy email: ${request.body.email}`
      };
      transporter.sendMail(mail, function(error, info) {
        if (error) {
          console.log(error);
          response.json({ message: "Your message was unable to deliver because of an error!", status: false });
        } else {
          console.log("Email sent: " + info.response);
          response.json({ message: "Your message has been delivered!", status: true });
        }
      });
    }
  });
};
