import React, { useState } from "react";
import "./App.css";

const subjects = [
  "Physics",
  "Maths-1",
  "Electrical",
  "PPS",
  "EVS",
  "Physics Lab",
  "Electrical Lab",
  "PPS Lab",
  "Graphics",
];
const subjects2 = [
  "Chemistry",
  "Maths-2",
  "Electronics",
  "Mechanical",
  "Soft Skills",
  "Chemistry Lab",
  "Electronics Lab",
  "English Lab",
  "Workshop",
];

const credits = [4, 4, 3, 3, 3, 1, 1, 1, 2]; // Credit values for each subject

function calculateGrade(totalMarks) {
  if (totalMarks >= 90) return 10;
  if (totalMarks >= 80) return 9;
  if (totalMarks >= 70) return 8;
  if (totalMarks >= 60) return 7;
  if (totalMarks >= 50) return 6;
  if (totalMarks >= 45) return 5;
  if (totalMarks >= 40) return 4;
  return 0;
}

function App() {
  const [marks, setMarks] = useState(
    subjects.map(() => ({ internal: "", theory: "" }))
  );
  const [sgpa, setSGPA] = useState(0);

  const handleInputChange = (index, type, value) => {
    const newMarks = [...marks];
    newMarks[index] = { ...newMarks[index], [type]: parseInt(value) || 0 };
    setMarks(newMarks);
  };

  const calculateSGPA = () => {
    let totalCreditPoints = 0;
    let totalCredits = 0;

    marks.forEach((mark, index) => {
      const total = mark.internal + mark.theory;
      const grade = calculateGrade(total);
      const credit = credits[index];
      const creditPoints = grade * credit;

      totalCreditPoints += creditPoints;
      totalCredits += credit;
    });
  

    const sgpa = totalCreditPoints / totalCredits;
    setSGPA(sgpa.toFixed(2));
  };

  const [marks2, setMarks2] = useState(
    subjects2.map(() => ({ internal: "", theory: "" }))
  );
  const [sgpa2, setSGPA2] = useState(0);

  const handleInputChange2 = (index2, type2, value2) => {
    const newMarks2 = [...marks2];
    newMarks2[index2] = {
      ...newMarks2[index2],
      [type2]: parseInt(value2) || 0,
    };
    setMarks2(newMarks2);
  };

  const calculateSGPA2 = () => {
    let totalCreditPoints = 0;
    let totalCredits = 0;

    marks2.forEach((mark2, index) => {
      const total2 = mark2.internal + mark2.theory;
      const grade2 = calculateGrade(total2);
      const credit2 = credits[index];
      const creditPoints2 = grade2 * credit2;

      totalCreditPoints += creditPoints2;
      totalCredits += credit2;
    });

    const sgpa2 = totalCreditPoints / totalCredits;
    setSGPA2(sgpa2.toFixed(2));
  };

  const [YGPA, setYGPA] = useState(0);
  function calculateYGPA() {
    const final = (parseFloat(sgpa)*22 + parseFloat(sgpa2)*22) / (22+22)
    setYGPA(final.toFixed(2));
  }

  return (
    <div>
      <div id="box1" className="flex flex-col justify-center items-center">
        <h2 className="text-3xl font-bold">SGPA Calculator</h2>
        <p className="text-sm">
          For AKTU <br /> made by{" "}
          <a
            className="italic underline text-blue-700"
            href="https://github.com/ateendra24"
            target="_blank"
          >
            @ateendra
          </a>
        </p>
      </div>
      <br />

      <div id="container" className="flex flex-wrap gap-8 justify-center">
        <div id="box2">
          <h2 className="text-lg font-bold">Sem1</h2>
          <table>
            <thead>
              <tr>
                <th>Subject</th>
                <th>Internal Marks</th>
                <th>External Marks</th>
              </tr>
            </thead>
            <tbody>
              {subjects.map((subject, index) => (
                <tr key={index}>
                  <td>{subject}</td>
                  <td>
                    <input
                      placeholder="00"
                      min="1"
                      max="100"
                      type="number"
                      value={marks[index].internal}
                      onChange={(e) =>
                        handleInputChange(index, "internal", e.target.value)
                      }
                    />
                  </td>
                  <td>
                    <input
                      placeholder="00"
                      type="number"
                      min="1"
                      max="100"
                      value={marks[index].theory}
                      onChange={(e) =>
                        handleInputChange(index, "theory", e.target.value)
                      }
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <button
            onClick={calculateSGPA}
            className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            {" "}
            Calculate SGPA
          </button>
          <div className="text-2xl font-bold">
            SGPA: <span>{sgpa}</span>
          </div>
        </div>

        <div id="box3">
          <h2 className="text-lg font-bold">Sem2</h2>
          <table>
            <thead>
              <tr>
                <th>Subject</th>
                <th>Internal Marks</th>
                <th>External Marks</th>
              </tr>
            </thead>
            <tbody>
              {subjects2.map((subject2, index2) => (
                <tr key={index2}>
                  <td>{subject2}</td>
                  <td>
                    <input
                      placeholder="00"
                      min="1"
                      max="100"
                      type="number"
                      value={marks2[index2].internal}
                      onChange={(e) =>
                        handleInputChange2(index2, "internal", e.target.value)
                      }
                    />
                  </td>
                  <td>
                    <input
                      placeholder="00"
                      type="number"
                      min="1"
                      max="100"
                      value={marks2[index2].theory}
                      onChange={(e) =>
                        handleInputChange2(index2, "theory", e.target.value)
                      }
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <button
            onClick={calculateSGPA2}
            className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            {" "}
            Calculate SGPA
          </button>
          <div className="text-2xl font-bold">
            SGPA: <span>{sgpa2}</span>
          </div>
        </div>
      </div>

      <br />

      <div id="box4" className="flex flex-col justify-center items-center">
        <button
          onClick={calculateYGPA}
          className="text-white bg-red-600 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-blue-800"
        >
          
          Calculate YGPA
        </button>
        <div className="text-2xl font-bold">
          YGPA: <span>{YGPA}</span>
        </div>
      </div>
    </div>
  );
}

export default App;
