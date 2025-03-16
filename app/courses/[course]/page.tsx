"use client";

import { useParams } from "next/navigation";
import { BookOpen } from "lucide-react";
import React from "react";

// Define the course type
interface Course {
  title: string;
  description: string;
  duration: string;
  requirements: string[];
  Icon: React.ElementType;
}

// Course details object
const courseDetails: Record<string, Course> = {
  "sap-abap": {
    title: "SAP ABAP Programming",
    description: "Develop custom solutions using SAP's ABAP language.",
    duration: "8 Weeks",
    requirements: ["Basic Programming Knowledge", "Interest in SAP Development"],
    Icon: BookOpen,
  },
  "sap-s4hana-finance": {
    title: "SAP S/4HANA Finance",
    description: "Master financial accounting and controlling with SAP S/4HANA.",
    duration: "6 Weeks",
    requirements: ["Basic Accounting Knowledge", "Interest in Finance"],
    Icon: BookOpen,
  },
  "sap-mm": {
    title: "SAP MM (Materials Management)",
    description: "Learn procurement and inventory management in SAP MM.",
    duration: "5 Weeks",
    requirements: ["Basic Inventory Management", "Supply Chain Knowledge"],
    Icon: BookOpen,
  },
};

const CourseDetail: React.FC = () => {
  const { course } = useParams(); // Get the dynamic course parameter
  const courseInfo = courseDetails[course as string];

  if (!courseInfo) {
    return <p className="text-center text-red-500">Course not found.</p>;
  }

  return (
    <section className="relative py-16 px-4 sm:px-8 text-center">
      <h2 className="text-3xl font-extrabold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
        {courseInfo.title}
      </h2>

      <div className="mt-6 bg-white dark:bg-gray-800 shadow-lg rounded-xl border border-gray-200 dark:border-gray-700 p-6 max-w-3xl mx-auto">
        <courseInfo.Icon className="h-16 w-16 text-primary mx-auto mb-4" />
        <p className="text-gray-600 dark:text-gray-300">{courseInfo.description}</p>
        <p className="mt-2 text-gray-800 dark:text-white">
          <strong>Duration:</strong> {courseInfo.duration}
        </p>
        <p className="mt-2 text-gray-800 dark:text-white">
          <strong>Requirements:</strong>
        </p>
        <ul className="list-disc list-inside text-gray-600 dark:text-gray-300">
          {courseInfo.requirements.map((req, index) => (
            <li key={index}>{req}</li>
          ))}
        </ul>
      </div>
    </section>
  );
};

// ✅ Ensure only one default export
export default CourseDetail;
