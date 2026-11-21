import { useState } from 'react';
import type { ChangeEvent, FormEvent } from 'react';
import { Mail, Send } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { personalInfo } from '../data/personal';
import { motion } from 'framer-motion';

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const initialForm: FormState = {
  name: '',
  email: '',
  subject: '',
  message: '',
};

const Contact = () => {
  const [form, setForm] = useState<FormState>(initialForm);
  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: undefined }));
    setSuccessMsg('');
    setErrorMsg('');
  };

  const validate = (): boolean => {
    const newErrors: Partial<FormState> = {};
    if (!form.name.trim()) newErrors.name = 'Name is required';
    if (!form.email.trim()) newErrors.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      newErrors.email = 'Please enter a valid email';
    if (!form.subject.trim()) newErrors.subject = 'Subject is required';
    if (!form.message.trim()) newErrors.message = 'Message is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validate()) return;
    setLoading(true);
    setSuccessMsg('');
    setErrorMsg('');
    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID as string;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string;
      const templateParams = {
        name: form.name,
        email: form.email,
        subject: form.subject,
        message: form.message,
      };
      await emailjs.send(serviceId, templateId, templateParams, publicKey);
      setSuccessMsg('Message sent successfully!');
      setForm(initialForm);
    } catch (err) {
      console.error(err);
      setErrorMsg('Failed to send message. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

// Extract display labels and email
  const email = personalInfo.email?.trim() ?? '';


  return (
    <section id="contact" className="relative py-12 sm:py-16 bg-bg-primary overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-10 left-0 w-72 h-72 bg-accent-violet/10 blur-[120px] pointer-events-none" />
      <motion.div
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8 }}
      >
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center text-[#6D28D9] mb-6">
          Contact
        </h2>
        <div className="h-1 w-24 mx-auto bg-gradient-to-r from-violet-500 to-blue-500 opacity-75 rounded" />
        <p className="text-center text-xl md:text-2xl font-medium text-[#6D28D9] mb-6">
          <a href={`mailto:${email}`} className="text-[#6D28D9] hover:underline">
            {email}
          </a>
        </p>
        <p className="max-w-2xl mx-auto text-center text-foreground mb-8 leading-relaxed">
          I'm open to software engineering opportunities, collaborations and interesting projects. Feel free to reach out!
        </p>

        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 items-start">
          {/* Contact Information */}
          <motion.div
            className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-4 sm:p-6 flex flex-col gap-8"
            whileHover={{ y: -4 }}
            transition={{ duration: 0.3 }}
          >
            <div>
              <h3 className="text-2xl font-semibold text-foreground mb-3">Get in Touch</h3>
              <p className="text-foreground/60 leading-relaxed">
                Have an opportunity or an interesting idea? I'd love to hear from you.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="grid gap-4">
              {/* Email Card */}
              {email && (
                <motion.div
                  className="bg-violet-100/30 border border-violet-300 rounded-2xl p-4 flex items-center gap-4 shadow-md min-h-[80px]"
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="p-3 rounded-xl bg-accent-violet/10">
                    <Mail size={24} className="text-accent-violet" />
                  </div>
                  <div>
                    <p className="text-sm text-[#1E1B4B]">Email</p>
                    <a
                      href={`mailto:${email}`}
                      className="text-[#6D28D9] hover:text-accent-violet transition break-all"
                    >
                      {email}
                    </a>
                  </div>
                </motion.div>
              )}

              {/* GitHub Card */}
              <motion.div
                className="bg-violet-100/30 border border-violet-300 rounded-2xl p-4 flex items-center gap-4 shadow-md min-h-[80px]"
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
              >
                <div className="p-3 rounded-xl bg-accent-violet/10">
                  <span className="text-accent-violet">GitHub</span>
                </div>
                <div>
                  <p className="text-sm text-[#1E1B4B]">GitHub</p>
                  <a
                    href={personalInfo.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#6D28D9] hover:text-accent-violet transition"
                  >
                    {personalInfo.github}
                  </a>
                </div>
              </motion.div>

              {/* LinkedIn Card */}
              <motion.div
                className="bg-violet-100/30 border border-violet-300 rounded-2xl p-4 flex items-center gap-4 shadow-md min-h-[80px]"
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
              >
                <div className="p-3 rounded-xl bg-accent-violet/10">
                  <span className="text-accent-violet">LinkedIn</span>
                </div>
                <div>
                  <p className="text-sm text-[#1E1B4B]">LinkedIn</p>
                  <a
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#6D28D9] hover:text-accent-violet transition"
                  >
                    {personalInfo.linkedin}
                  </a>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 flex flex-col gap-5"
            onSubmit={handleSubmit}
          >
            <h3 className="text-2xl font-semibold text-foreground mb-2">Send a Message</h3>

            {/* Name */}
            <div>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={form.name}
                onChange={handleChange}
                aria-invalid={!!errors.name}
                className={`w-full px-4 py-3 rounded-lg bg-gray-800/60 border ${errors.name ? 'border-red-500' : 'border-gray-500'} text-white placeholder:text-gray-400 focus:outline-none focus:border-accent-violet transition-colors duration-300`}
              />
              {errors.name && <p className="text-red-400 text-sm mt-1">{errors.name}</p>}
            </div>

            {/* Email */}
            <div>
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={form.email}
                onChange={handleChange}
                aria-invalid={!!errors.email}
                className={`w-full px-4 py-3 rounded-lg bg-gray-800/60 border ${errors.email ? 'border-red-500' : 'border-gray-500'} text-white placeholder:text-gray-400 focus:outline-none focus:border-accent-violet transition-colors duration-300`}
              />
              {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email}</p>}
            </div>

            {/* Subject */}
            <div>
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={form.subject}
                onChange={handleChange}
                aria-invalid={!!errors.subject}
                className={`w-full px-4 py-3 rounded-lg bg-gray-800/60 border ${errors.subject ? 'border-red-500' : 'border-gray-500'} text-white placeholder:text-gray-400 focus:outline-none focus:border-accent-violet transition-colors duration-300`}
              />
              {errors.subject && <p className="text-red-400 text-sm mt-1">{errors.subject}</p>}
            </div>

            {/* Message */}
            <div>
              <textarea
                name="message"
                placeholder="Your Message"
                rows={5}
                value={form.message}
                onChange={handleChange}
                aria-invalid={!!errors.message}
                className={`w-full px-4 py-3 rounded-lg bg-gray-800/60 border ${errors.message ? 'border-red-500' : 'border-gray-500'} text-white placeholder:text-gray-400 focus:outline-none focus:border-accent-violet resize-none`}
              />
              {errors.message && <p className="text-red-400 text-sm mt-1">{errors.message}</p>}
            </div>

            {/* Submit */}
            <button
  type="submit"
  disabled={loading}
  className="flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-violet-500 to-blue-500 px-6 py-3 text-white hover:from-violet-600 hover:to-blue-600 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-violet-300 transform transition-all duration-300 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-violet-300"
>
  {loading ? (
    <div className="flex items-center gap-2">
      <svg
        className="w-4 h-4 text-white animate-spin"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="4"
        ></circle>
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
        ></path>
      </svg>
      Sending...
    </div>
  ) : (
    <>
      <Send size={20} />
      Send Message
    </>
  )}
</button>

            {successMsg && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-green-400 mt-2"
              >
                {successMsg}
              </motion.p>
            )}
            {errorMsg && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-red-400 mt-2"
              >
                {errorMsg}
              </motion.p>
            )}
          </motion.form>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
