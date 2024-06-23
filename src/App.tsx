import { useState } from "react";
import Main from "./components/Main";
import { toast } from "react-toastify";

function App() {
  const [role, setRole] = useState<string | null>(null);

  const setRoleHandler = (newRole: string | null) => {
    setRole(newRole);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center max-w-lg mx-auto">
        { (!role) ? (
          <>
            <h1 className="text-4xl font-bold mb-8 text-gray-800">
              Welcome to the Quiz App
            </h1>
            <div className="p-8 bg-white rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold mb-6 text-gray-700">
                CONTINUE AS:
              </h2>
              <div className="flex justify-center gap-4">
                <button
                  onClick={() => {
                    setRole("admin");
                    toast.success("Logged in as Admin", {
                      position: "top-center",
                      autoClose: 2000,
                      hideProgressBar: false,
                      closeOnClick: true,
                      pauseOnHover: true,
                      draggable: true,
                      progress: undefined,
                      theme: "light",
                    });
                  }}
                  className="px-6 py-3 bg-blue-500 text-white font-semibold text-lg rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                >
                  Admin
                </button>
                <button
                  onClick={() => {
                    setRole("user");
                    toast.success("Logged in as User", {
                      position: "top-center",
                      autoClose: 2000,
                      hideProgressBar: false,
                      closeOnClick: true,
                      pauseOnHover: true,
                      draggable: true,
                      progress: undefined,
                      theme: "light",
                    });
                  }}
                  className="px-6 py-3 bg-green-500 text-white font-semibold text-lg rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
                >
                  User
                </button>
              </div>
              <p className="text-sm text-gray-600 mt-4">
                Please select your role to continue.
              </p>
            </div>
          </>
        ) : (
          <Main role={role} setRoleHandler={setRoleHandler} />
        )}
      </div>
    </div>
  );
}

export default App;
