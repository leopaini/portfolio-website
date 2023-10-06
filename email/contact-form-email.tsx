import React from "react";

type ContactFormEmailProps = {
  email: string;
  message: string;
};

export const ContactFormEmail: React.FC<Readonly<ContactFormEmailProps>> = ({
  email,
  message
}) => (
  <>
    <h1>New message from your portfolio site</h1>
    <div className="bg-gray-100">
      <section className="bg-white borderBlack my-10 px-10 py-4 rounded-md">
        <h2 className="leading-tight">
          You received the following message from the contact form:
        </h2>
        <p>{message}</p>
        The sender's e-mail is: {email}
      </section>
    </div>
  </>
);
