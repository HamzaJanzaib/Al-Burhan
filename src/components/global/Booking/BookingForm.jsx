import React from "react";
import { motion } from "motion/react";
import { User, Mail, Phone, Calendar, ArrowRight, Loader2 } from "lucide-react";

import { BOOKING_ANIMATIONS } from "../../../constants/bookingConstants";
import BookingStatus from "./BookingStatus";
import BookingInput from "./BookingInput";

const BookingForm = ({
  t,
  loggedUser,
  services,
  formData,
  errors,
  isSubmitting,
  handleChange,
  handleSubmit,
}) => {
  return (
    <div className="w-full lg:w-7/12 bg-slate-50/30 overflow-y-auto custom-scrollbar">
      <div className="min-h-full flex flex-col justify-center py-12 px-6 md:px-12 lg:px-20">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={BOOKING_ANIMATIONS.form}
          className="w-full max-w-xl mx-auto"
        >
          <div className="mb-8 lg:hidden">
            <h1 className="text-3xl font-black text-primary uppercase tracking-tight">
              {t("contact_section.booking_form.title")}
            </h1>
            <p className="text-slate-500 mt-2 font-medium">
              {t("contact_section.booking_form.fields.nologinrequired")}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <BookingStatus t={t} loggedUser={loggedUser} />

            {!loggedUser && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <BookingInput
        label={t("contact_section.booking_form.fields.name")}
        name="name"
        placeholder="Your full name"
        icon={User}
        formData={formData}
        errors={errors}
        handleChange={handleChange}
      />
      <BookingInput
        label={t("contact_section.booking_form.fields.email")}
        name="email"
        type="email"
        placeholder="example@email.com"
        icon={Mail}
        formData={formData}
        errors={errors}
        handleChange={handleChange}
      />
    </div>
  )}

  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <BookingInput
                label={t("contact_section.booking_form.fields.phone")}
                name="phone"
                type="tel"
                placeholder="(555) 123-4567"
                icon={Phone}
                formData={formData}
                errors={errors}
                handleChange={handleChange}
              />
              <BookingInput
                label={t("contact_section.booking_form.fields.preferredDate")}
                name="date"
                type="date"
                icon={Calendar}
                formData={formData}
                errors={errors}
                handleChange={handleChange}
              />
            </div>

            <BookingInput
              label={t("contact_section.booking_form.fields.serviceVariant")}
              name="service_id"
              type="select"
              placeholder="Select a Service..."
              options={services}
              formData={formData}
              errors={errors}
              handleChange={handleChange}
            />

            <BookingInput
              label={t("contact_section.booking_form.fields.additionalNotes")}
              name="message"
              type="textarea"
              placeholder="Any specific details or requirements?"
              formData={formData}
              errors={errors}
              handleChange={handleChange}
            />

            <motion.button
              type="submit"
              disabled={isSubmitting}
              whileHover={{ 
                scale: 1.02,
                boxShadow: "0 25px 50px -12px rgba(6, 78, 59, 0.4)" 
              }}
              whileTap={{ scale: 0.98 }}
              animate={!isSubmitting ? { 
                y: [0, -3, 0],
                transition: { 
                  duration: 4, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                } 
              } : {}}
              className="w-full py-5 bg-linear-to-r from-primary via-primary/80 to-primary text-white font-black text-xl rounded-2xl shadow-[0_20px_40px_-15px_rgba(0,0,0,0.3)] transition-all flex items-center justify-center gap-3 mt-8 cursor-pointer disabled:opacity-75 disabled:cursor-not-allowed group relative overflow-hidden ring-4 ring-primary/5"
            >
              {/* Shine effect */}
              <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/10 to-transparent w-1/2 h-full animate-[shine_3s_infinite]" />
              </div>

              <div className="relative z-10 flex items-center gap-3">
                {isSubmitting ? (
                  <>
                    <Loader2 className="animate-spin" />
                    <span>Processing Information...</span>
                  </>
                ) : (
                  <>
                    <span className="tracking-tight">Book My Free Trial Now</span>
                    <ArrowRight 
                      size={22} 
                      className="group-hover:translate-x-2 group-hover:scale-110 transition-all duration-300 ease-out text-secondary" 
                    />
                  </>
                )}
              </div>
            </motion.button>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default BookingForm;
