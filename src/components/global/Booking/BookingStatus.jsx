import React from "react";
import { Info } from "lucide-react";

const BookingStatus = ({ t, loggedUser }) => {
  return (
    <div
      className={`p-5 rounded-2xl border ${
        loggedUser
          ? "bg-primary/5 border-primary/20"
          : "bg-background border-slate-100 shadow-sm"
      }`}
    >
      {loggedUser ? (
        <div className="flex items-start gap-4">
          <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center text-white font-black text-lg shadow-lg">
            {loggedUser.first_name?.[0] || "U"}
          </div>
          <div>
            <h3 className="font-black text-primary text-lg">
              {t("contact_section.booking_form.fields.hello!")},{" "}
              {loggedUser.first_name || "User"}!
            </h3>
            <p className="text-sm text-slate-500 flex items-center gap-1.5 mt-1">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
              {t("contact_section.booking_form.fields.loggedinwith")}:{" "}
              <span className="font-bold text-slate-800">
                {loggedUser.email}
              </span>
            </p>
          </div>
        </div>
      ) : (
        <div className="flex items-center gap-4 text-slate-600">
          <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center text-secondary">
            <Info size={20} />
          </div>
          <p className="text-sm">
            <span className="font-black text-slate-900 block mb-0.5">
              {t("contact_section.booking_form.fields.hello!")}
            </span>
            {t("contact_section.booking_form.fields.nologinrequired")}
          </p>
        </div>
      )}
    </div>
  );
};

export default BookingStatus;
