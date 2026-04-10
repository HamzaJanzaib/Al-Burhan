"use client";
import React, { Suspense } from "react";
import BookingVisualPanel from "@/components/global/Booking/BookingVisualPanel";
import BookingForm from "@/components/global/Booking/BookingForm";
import useBooking from "@/hooks/useBooking";

function EnrollmentPageContent() {
  const {
    t,
    loggedUser,
    services,
    loading,
    formData,
    errors,
    isSubmitting,
    handleChange,
    handleSubmit,
  } = useBooking();

  if (loading) {
    return (
      <div className="h-screen w-full flex items-center justify-center bg-background">
        <div className="flex flex-col items-center gap-4">
          <div className="w-12 h-12 border-4 border-primary/20 border-t-primary rounded-full animate-spin" />
          <p className="text-sm font-black text-primary uppercase tracking-widest animate-pulse">
            Loading Academy Portal...
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="md:h-[calc(100vh-theme(spacing.24))] min-h-screen bg-background flex flex-col md:flex-row overflow-hidden md:pt-0">
      <BookingVisualPanel t={t} />
      <BookingForm
        t={t}
        loggedUser={loggedUser}
        services={services}
        formData={formData}
        errors={errors}
        isSubmitting={isSubmitting}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
    </div>
  );
}

export default function EnrollPage() {
  return (
    <Suspense fallback={null}>
      <EnrollmentPageContent />
    </Suspense>
  );
}
