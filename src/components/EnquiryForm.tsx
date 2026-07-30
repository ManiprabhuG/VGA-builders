"use client";

import React, { useState } from "react";
import { useApp } from "@/context/AppContext";
import { 
  Send, CheckCircle2, Phone, MapPin, Building, DollarSign, User, Mail, MessageSquareText 
} from "lucide-react";

export const EnquiryForm: React.FC = () => {
  const { t } = useApp();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    location: "",
    projectType: "Residential G+1 House",
    budget: "₹25 Lakhs - ₹50 Lakhs",
    message: "",
    requestType: "Site Visit",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      // Form reset after confirmation
    }, 4000);
  };

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 sm:p-10 shadow-2xl relative overflow-hidden">
      <h3 className="text-2xl font-extrabold text-white mb-2">
        {t("form_title")}
      </h3>
      <p className="text-xs sm:text-sm text-slate-400 mb-8">
        Fill out the details below to receive a customized estimate or book an engineer site inspection.
      </p>

      {submitted ? (
        <div className="bg-emerald-500/10 border border-emerald-500/40 rounded-2xl p-8 text-center space-y-4 animate-in fade-in">
          <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <h4 className="text-xl font-extrabold text-white">Enquiry Submitted Successfully!</h4>
          <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto">
            {t("form_success")} Our site engineer will reach out to you within 2 business hours.
          </p>
          <button
            onClick={() => setSubmitted(false)}
            className="px-6 py-2.5 bg-slate-800 hover:bg-slate-700 text-xs font-bold text-slate-200 rounded-xl transition-colors"
          >
            Submit Another Request
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {/* Name */}
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-2">
                {t("form_name")} *
              </label>
              <div className="relative">
                <User className="absolute left-3.5 top-3 w-4 h-4 text-slate-500" />
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Anand Kumar"
                  className="w-full pl-10 pr-4 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-sm text-slate-100 placeholder-slate-600 focus:outline-none focus:border-amber-500 transition-colors"
                />
              </div>
            </div>

            {/* Phone */}
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-2">
                {t("form_phone")} *
              </label>
              <div className="relative">
                <Phone className="absolute left-3.5 top-3 w-4 h-4 text-slate-500" />
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="e.g. 97914 43090"
                  className="w-full pl-10 pr-4 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-sm text-slate-100 placeholder-slate-600 focus:outline-none focus:border-amber-500 transition-colors"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {/* Email */}
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-2">
                {t("form_email")}
              </label>
              <div className="relative">
                <Mail className="absolute left-3.5 top-3 w-4 h-4 text-slate-500" />
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="e.g. user@example.com"
                  className="w-full pl-10 pr-4 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-sm text-slate-100 placeholder-slate-600 focus:outline-none focus:border-amber-500 transition-colors"
                />
              </div>
            </div>

            {/* Location */}
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-2">
                {t("form_location")} *
              </label>
              <div className="relative">
                <MapPin className="absolute left-3.5 top-3 w-4 h-4 text-slate-500" />
                <input
                  type="text"
                  required
                  value={formData.location}
                  onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                  placeholder="e.g. Thanjavur / Madurai"
                  className="w-full pl-10 pr-4 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-sm text-slate-100 placeholder-slate-600 focus:outline-none focus:border-amber-500 transition-colors"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {/* Project Type */}
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-2">
                {t("form_type")}
              </label>
              <div className="relative">
                <Building className="absolute left-3.5 top-3 w-4 h-4 text-slate-500" />
                <select
                  value={formData.projectType}
                  onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                  className="w-full pl-10 pr-4 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-sm text-slate-100 focus:outline-none focus:border-amber-500 transition-colors"
                >
                  <option value="Residential G+1 House">Residential G+1 House</option>
                  <option value="Luxury Villa">Luxury Villa</option>
                  <option value="Individual Home">Individual Home</option>
                  <option value="Commercial Building">Commercial Building</option>
                  <option value="Turnkey Construction">Turnkey Construction</option>
                  <option value="Brickwork & Curing Service">Brickwork & Curing Service</option>
                </select>
              </div>
            </div>

            {/* Budget */}
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-2">
                {t("form_budget")}
              </label>
              <div className="relative">
                <DollarSign className="absolute left-3.5 top-3 w-4 h-4 text-slate-500" />
                <select
                  value={formData.budget}
                  onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                  className="w-full pl-10 pr-4 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-sm text-slate-100 focus:outline-none focus:border-amber-500 transition-colors"
                >
                  <option value="Below ₹25 Lakhs">Below ₹25 Lakhs</option>
                  <option value="₹25 Lakhs - ₹50 Lakhs">₹25 Lakhs - ₹50 Lakhs</option>
                  <option value="₹50 Lakhs - ₹1 Crore">₹50 Lakhs - ₹1 Crore</option>
                  <option value="Above ₹1 Crore">Above ₹1 Crore</option>
                </select>
              </div>
            </div>
          </div>

          {/* Message */}
          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-2">
              {t("form_message")}
            </label>
            <div className="relative">
              <MessageSquareText className="absolute left-3.5 top-3 w-4 h-4 text-slate-500" />
              <textarea
                rows={3}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Mention square footage, plot location, or specific requirements..."
                className="w-full pl-10 pr-4 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-sm text-slate-100 placeholder-slate-600 focus:outline-none focus:border-amber-500 transition-colors resize-none"
              />
            </div>
          </div>

          {/* Action Choice Buttons */}
          <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <button
              type="submit"
              onClick={() => setFormData({ ...formData, requestType: "Site Visit" })}
              className="w-full py-3 px-6 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 font-black rounded-xl text-xs uppercase tracking-wider shadow-lg shadow-amber-500/20 transition-all flex items-center justify-center gap-2"
            >
              <Send className="w-4 h-4" />
              <span>{t("cta_site_visit")}</span>
            </button>

            <button
              type="submit"
              onClick={() => setFormData({ ...formData, requestType: "Free Consultation" })}
              className="w-full py-3 px-6 bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold rounded-xl text-xs uppercase tracking-wider border border-slate-700 transition-colors flex items-center justify-center gap-2"
            >
              <span>{t("cta_consultation")}</span>
            </button>
          </div>
        </form>
      )}
    </div>
  );
};
