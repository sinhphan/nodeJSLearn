
const events = require('events');
const mail = require('../mail/mail')
const mailAction = new mail()
const eventEmitter = new events.EventEmitter();

const sendEmailHandle = (mailTo, content, sub) => {
  mailAction.sendMail(mailTo, content, sub)
}

eventEmitter.on('send contact', sendEmailHandle)