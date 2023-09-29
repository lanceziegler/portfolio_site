// export const GET = async () => {
//     return new Response(JSON.stringify({ name: 'Lance' }), { status: 200 });
//   };

// import nodemailer from 'nodemailer';

// export default async function handler(req: any, res: any) {
//   if (req.method === 'POST') {
//     try {
//       const { email, name, message } = req.body;

//       // Create a Nodemailer transporter with your email provider settings
//       const transporter = nodemailer.createTransport({
//         // Configure your email provider here
//         service: 'Gmail',
//         auth: {
//           user: process.env.email,
//           pass: process.env.password,
//         },
//       });

//       // Email content
//       const mailOptions = {
//         from: process.env.email,
//         to: process.env.email, // Send the email to yourself
//         subject: 'New Contact Form Submission',
//         text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
//       };

//       // Send the email
//       await transporter.sendMail(mailOptions);

//       res.status(200).json({ message: 'Email sent successfully' });
//     } catch (error) {
//       console.error(error);
//       res.status(500).json({ message: 'Error sending email' });
//     }
//   } else {
//     res.status(405).json({ message: 'Method not allowed' });
//   }
// }

import { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

export const config = {
  api: {
    bodyParser: true,
  },
};

export async function POST(req: Request) {
  try {
    const res = await req.json();

    // Create a Nodemailer transporter with your email provider settings
    const transporter = nodemailer.createTransport({
      // Configure your email provider here
      service: 'Gmail',
      auth: {
        user: process.env.email,
        pass: process.env.password,
      },
    });

    // Email content
    const mailOptions = {
      from: process.env.email,
      to: process.env.email, // Send the email to yourself
      subject: 'New Contact Form Submission',
      text: `Name: ${res.name}\nEmail: ${res.email}\nMessage: ${res.message}`,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    // res.status(200).json({ message: 'Email sent successfully' });
    return new Response(
      JSON.stringify({ message: 'Email sent successfully' }),
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    // res.status(500).json({ message: 'Error sending email' });
    return new Response(JSON.stringify({ message: 'Error sending email' }), {
      status: 200,
    });
  }
}
