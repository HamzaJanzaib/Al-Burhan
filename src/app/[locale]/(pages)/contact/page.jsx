"use client";
import React, { useState, Suspense } from "react";
import { motion } from "motion/react";
import Image from "next/image";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send, 
  MessageSquare, 
  Headphones, 
  GraduationCap,
  ArrowRight,
  Loader2,
  CheckCircle,
  Star
} from "lucide-react";
import { useTranslation } from "react-i18next";
import { toast } from "react-hot-toast";
import { submitContactForm } from "../../../../services/contactService";
import BookingInput from "../../../../components/global/Booking/BookingInput";

const ContactInfoCard = ({ icon: Icon, title, content, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay, duration: 0.5 }}
    className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/10 hover:bg-white/20 transition-all group"
  >
    <div className="flex items-center gap-4">
      <div className="w-12 h-12 rounded-xl bg-secondary/20 flex items-center justify-center text-secondary group-hover:scale-110 transition-transform">
        <Icon size={24} />
      </div>
      <div>
        <h4 className="text-sm font-bold text-secondary/80 uppercase tracking-widest">{title}</h4>
        <p className="text-lg font-bold text-white mt-1">{content}</p>
      </div>
    </div>
  </motion.div>
);

function ContactPageContent() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.message) newErrors.message = "Message is required";
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);
    try {
      await submitContactForm(formData);
      toast.success(t("contact_page.form.success"));
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (err) {
      toast.error(t("contact_page.form.error"));
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="md:h-screen min-h-screen bg-white flex flex-col md:flex-row overflow-hidden pt-20 md:pt-0">
      {/* Left Visual Panel */}
      <div className="hidden lg:flex lg:w-5/12 relative bg-primary text-white p-12 flex-col justify-between overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/al-burhan/images/Banner.png"
            alt="AL Burhan Academy Banner"
            fill
            className="object-cover opacity-20 mix-blend-overlay"
          />
          <div className="absolute inset-0 bg-linear-to-b from-primary/95 via-primary/80 to-primary/90" />
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        </div>

        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="relative z-10"
        >
          <div className="mb-4 inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/20">
            <Star size={16} className="text-secondary fill-secondary" />
            <span className="text-sm font-semibold tracking-wide">
              {t("contact_page.subtitle")}
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
            We are here to{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-white to-secondary">
              Help You
            </span>
          </h1>
          <p className="text-lg text-white/70 leading-relaxed max-w-md">
            {t("contact_page.description")}
          </p>
        </motion.div>

        <div className="relative z-10 space-y-4">
          <ContactInfoCard 
            icon={Headphones} 
            title={t("contact_page.info.support")} 
            content="support@alburhan.com" 
            delay={0.1}
          />
          <ContactInfoCard 
            icon={GraduationCap} 
            title={t("contact_page.info.admissions")} 
            content="admissions@alburhan.com" 
            delay={0.2}
          />
          <ContactInfoCard 
            icon={Clock} 
            title={t("contact_page.info.hours")} 
            content={t("contact_page.info.days")} 
            delay={0.3}
          />
        </div>

        <div className="relative z-10 pt-8 border-t border-white/10">
          <p className="text-sm italic text-white/50">
            "Ask and it shall be given to you; seek and you shall find."
          </p>
        </div>
      </div>

      {/* Right Form Panel */}
      <div className="w-full lg:w-7/12 bg-slate-50/30 overflow-y-auto custom-scrollbar">
        <div className="min-h-full flex flex-col justify-center py-12 px-6 md:px-12 lg:px-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-full max-w-xl mx-auto"
          >
            <div className="mb-10">
              <h2 className="text-3xl font-black text-primary uppercase tracking-tight">
                {t("contact_page.form.title")}
              </h2>
              <div className="h-1.5 w-20 bg-secondary rounded-full mt-3" />
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <BookingInput
                  label={t("contact_section.booking_form.fields.name")}
                  name="name"
                  placeholder="Enter your name"
                  icon={MessageSquare}
                  formData={formData}
                  errors={errors}
                  handleChange={handleChange}
                />
                <BookingInput
                  label={t("contact_section.booking_form.fields.email")}
                  name="email"
                  type="email"
                  placeholder="name@example.com"
                  icon={Mail}
                  formData={formData}
                  errors={errors}
                  handleChange={handleChange}
                />
              </div>

              <BookingInput
                label={t("contact_page.info.subject") || "Subject"}
                name="subject"
                placeholder="What is this regarding?"
                icon={Send}
                formData={formData}
                errors={errors}
                handleChange={handleChange}
              />

              <BookingInput
                label={t("contact_section.booking_form.fields.additionalNotes")}
                name="message"
                type="textarea"
                placeholder="Write your message here..."
                formData={formData}
                errors={errors}
                handleChange={handleChange}
              />

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                className="w-full py-5 bg-primary hover:bg-black text-white font-black text-lg rounded-2xl shadow-2xl shadow-primary/20 transition-all flex items-center justify-center gap-3 mt-8 cursor-pointer disabled:opacity-75 disabled:cursor-not-allowed group relative overflow-hidden"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="animate-spin" />
                    <span>{t("contact_page.form.sending") || "Sending..."}</span>
                  </>
                ) : (
                  <>
                    <span>{t("contact_page.form.button") || "Send Message"}</span>
                    <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default function ContactPage() {
  return (
    <Suspense fallback={null}>
      <ContactPageContent />
    </Suspense>
  );
}
