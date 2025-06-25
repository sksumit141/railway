import React, { useState } from "react";

const Form = () => {
  const [tasks, setTasks] = useState([
    {
      task: "Clean the train floor",
      completed: false,
      submissionDate: "2025-06-27",
      lastDate: "2025-06-30",
    },
    {
      task: "Check lights in bogey A1",
      completed: true,
      submissionDate: "2025-06-26",
      lastDate: "2025-06-29",
    },
  ]);

  const [comment, setComment] = useState("All tasks are routine checks.");

  const handleChange = (index, field, value) => {
    const updatedTasks = [...tasks];
    updatedTasks[index][field] =
      field === "completed" ? !updatedTasks[index][field] : value;
    setTasks(updatedTasks);
  };

  const addTask = () => {
    setTasks([
      ...tasks,
      {
        task: "",
        completed: false,
        submissionDate: "",
        lastDate: "",
      },
    ]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      tasks,
      comment,
    };
    console.log("Form Data Submitted:", formData);
    alert("Form submitted! Check console for data.");
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-xl p-6">
        <h1 className="text-3xl font-bold mb-6 text-center text-blue-600">Train Task Form</h1>

        <form onSubmit={handleSubmit}>
          {tasks.map((task, index) => (
            <div key={index} className="mb-6 border-b pb-4">
              <div className="flex items-center gap-2 mb-2">
                <input
                  type="text"
                  placeholder={`Task ${index + 1}`}
                  value={task.task}
                  onChange={(e) => handleChange(index, "task", e.target.value)}
                  className="flex-1 p-2 border border-gray-300 rounded"
                />
                <label className="flex items-center gap-1 text-sm">
                  <input
                    type="checkbox"
                    checked={task.completed}
                    onChange={() => handleChange(index, "completed")}
                    className="w-5 h-5"
                  />
                  Done
                </label>
              </div>

              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1">
                  <label className="block text-sm font-medium mb-1">
                    Submission Date
                  </label>
                  <input
                    type="date"
                    value={task.submissionDate}
                    onChange={(e) =>
                      handleChange(index, "submissionDate", e.target.value)
                    }
                    className="w-full p-2 border border-gray-300 rounded"
                  />
                </div>
                <div className="flex-1">
                  <label className="block text-sm font-medium mb-1">
                    Last Date to Submit
                  </label>
                  <input
                    type="date"
                    value={task.lastDate}
                    onChange={(e) =>
                      handleChange(index, "lastDate", e.target.value)
                    }
                    className="w-full p-2 border border-gray-300 rounded"
                  />
                </div>
              </div>
            </div>
          ))}

          {/* Comment Box */}
          <div className="mb-6">
            <label className="block text-sm font-medium mb-1">Comments</label>
            <textarea
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              rows={4}
              className="w-full p-3 border border-gray-300 rounded"
              placeholder="Write your comments here..."
            ></textarea>
          </div>

          <div className="flex gap-4 justify-between">
            <button
              type="button"
              onClick={addTask}
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              + Add Task
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
