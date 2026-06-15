import axios from "axios";
import emailjs from "@emailjs/browser";

const API_URL =
  "https://portfolio-backend-gbth.onrender.com/api/contact";

export const sendContactMessage = async (data) => {

  // 1. Save to database

  await axios.post(API_URL, data);


  // 2. Send notification to yourself

  await emailjs.send(

    "service_portfolio",

    "template_er5jptv",

    {
      from_name: data.name,

      from_email: data.email,

      subject: data.subject,

      message: data.message,

      to_email: "chotaidisha24@gmail.com",

    },

    "GqW5yTLUdC8TWuyws"

  );


  // 3. Send auto reply

  await emailjs.send(

    "service_portfolio",

    "template_tg0uowi",

    {
      from_name: data.name,

      from_email: data.email,

      subject: data.subject,

    },

    "GqW5yTLUdC8TWuyws"

  );

};