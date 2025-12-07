'use client';

import { useState } from 'react';
import { BiLoaderAlt } from 'react-icons/bi';
import SectionWrapper from './SectionWrapper';
import { toast } from 'react-toastify';
import { Mail, Phone, MapPin, Linkedin } from 'lucide-react';
import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 25 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const staggerParent = {
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const staggerItem = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

interface Props {
  contactData: {
    email: string;
    phone: string;
    location: string;
    linkedIn: string;
  };
}

const Contact = ({ contactData }: Props) => {
  const { email, phone, linkedIn, location } = contactData;

  const [values, setValues] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setValues((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const formData = new FormData();
      formData.append('name', values.name);
      formData.append('email', values.email);
      formData.append('message', values.message);

      const res = await fetch(
        'https://formsubmit.co/ajax/chaudharyawais.pk@gmail.com',
        {
          method: 'POST',
          body: formData,
          headers: {
            Accept: 'application/json',
          },
        }
      );

      const data = await res.json();

      if (data.success === 'true') {
        toast.success('Message sent successfully!');
        setValues({ name: '', email: '', message: '' });
      } else {
        toast.error(data.message || 'Something went wrong');
      }
    } catch (error) {
      toast.error('Failed to send message');
    } finally {
      setLoading(false);
    }
  };

  return (
    <SectionWrapper
      id="contact"
      className="mx-4 lg:mx-0 pb-4 md:pb-24 relative z-10 !overflow-visible"
    >
      {/* Title Animation */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false }}
        className="text-4xl text-center font-semibold"
      >
        Contact <span className="text-violet-600">Me</span>
      </motion.div>

      <div className="w-full lg:w-5/6 2xl:w-3/4 mt-10 md:mt-16 mx-auto flex flex-col md:flex-row gap-10 rounded-xl">
        {/* LEFT CONTACT BOX with slide left animation */}
        <motion.div
          variants={fadeUp}
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="w-full md:w-1/2 bg-white dark:bg-grey-900 rounded-2xl p-6 shadow-md relative z-10"
        >
          <h3 className="text-xl font-semibold mb-3">Get in Touch</h3>
          <p className="text-gray-600 dark:text-gray-300 text-sm mb-6">
            I am always interested in discussing opportunities, projects, and
            ideas to create exceptional digital experiences.
          </p>

          {/* Stagger Animation for Items */}
          <motion.div
            variants={staggerParent}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="flex flex-col gap-7"
          >
            {/* EMAIL */}
            <motion.button
              variants={staggerItem}
              onClick={() => (window.location.href = `mailto:${email}`)}
              className="flex items-start gap-4 text-left group"
            >
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="w-11 h-11 rounded-xl flex items-center justify-center shadow-md shrink-0 transition"
                style={{ background: '#3B82F6' }}
              >
                <Mail className="text-white w-5 h-5" />
              </motion.div>

              <div className="min-w-0 max-w-full">
                <p className="font-semibold text-gray-900 dark:text-white">
                  Email
                </p>
                <p className="text-gray-600 dark:text-gray-300 text-sm break-all group-hover:underline">
                  {email}
                </p>
              </div>
            </motion.button>

            {/* PHONE */}
            <motion.button
              variants={staggerItem}
              onClick={() => (window.location.href = `tel:${phone}`)}
              className="flex items-start gap-4 text-left group"
            >
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="w-11 h-11 rounded-xl flex items-center justify-center shadow-md shrink-0 transition"
                style={{ background: '#10B981' }}
              >
                <Phone className="text-white w-5 h-5" />
              </motion.div>

              <div className="min-w-0 max-w-full">
                <p className="font-semibold text-gray-900 dark:text-white">
                  Phone
                </p>
                <p className="text-gray-600 dark:text-gray-300 text-sm break-all group-hover:underline">
                  {phone}
                </p>
              </div>
            </motion.button>

            {/* LOCATION */}
            <motion.div
              variants={staggerItem}
              className="flex items-start gap-4"
            >
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="w-11 h-11 rounded-xl flex items-center justify-center shadow-md shrink-0"
                style={{ background: '#EC4899' }}
              >
                <MapPin className="text-white w-5 h-5" />
              </motion.div>

              <div className="min-w-0 max-w-full">
                <p className="font-semibold text-gray-900 dark:text-white">
                  Location
                </p>
                <p className="text-gray-600 dark:text-gray-300 text-sm break-all">
                  {location}
                </p>
              </div>
            </motion.div>

            {/* LINKEDIN */}
            <motion.button
              variants={staggerItem}
              onClick={() => window.open(linkedIn, '_blank')}
              className="flex items-start gap-4 text-left group"
            >
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="w-11 h-11 rounded-xl flex items-center justify-center shadow-md shrink-0 transition"
                style={{ background: '#2563EB' }}
              >
                <Linkedin className="text-white w-5 h-5" />
              </motion.div>

              <div className="min-w-0 max-w-full">
                <p className="font-semibold text-gray-900 dark:text-white">
                  LinkedIn
                </p>
                <p className="text-gray-600 dark:text-gray-300 text-sm break-all group-hover:underline">
                  {linkedIn
                    .replace('https://www.linkedin.com/in/', '')
                    .replace('http://www.linkedin.com/in/', '')
                    .replace('www.linkedin.com/in/', '')
                    .replace('linkedin.com/in/', '')
                    .replace('/', '')}
                </p>
              </div>
            </motion.button>
          </motion.div>
        </motion.div>

        {/* RIGHT FORM with slide right animation */}
        <motion.div
          variants={fadeUp}
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="w-full md:w-1/2 bg-white dark:bg-grey-900 rounded-2xl p-6 shadow-md relative z-10"
        >
          <h3 className="text-xl font-semibold mb-6">Send a Message</h3>

          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-4 rounded-xl"
          >
            <input
              onChange={handleChange}
              required
              value={values.name}
              name="name"
              type="text"
              placeholder="Your full name"
              className="outline-none bg-gray-100 dark:bg-grey-800 placeholder-gray-400 rounded-lg py-3 px-4 w-full"
            />

            <input
              onChange={handleChange}
              required
              value={values.email}
              name="email"
              type="email"
              placeholder="your@email.com"
              className="outline-none bg-gray-100 dark:bg-grey-800 placeholder-gray-400 rounded-lg py-3 px-4 w-full"
            />

            <textarea
              onChange={handleChange}
              required
              value={values.message}
              name="message"
              rows={4}
              placeholder="Tell me about your project or idea..."
              className="outline-none resize-none bg-gray-100 dark:bg-grey-800 placeholder-gray-400 rounded-lg py-3 px-4 w-full"
            />

            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              disabled={loading}
              className="px-4 py-3 bg-gradient-to-r from-violet-400 via-violet-600 to-violet-800 hover:opacity-90 transition-all text-white rounded-lg disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {loading ? (
                <>
                  <BiLoaderAlt className="animate-spin" /> Sending...
                </>
              ) : (
                <>Send Message</>
              )}
            </motion.button>
          </form>
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

export default Contact;
