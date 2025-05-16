import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

const ContactForm: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const contactInfo = [
    {
      title: "Email",
      value: "fo.agres.zyrach.m01@gmail.com",
      icon: "📧"
    },
    {
      title: "Phone",
      value: "(+63) 9933680436",
      icon: "📱"
    },
    {
      title: "Location",
      value: "Batangas City, CALABARZON",
      icon: "📍"
    }
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.current) return;

    try {
      setIsSubmitting(true);
      setSubmitStatus({ type: null, message: '' });
      console.log('Sending email with data:', formData);

      const result = await emailjs.sendForm(
        'service_aixqk9g',
        'template_gtbz8a7',
        form.current,
        'c_l3SCXhBxY5u23kC'
      );

      console.log('Email sent successfully:', result);
      setSubmitStatus({
        type: 'success',
        message: 'Message sent successfully! I will get back to you soon.'
      });
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitStatus({
        type: 'error',
        message: 'Failed to send message. Please try again or contact me directly via email.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const formVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const inputVariants = {
    focus: { scale: 1.02, transition: { duration: 0.2 } }
  };

  return (
    <section id="contact" className="min-h-screen bg-[#13111C] py-20 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.1, 0.15, 0.1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: "reverse"
          }}
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(157,140,255,0.15),transparent_50%)]"
        />
        <motion.div
          animate={{
            scale: [1.1, 1, 1.1],
            opacity: [0.1, 0.15, 0.1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            repeatType: "reverse",
            delay: 1
          }}
          className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(123,110,219,0.15),transparent_50%)]"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-4 text-[#E2E1E6]"
        >
          Contact Me
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center text-[#E2E1E6] opacity-90 mb-12 max-w-2xl mx-auto"
        >
          Have a question or want to work together? Feel free to reach out!
        </motion.p>

        {/* Contact Form */}
        <motion.div
          className="max-w-lg mx-auto mb-16"
          variants={formVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.2 }}
        >
          <motion.form 
            ref={form}
            onSubmit={handleSubmit} 
            className="rounded-xl shadow-lg p-8 space-y-6 bg-[#1A1625] border border-[#2D2B3D]"
            whileHover={{ boxShadow: "0 25px 30px -5px rgba(0, 0, 0, 0.5), 0 15px 15px -5px rgba(0, 0, 0, 0.4)" }}
          >
            {submitStatus.type && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`p-4 rounded-lg ${
                  submitStatus.type === 'success' 
                    ? 'bg-green-500/10 text-green-500 border border-green-500/20' 
                    : 'bg-red-500/10 text-red-500 border border-red-500/20'
                }`}
              >
                {submitStatus.message}
              </motion.div>
            )}

            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ amount: 0.2 }}
              transition={{ delay: 0.1 }}
            >
              <motion.label 
                htmlFor="name" 
                className="block text-sm font-medium text-[#9D8CFF] mb-1"
                whileHover={{ color: "#7B6EDB" }}
              >
                Name
              </motion.label>
              <motion.input
                variants={inputVariants}
                whileFocus="focus"
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-[#13111C] border border-[#2D2B3D] rounded-lg focus:ring-2 focus:ring-[#7B6EDB] focus:border-[#7B6EDB] transition-colors text-[#E2E1E6] placeholder-[#E2E1E6]/50"
                placeholder="Your name"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ amount: 0.2 }}
              transition={{ delay: 0.2 }}
            >
              <motion.label 
                htmlFor="email" 
                className="block text-sm font-medium text-[#9D8CFF] mb-1"
                whileHover={{ color: "#7B6EDB" }}
              >
                Email
              </motion.label>
              <motion.input
                variants={inputVariants}
                whileFocus="focus"
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-[#13111C] border border-[#2D2B3D] rounded-lg focus:ring-2 focus:ring-[#7B6EDB] focus:border-[#7B6EDB] transition-colors text-[#E2E1E6] placeholder-[#E2E1E6]/50"
                placeholder="your.email@example.com"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ amount: 0.2 }}
              transition={{ delay: 0.3 }}
            >
              <motion.label 
                htmlFor="message" 
                className="block text-sm font-medium text-[#9D8CFF] mb-1"
                whileHover={{ color: "#7B6EDB" }}
              >
                Message
              </motion.label>
              <motion.textarea
                variants={inputVariants}
                whileFocus="focus"
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                className="w-full px-4 py-3 bg-[#13111C] border border-[#2D2B3D] rounded-lg focus:ring-2 focus:ring-[#7B6EDB] focus:border-[#7B6EDB] transition-colors text-[#E2E1E6] placeholder-[#E2E1E6]/50"
                placeholder="Your message here..."
              />
            </motion.div>
            <motion.button
              type="submit"
              disabled={isSubmitting}
              whileHover={{ scale: isSubmitting ? 1 : 1.02, backgroundColor: "#8A7BE6" }}
              whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
              className={`w-full bg-[#7B6EDB] text-[#E2E1E6] py-3 px-6 rounded-lg transition-all duration-300 shadow-lg hover:shadow-[#7B6EDB]/20 hover:shadow-2xl font-medium ${
                isSubmitting ? 'opacity-75 cursor-not-allowed' : ''
              }`}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </motion.button>
          </motion.form>
        </motion.div>

        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {contactInfo.map((info, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ amount: 0.2 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="bg-[#1A1625] p-6 rounded-xl border border-[#2D2B3D] hover:border-[#9D8CFF]/50 
                         transition-all duration-300 hover:shadow-[0_0_30px_rgba(157,140,255,0.15)]
                         flex flex-col items-center text-center"
            >
              <motion.div 
                className="text-3xl mb-4 p-3 rounded-lg bg-[#2D2B3D] text-[#9D8CFF]"
                whileHover={{ scale: 1.1, rotate: 360 }}
                transition={{ duration: 0.3 }}
              >
                {info.icon}
              </motion.div>
              <h3 className="text-[#9D8CFF] font-semibold mb-2">{info.title}</h3>
              <p className="text-[#E2E1E6] break-all">{info.value}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ContactForm; 