'use client'
import React, { FormEvent, useRef, useState } from 'react'
import emailjs from '@emailjs/browser';
import { BsCheckCircle } from 'react-icons/bs';

export default function ContactUsForm() {

  const form = useRef<HTMLFormElement | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<{
    success?: boolean
    message?: string
  }>({});
  const [showForm, setShowForm] = useState(true);


  const sendEmail = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!form.current) return


    setIsSubmitting(true)
    setSubmitStatus({})

    try {
      // Validar las variables de entorno
      const serviceId = process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID;
      const templateId = process.env.NEXT_PUBLIC_EMAIL_TEMPLATE_ID;
      const publicKey = process.env.NEXT_PUBLIC_EMAIL_PUBLIC_KEY;
  
      if (!serviceId || !templateId || !publicKey) {
        throw new Error("Missing required environment variables.");
      }
  
      // Enviar el formulario
      await emailjs.sendForm(serviceId, templateId, form.current, {
        publicKey,
      });
  
      // Si se envió correctamente
      setSubmitStatus({
        success: true,
        message: "We have received your message! We will get back to you as soon as possible.",
      });
      form.current?.reset();
      setShowForm(false); // Ocultar el formulario
      setTimeout(() => setShowForm(true), 5000);
    } catch (error) {
      // Manejar errores
      console.error("Error sending the message:", error);
      setSubmitStatus({
        success: false,
        message:
          error instanceof Error
            ? error.message
            : "Failed to send message. Please try again.",
      });
    } finally {
      // Restablecer el estado de envío
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-3xl shadow-xl border border-black/5">
      <h2 className="text-3xl font-bold mb-6">Contact Us</h2>

      {showForm ? (
        <>
          <form ref={form} onSubmit={sendEmail} className="space-y-6 text-start">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <FormLabel>First Name *</FormLabel>
                <TextInput name="first_name" placeholder="John" required />
              </div>
              <div>
                <FormLabel>Last Name *</FormLabel>
                <TextInput name="last_name" placeholder="Doe" required />
              </div>
              <div>
                <FormLabel>Email *</FormLabel>
                <TextInput
                  type="email"
                  name="user_email"
                  placeholder="example@archisoft.com"
                  required
                />
              </div>
              <div>
                <FormLabel>Phone Number</FormLabel>
                <TextInput name="phone" placeholder="+1 (555) 000-0000" />
              </div>
            </div>

            <div>
              <FormLabel>How did you hear about us? *</FormLabel>
              <TextInput name="hear_about_us" required />
            </div>

            <div>
              <FormLabel>Company Name</FormLabel>
              <TextInput name="company_name" placeholder="Your Company Ltd." />
            </div>

            <div>
              <FormLabel>Message *</FormLabel>
              <TextArea
                name="message"
                rows={4}
                placeholder="Tell us about your project..."
                required
              />
            </div>

            <div className="flex items-start">
              <input
                type="checkbox"
                required
                name="privacy_accepted"
                className="mt-1 h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              />
              <label className="ml-2 text-sm text-gray-600">
                When you contact us, ArchiSoft (acting as data controller) will process
                your personal data based on our legitimate interest. *
              </label>
            </div>

            <SubmitButton isSubmitting={isSubmitting} label="Send" />

            <StatusMessage
              success={submitStatus.success}
              message={submitStatus.message}
            />
          </form>
        </>
      ) : (
        <div className="flex flex-col items-center justify-center space-y-4">
          <BsCheckCircle color='#16a34a' size={100} />
          <p className="text-lg text-gray-700">
            We have received your message! We will get back to you as soon as possible.
          </p>
        </div>
      )}
    </div>
  );
}


const FormLabel = ({ children }: { children: React.ReactNode }) => (
  <label className="block text-sm font-medium text-gray-700 mb-1">
    {children}
  </label>
);


type TextInputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  name: string;
  placeholder?: string;
};
const TextInput = ({ name, placeholder, ...props }: TextInputProps) => (
  <input
    name={name}
    placeholder={placeholder}
    className="w-full px-4 py-2 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
    {...props}
  />
);


type TextAreaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
  name: string;
};
const TextArea = ({ name, ...props }: TextAreaProps) => (
  <textarea
    name={name}
    className="w-full px-4 py-2 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
    {...props}
  />
);


type SubmitButtonProps = {
  isSubmitting: boolean;
  label: string;
};
const SubmitButton = ({ isSubmitting, label }: SubmitButtonProps) => (
  <button
    type="submit"
    disabled={isSubmitting}
    className="w-full bg-[#2563FF] text-white py-3 px-6 rounded-2xl hover:bg-blue-700 transition duration-300 disabled:opacity-50"
  >
    {isSubmitting ? 'Sending...' : label}
  </button>
);


type StatusMessageProps = {
  success?: boolean;
  message?: string;
};
const StatusMessage = ({ success, message }: StatusMessageProps) =>
  message ? (
    <div
      className={`mt-4 p-4 rounded-md ${
        success ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
      }`}
    >
      {message}
    </div>
  ) : null;