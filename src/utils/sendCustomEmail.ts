import emailjs from "@emailjs/browser";

const sendCustomEmail = async (data: any) => {
    emailjs.init(import.meta.env.VITE_EMAIL_PUBLIC_KEY);

    emailjs.send(
        import.meta.env.VITE_EMAIL_SERVICE_ID ,
        import.meta.env.VITE_EMAIL_TEMPLATE_ID,
        {
            name: data.name,
            companyName: data.companyName,
            email: data.email,
            subject: data.subject,
            message: data.message,
        }
    ).then((response) => {
        console.log("Email sent successfully:", response.text);
    }).catch((error) => {
        console.error("Error sending email:", error);
    })
}

export {sendCustomEmail} 