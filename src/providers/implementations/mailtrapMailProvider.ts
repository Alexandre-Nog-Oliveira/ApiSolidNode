import { IMailProvider, IMessagem } from "../IMailProvider";
import Mail from "nodemailer/lib/mailer";
import nodemailer from 'nodemailer'

export class MailTrapMailProvider implements IMailProvider {

    private transporter : Mail;

    constructor(){
        this.transporter = nodemailer.createTransport({
            host: 'smtp.mailtrap.io',
            port: 2525,
            auth: {
                user: 'user',
                pass: 'password'
            }
        })
    }

   async  sendMail(message: IMessagem): Promise<void> {
        await this.transporter.sendMail({
            to: {
                name: message.to.name,
                address: message.to.email
            },
            from: {
                name: message.from.name,
                address: message.from.email
            },
            subject: message.subject,
            html: message.body
        })
    }
}