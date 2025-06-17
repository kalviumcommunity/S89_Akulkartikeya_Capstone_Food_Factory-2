import React, { useState } from "react";
import "./doctor.css";
import Navbar from "./Navbar";

const doctorDetails = {
  consultation: {
    title: "Doctor Consultation",
    description:
      "Consult with our expert doctors online or in-person. Get advice, prescriptions, and follow-ups easily.",
    doctor: "Dr. Priya Sharma, MD (General Medicine)",
    hospital: "Food Factory Health Center, 123 Wellness Ave, City Center",
    contact: "Phone: 1800-123-456 | Email: consult@foodfactory.com",
    timings: "Mon-Sat: 9am - 6pm"
  },
  appointment: {
    title: "Book an Appointment",
    description:
      "Schedule your appointment with our specialists at your convenience. Quick and hassle-free booking.",
    doctor: "Dr. Rahul Verma, MBBS, MS (Surgery)",
    hospital: "Food Factory Health Center, 123 Wellness Ave, City Center",
    contact: "Phone: 1800-789-012 | Email: appointment@foodfactory.com",
    timings: "Mon-Sat: 10am - 8pm"
  },
  emergency: {
    title: "24/7 Emergency Services",
    description:
      "Immediate medical attention available round the clock. Our emergency team is always ready to help.",
    doctor: "Dr. Anjali Mehta, MD (Emergency Medicine)",
    hospital: "Food Factory Emergency Wing, 123 Wellness Ave, City Center",
    contact: "Phone: 1800-000-911 | Email: emergency@foodfactory.com",
    timings: "24/7 Service"
  }
};

export default function Doctor() {
  const [selected, setSelected] = useState(null);

  const handleBoxClick = (key) => {
    setSelected(key);
  };

  return (
    <div className="doctor-page">
      <Navbar />
      <div className="doctor-header">
        <h1>Doctor & Hospital Services</h1>
        <p>Your health is our priority. Access our medical services anytime.</p>
      </div>
      <div className="doctor-services">
        <div
          className={`service-box ${selected === "consultation" ? "active" : ""}`}
          onClick={() => handleBoxClick("consultation")}
        >
          <h2>Doctor Consultation</h2>
        </div>
        <div
          className={`service-box ${selected === "appointment" ? "active" : ""}`}
          onClick={() => handleBoxClick("appointment")}
        >
          <h2>Book an Appointment</h2>
        </div>
        <div
          className={`service-box ${selected === "emergency" ? "active" : ""}`}
          onClick={() => handleBoxClick("emergency")}
        >
          <h2>24/7 Emergency Services</h2>
        </div>
      </div>
      {selected && (
        <div className="doctor-details">
          <h3>{doctorDetails[selected].title}</h3>
          <p>{doctorDetails[selected].description}</p>
          <ul>
            <li><strong>Doctor:</strong> {doctorDetails[selected].doctor}</li>
            <li><strong>Hospital:</strong> {doctorDetails[selected].hospital}</li>
            <li><strong>Contact:</strong> {doctorDetails[selected].contact}</li>
            <li><strong>Timings:</strong> {doctorDetails[selected].timings}</li>
          </ul>
        </div>
      )}
    </div>
  );
}
