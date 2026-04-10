import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { toast } from "sonner";
import { useTranslation } from "react-i18next";
import GetServices from "../services/GetService";
import createAppointment from "../services/CreateAppointment";
import "../i18n/i18n";
import { COMPANY_ID } from "../config/BaseUrl";

const useBooking = () => {
  const { t } = useTranslation();
  const searchParams = useSearchParams();
  const [loggedUser, setLoggedUser] = useState(null);
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    service_id: "",
    message: "",
  });

  useEffect(() => {
    let mounted = true;
    async function load() {
      try {
        const stored = sessionStorage.getItem("userData");
        if (stored && mounted) {
          const u = JSON.parse(stored);
          setLoggedUser(u);
          setFormData((prev) => ({
            ...prev,
            name: u.first_name || u.name || "",
            email: u.email || "",
          }));
        }
        const serviceList = await GetServices();
        if (mounted) {
          setServices(serviceList);

          // Handle auto-selected course from query params
          const courseParam = searchParams.get("course");
          if (courseParam) {
            const matchedService = serviceList.find(
              (s) => s.name?.toLowerCase() === courseParam.toLowerCase() || 
                     s.title?.toLowerCase() === courseParam.toLowerCase()
            );
            if (matchedService) {
              setFormData((prev) => ({
                ...prev,
                service_id: matchedService.id.toString(),
              }));
            }
          }
        }
      } catch (err) {
        console.error("Load ERROR:", err);
        toast.error(t("toast.load_error"));
      } finally {
        if (mounted) setLoading(false);
      }
    }
    load();
    return () => (mounted = false);
  }, [t]);

  const validateForm = () => {
    const errorObj = {};
    if (!formData.phone.trim())
      errorObj.phone = t("contact_section.booking_form.errors.phone");
    if (!formData.date)
      errorObj.date = t("contact_section.booking_form.errors.preferredDate");
    if (!formData.service_id)
      errorObj.service_id = t("contact_section.booking_form.errors.service_id");
    if (!loggedUser) {
      if (!formData.name.trim())
        errorObj.name = t("contact_section.booking_form.errors.name");
      if (!formData.email.trim())
        errorObj.email = t("contact_section.booking_form.errors.email");
    }
    return errorObj;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    const err = validateForm();
    if (Object.keys(err).length > 0) {
      setErrors(err);
      setIsSubmitting(false);
      return;
    }
    try {
      const selectedService = services.find(
        (s) => s.id.toString() === formData.service_id,
      );
      const payload = {
        name: loggedUser
          ? loggedUser.first_name || loggedUser.name
          : formData.name,
        email: loggedUser ? loggedUser.email : formData.email,
        phone: formData.phone,
        service_id: selectedService?.id || null,
        service_variant_id: null,
        user_id: loggedUser ? loggedUser.id : null,
        company_id: COMPANY_ID,
        date: new Date(formData.date).toISOString(),
        status: "scheduled",
        notes: formData.message || "General service request",
      };
      await createAppointment(payload);
      toast.success(t("toast.appointment_booked_success"));
      setFormData({
        name: "",
        email: "",
        phone: "",
        date: "",
        service_id: "",
        message: "",
      });
    } catch (err) {
      toast.error(
        err.message || t("contact_section.booking_form.errors.submit"),
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    t,
    loggedUser,
    services,
    loading,
    formData,
    errors,
    isSubmitting,
    handleChange,
    handleSubmit,
  };
};

export default useBooking;
