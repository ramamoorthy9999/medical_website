import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

const schema = z.object({
  name: z.string().min(1, { message: "Full Name is required" }),
  email: z.string().email({ message: "Invalid email address" }),
  phone: z
    .string()
    .min(10, { message: "Phone number must be at least 10 digits" })
    .regex(/^\d+$/, { message: "Phone number must contain only digits" }),
  message: z.string().optional(),
});

const AppointmentForm = () => {
  const [isSubmitted, setIsSubmitted] = React.useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data) => {
    setIsSubmitted(true);
    console.log(data);
    reset();
    setTimeout(() => setIsSubmitted(false), 5000); // Hide after 5 seconds
  };

  return (
    <div className="section-gap">
      <div className="container">
        <div className="appointment-form-two">
          <div className="form-wrap">
            <div className="section-heading mb-40">
              <span className="tagline">Make an Appointment</span>
              <h2 className="title">Make an Appointment to Doctor Visit</h2>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} action="#">
              <div className="row">
                <div className="col-12">
                  <div
                    className="input-field wow fadeInLeft"
                    data-wow-delay="0.3s"
                  >
                    <input
                      type="text"
                      placeholder="Your Full Name"
                      {...register("name")}
                      style={{ borderColor: errors.name ? "red" : "" }}
                    />
                    {errors.name && (
                      <span style={{ color: "red", fontSize: "12px" }}>
                        {errors.name.message}
                      </span>
                    )}
                  </div>
                </div>
                <div className="col-12">
                  <div
                    className="input-field wow fadeInLeft"
                    data-wow-delay="0.4s"
                  >
                    <input
                      type="email"
                      placeholder="Email Address"
                      {...register("email")}
                      style={{ borderColor: errors.email ? "red" : "" }}
                    />
                    {errors.email && (
                      <span style={{ color: "red", fontSize: "12px" }}>
                        {errors.email.message}
                      </span>
                    )}
                  </div>
                </div>
                <div className="col-12">
                  <div
                    className="input-field wow fadeInLeft"
                    data-wow-delay="0.5s"
                  >
                    <input
                      type="text"
                      placeholder="Phone Number"
                      {...register("phone")}
                      style={{ borderColor: errors.phone ? "red" : "" }}
                    />
                    {errors.phone && (
                      <span style={{ color: "red", fontSize: "12px" }}>
                        {errors.phone.message}
                      </span>
                    )}
                  </div>
                </div>
                <div className="col-12">
                  <div
                    className="input-field wow fadeInLeft"
                    data-wow-delay="0.6s"
                  >
                    <textarea
                      placeholder="Write Message"
                      {...register("message")}
                    />
                  </div>
                </div>
                <div className="col-12">
                  <div
                    className="input-field wow fadeInLeft"
                    data-wow-delay="0.7s"
                  >
                    <button type="submit" className="template-btn">
                      Submit
                    </button>
                    {isSubmitted && (
                      <div className="alert alert-success mt-3" role="alert">
                        Appointment request submitted successfully!
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </form>
          </div>
          <div
            className="appointment-image"
            style={{
              backgroundImage: "url(assets/img/contact_form.webp)",
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default AppointmentForm;
