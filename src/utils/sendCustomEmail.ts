import emailjs from "@emailjs/browser";

const sendCustomEmail = async (data: any) => {
    emailjs.init(import.meta.env.VITE_EMAIL_PUBLIC_KEY);

    try {
        const response = await emailjs.send(
            import.meta.env.VITE_EMAIL_SERVICE_ID,
            import.meta.env.VITE_EMAIL_TEMPLATE_ID,
            {
                name: data.name,
                companyName: data.companyName,
                email: data.email,
                subject: data.subject,
                message: data.message,
                reply_to: data.email,
            }
        );

     
        // Return a success flag or response for handling in the form
        return { success: true, response };
    } catch (error) {
        console.error("Error sending email:", error);

        // Return failure flag or error response
        return { success: false, error };
    }
}

export { sendCustomEmail };
