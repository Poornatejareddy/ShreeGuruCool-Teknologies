"use client"; // Add this at the very top of the file

import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation"; // Import useRouter from next/navigation

const CompleteSignup = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState(""); // New state for success message
  const router = useRouter(); // Initialize the router from next/navigation

  const handleSubmit = async (values: { email: string, password: string, name: string, age: string, education: string }) => {
    setIsSubmitting(true);
    setSuccessMessage(""); // Reset success message on form submission

    try {
      const response = await fetch("http://localhost:5000/api/auth/register-complete", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.msg || "Error during registration");
      }

      // Handle success
      setSuccessMessage("Registration complete! Wait for admin approval.");
      console.log("Registration complete:", data);

      // Redirect to login page after success
      setTimeout(() => {
        router.push("/auth/login"); // Redirect to login page after 2 seconds
      }, 2000); // Delay to allow the user to see the success message before redirect

    } catch (error) {
      console.error("Error during form submission:", error);
      setErrorMessage(error.message || "An error occurred during registration.");
    }
    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-sky-200 py-6">
      <div className="w-full max-w-lg p-6 bg-white rounded-lg shadow-md">
        {/* Header */}
        <div className="text-center mb-4">
          <h1 className="text-4xl font-bold text-blue-500">ShreeGuruCool</h1>
          <p className="text-xl text-gray-600 mt-2">Complete Your Signup</p>
        </div>

        <Formik
          initialValues={{
            email: "",
            password: "",
            name: "",
            age: "",
            education: "",
          }}
          onSubmit={handleSubmit}
        >
          <Form>
            <div className="mb-4">
              <Field name="email" type="email" placeholder="Email" className="w-full p-3 border border-gray-300 rounded-md" />
              <ErrorMessage name="email" component="div" className="text-red-500 text-sm mt-1" />
            </div>
            <div className="mb-4">
              <Field name="password" type="password" placeholder="Password" className="w-full p-3 border border-gray-300 rounded-md" />
              <ErrorMessage name="password" component="div" className="text-red-500 text-sm mt-1" />
            </div>
            <div className="mb-4">
              <Field name="name" placeholder="Name" className="w-full p-3 border border-gray-300 rounded-md" />
              <ErrorMessage name="name" component="div" className="text-red-500 text-sm mt-1" />
            </div>
            <div className="mb-4">
              <Field name="age" placeholder="Age" className="w-full p-3 border border-gray-300 rounded-md" />
              <ErrorMessage name="age" component="div" className="text-red-500 text-sm mt-1" />
            </div>
            <div className="mb-4">
              <Field name="education" placeholder="Education" className="w-full p-3 border border-gray-300 rounded-md" />
              <ErrorMessage name="education" component="div" className="text-red-500 text-sm mt-1" />
            </div>
            <motion.button
              type="submit"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="w-full p-3 bg-blue-500 text-white rounded-md mt-4"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "Complete Signup"}
            </motion.button>

            {/* Show success or error messages */}
            {successMessage && <div className="text-green-500 text-center mt-4">{successMessage}</div>}
            {errorMessage && <div className="error text-red-500 text-center mt-4">{errorMessage}</div>}
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default CompleteSignup;
