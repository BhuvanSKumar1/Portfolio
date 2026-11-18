
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Send } from 'lucide-react';
import GithubIcon from '../components/icons/GithubIcon';
import LinkedinIcon from '../components/icons/LinkedinIcon';
import emailjs from '@emailjs/browser';
import { personalInfo } from '../data/personal';


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
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: undefined,
    }));

    setSuccessMsg('');
    setErrorMsg('');
  };

  const validate = (): boolean => {
    const newErrors: Partial<FormState> = {};

    if (!form.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!form.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    if (!form.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }

    if (!form.message.trim()) {
      newErrors.message = 'Message is required';
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
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

  const email = personalInfo.email?.trim();

  return (
    <section
      id="contact"
      className="relative py-24 bg-bg-primary overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute top-10 left-0 w-72 h-72 bg-accent-violet/10 blur-[120px] pointer-events-none" />

      <motion.div
        className="relative z-10 max-w-7xl mx-auto px-6"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8 }}
      >
        {/* Heading */}
        <h2 className="text-3xl lg:text-5xl font-bold text-center text-foreground mb-6">
          Let's Work Together
        </h2>

        <p className="text-center text-xl md:text-2xl font-medium text-violet-300 mb-4">
          <a href="mailto:bhuvanskumar2005@gmail.com" className="hover:underline">bhuvanskumar2005@gmail.com</a>
        </p>
        <p className="max-w-2xl mx-auto text-center text-foreground/60 mb-14 leading-relaxed">
          I'm open to software engineering opportunities,
          collaborations and interesting projects.
          Feel free to reach out!
        </p>

        <div className="grid gap-8 lg:grid-cols-2 items-start">

          {/* Contact Information */}
          <motion.div
            className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 flex flex-col gap-8"
            whileHover={{ y: -4 }}
            transition={{ duration: 0.3 }}
          >
            <div>
              <h3 className="text-2xl font-semibold text-foreground mb-3">
                Get in Touch
              </h3>

              <p className="text-foreground/60 leading-relaxed">
                Have an opportunity or an interesting idea?
                I'd love to hear from you.
              </p>
            </div>

            {/* Email */}
            {email && (
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-accent-violet/10">
                  <Mail size={24} className="text-accent-violet" />
                </div>

                <div>
                  <p className="text-sm text-foreground/50">Email</p>
                  <a
                    href={`mailto:${email}`}
                    className="text-foreground hover:text-accent-violet transition break-all"
                  >
                    {email}
                  </a>
                </div>
              </div>
            )}

            <div className="flex items-center space-x-4 text-sm text-foreground/50">
              <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-accent-violet transition">
                <GithubIcon size={20} className="text-gray-200" />
                GitHub
              </a>
              <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-accent-violet transition">
                <LinkedinIcon size={20} className="text-gray-200" />
                LinkedIn
              </a>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 flex flex-col gap-5"
            onSubmit={handleSubmit}
          >
            <h3 className="text-2xl font-semibold text-foreground mb-2">
              Send a Message
            </h3>

            {/* Name */}
            <div>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={form.name}
                onChange={handleChange}
                aria-invalid={!!errors.name}
                className={`w-full px-4 py-3 rounded-lg bg-transparent border ${errors.name ? 'border-red-500' : 'border-white/20'
                  } text-foreground placeholder:text-foreground/40 focus:outline-none focus:border-accent-violet`}
              />
              {errors.name && (
                <p className="text-red-400 text-sm mt-1">{errors.name}</p>
              )}
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
                className={`w-full px-4 py-3 rounded-lg bg-transparent border ${errors.email ? 'border-red-500' : 'border-white/20'
                  } text-foreground placeholder:text-foreground/40 focus:outline-none focus:border-accent-violet`}
              />
              {errors.email && (
                <p className="text-red-400 text-sm mt-1">{errors.email}</p>
              )}
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
                className={`w-full px-4 py-3 rounded-lg bg-transparent border ${errors.subject ? 'border-red-500' : 'border-white/20'
                  } text-foreground placeholder:text-foreground/40 focus:outline-none focus:border-accent-violet`}
              />
              {errors.subject && (
                <p className="text-red-400 text-sm mt-1">{errors.subject}</p>
              )}
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
                className={`w-full px-4 py-3 rounded-lg bg-transparent border ${errors.message ? 'border-red-500' : 'border-white/20'
                  } text-foreground placeholder:text-foreground/40 focus:outline-none focus:border-accent-violet resize-none`}
              />
              {errors.message && (
                <p className="text-red-400 text-sm mt-1">{errors.message}</p>
              )}
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="flex items-center justify-center gap-2 w-full px-6 py-3 rounded-lg bg-accent-violet text-white font-semibold hover:bg-accent-blue transition-all duration-300 disabled:opacity-50"
            >
              {loading ? 'Sending...' : 'Send Message'}
              <Send size={18} />
            </button>

            {/* Success / Error messages */}
            {successMsg && (
              <p className="text-green-400 text-sm text-center mt-2">{successMsg}</p>
            )}
            {errorMsg && (
              <p className="text-red-400 text-sm text-center mt-2">{errorMsg}</p>
            )}

          </motion.form>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
