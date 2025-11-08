"use client";
import React, { useState } from "react";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import Section from "@/components/Section";
import Heading from "@/components/Heading";
import Button from "@/components/Button/Button";
import ButtonGradient from "../assets/svg/ButtonGradient";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        
        <Section className="pt-0" crosses>
          <div className="container">
            <Heading
              tag="Contact Us"
              title="Get in Touch"
              text="Have questions? We're here to help. Reach out to our team anytime."
            />

            <div className="max-w-4xl mx-auto">
              {/* Contact Info */}
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-n-8 rounded-[1rem] p-8 border-2" style={{borderColor: '#03BFFF'}}>
                    <div className="flex items-start gap-4">
                      <div className="text-color-1 text-3xl">📍</div>
                      <div>
                        <h4 className="h6 mb-2">Address</h4>
                        <p className="body-2 text-n-3">
                          Kalachera Rd, Lala<br />
                          Lala Pt I, Assam 788163<br />
                          India
                        </p>
                      </div>
                    </div>
                </div>

                <div className="bg-n-8 rounded-[1rem] p-8 border-2" style={{borderColor: '#03BFFF'}}>
                    <div className="flex items-start gap-4">
                      <div className="text-color-1 text-3xl">📞</div>
                      <div>
                        <h4 className="h6 mb-2">Phone</h4>
                        <p className="body-2 text-n-3">
                          +91 9707237225<br />
                          Available for support and inquiries
                        </p>
                      </div>
                    </div>
                </div>

                <div className="bg-n-8 rounded-[1rem] p-8 border-2" style={{borderColor: '#03BFFF'}}>
                    <div className="flex items-start gap-4">
                      <div className="text-color-1 text-3xl">✉️</div>
                      <div>
                        <h4 className="h6 mb-2">Email</h4>
                        <p className="body-2 text-n-3">
                          networkstrexx@gmail.com<br />
                          For all inquiries and support
                        </p>
                      </div>
                    </div>
                </div>


              </div>
            </div>
          </div>
        </Section>

        <Footer />
      </div>
      <ButtonGradient />
    </>
  );
};

export default ContactPage;
