"use server";

import nodemailer from "nodemailer";
import { z } from "zod";

import { HomeContactFormValidator } from "@/validators";

const transporter = nodemailer.createTransport({
    host: "smtp.hostinger.com",
    port: 465,
    secure: true,
    auth: {
        user: "content@swasarjan.org",
        pass: "Password@7043",
    },
});

export async function addContact(values: z.infer<typeof HomeContactFormValidator>) {
    const info = await transporter.sendMail({
        from: '"Contact Form Submission" <content@swasarjan.org>',
        to: "lakshya.creates07@gmail.com, lakshyaworkacc07@gmail.com, sbhumi294@gmail.com, kaushalgohil1999@gmail.com",
        subject: `Message from - ${values.firstName} ${values.lastName}`,
        html: `
            <div>
                <p>Hello, you have received a message from the contact form in the homepage of the swasarjan.org</p>
                <p>Message information is listed below:</p>
                <br />
                <p>First Name: <b>${values.firstName}</b>
                </p>
                <p>Last Name: <b>${values.lastName}</b></p>
                <p>Company: <b>${values.company}</b></p>            
                <p>Email: <b>${values.email}</b></p>            
                <p>Country: <b>${values.country}</b></p>            
                <p>Message: <b>${values.message}</b>
                </p>
                <img src="/swasarjan-main-logo.svg" alt="logo" />            
            </div>
        `,
    });

    console.log("message sent: ", info.messageId);
}
