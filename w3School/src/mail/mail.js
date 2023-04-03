const nodeMailer = require('nodemailer');

class Mail {
  #transporter;
  #settings = {
    serivce: 'gmail',
    auth: {
      user: 'sinhp00@gmail.com',
      pass: 'Sinhphana3@',
    },
  };
  #mailToOptions = {
    from: 'sinhp00@gmail.com',
    to: '',
    subject: '',
    text: '',
  };

  constructor() {
    this.#transporter = nodeMailer.createTransport(this.#settings);
  }

  sendMail(mailTo, content, subject = 'contact') {
    this.#mailToOptions = {
      ...this.#mailToOptions,
      to: mailTo,
      subject: subject,
      text: content,
    }

    this.#transporter.sendMail(this.#mailToOptions, (err, info) => {
      if (err) return console.log(err);
      console.log('Email send: ' + info.response)
    });

  }
}

module.exports = Mail