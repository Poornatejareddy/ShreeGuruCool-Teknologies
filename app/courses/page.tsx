import Link from "next/link";
import { BookOpen } from "lucide-react";

// Define the course list type
interface Course {
  id: string;
  title: string;
  description: string;
}

const courses: Course[] = [
  { id: "sap-abap", title: "SAP ABAP Programming", description: "Learn ABAP coding." },
  { id: "sap-mm", title: "SAP MM", description: "Materials Management." },
  { id: "sap-s4hana-finance", title: "SAP S/4HANA Finance", description: "Finance and controlling." },
];

const Courses: React.FC = () => {
  return (
    <section className="py-16 px-4 sm:px-8 text-center">
      <h2 className="text-3xl font-bold">Explore Our Courses</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
        {courses.map((course) => (
          <Link key={course.id} href={`/courses/${course.id}`}>
            <div className="p-6 bg-white shadow-lg rounded-xl border hover:shadow-2xl transition">
              <BookOpen className="h-12 w-12 text-primary mx-auto mb-3" />
              <h3 className="text-lg font-semibold">{course.title}</h3>
              <p className="text-gray-600">{course.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

// ✅ Only one default export at the bottom
export default Courses;
