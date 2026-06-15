import axios from "axios";
import emailjs from "@emailjs/browser";

const API_URL =
  "https://portfolio-backend-gbth.onrender.com/api/contact";

const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;

const NOTIFICATION_TEMPLATE =
  import.meta.env.VITE_EMAILJS_NOTIFICATION_TEMPLATE;

const AUTOREPLY_TEMPLATE =
  import.meta.env.VITE_EMAILJS_AUTOREPLY_TEMPLATE;

export const sendContactMessage = async (data) => {

  // 1. Save to database

  await axios.post(API_URL, data);


  // 2. Send notification to yourself

  await emailjs.send(

    SERVICE_ID,

    NOTIFICATION_TEMPLATE,

    {
      from_name: data.name,

      from_email: data.email,

      subject: data.subject,

      message: data.message,

      to_email: "chotaidisha24@gmail.com",

    },

    PUBLIC_KEY

  );


  // 3. Send auto reply

  await emailjs.send(

    SERVICE_ID,

    AUTOREPLY_TEMPLATE,

    {
      from_name: data.name,

      from_email: data.email,

      subject: data.subject,

    },

    PUBLIC_KEY

  );

};