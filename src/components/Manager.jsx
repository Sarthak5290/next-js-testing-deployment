import { useEffect, useState, useRef } from "react";
import Form from "./Form";
import PasswordTable from "./PasswordTable";
import Header from "./Header";
import Background from "./Backgroud";
import { ToastContainer, toast } from "react-toastify"; // Import Toastify
import "react-toastify/dist/ReactToastify.css"; // Import Toastify styles

const Manager = () => {
  const [iconState, setIconState] = useState("hover"); // State to control the icon state (show/hide)
  const [form, setForm] = useState({ site: "", username: "", password: "" }); // Form data
  const [passwordArray, setPasswordArray] = useState([]); // Array to hold saved passwords
  const [isEditing, setIsEditing] = useState(false); // Track if the form is in edit mode
  const [editIndex, setEditIndex] = useState(null); // Track the index being edited
  const usernameRef = useRef(null); // Ref for focusing on the username input

  // Load passwords from localStorage when the component mounts
  useEffect(() => {
    const passwords = localStorage.getItem("passwords");
    if (passwords) {
      setPasswordArray(JSON.parse(passwords)); // Use the data from localStorage
    }
  }, []);

  // Update localStorage whenever the password array changes
  useEffect(() => {
    localStorage.setItem("passwords", JSON.stringify(passwordArray));
  }, [passwordArray]);

  // Save or update a password
  const savePassword = () => {
    if (!form.site || !form.username || !form.password) {
      toast.error("Please fill in all fields before saving."); // Show error toast
      return;
    }

    if (isEditing) {
      const updatedPasswords = [...passwordArray];
      updatedPasswords[editIndex] = form; // Update the password at the edit index
      setPasswordArray(updatedPasswords);
      toast.success("Password updated successfully!");
      setIsEditing(false);
      setEditIndex(null);
    } else {
      setPasswordArray([...passwordArray, form]); // Add a new password
      toast.success("Password saved successfully!");
    }

    setForm({ site: "", username: "", password: "" }); // Reset form
    usernameRef.current.focus(); // Focus back on username field
  };

  // Handle form field changes
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Handle edit request
  const handleEdit = (index) => {
    setForm(passwordArray[index]); // Populate the form with the password to edit
    setIsEditing(true);
    setEditIndex(index);
    usernameRef.current.focus(); // Focus back on username field
  };

  return (
    <>
      <Background />
      <div className="container mx-auto flex flex-col items-center justify-center min-h-screen px-6">
        <Header />
        <Form
          form={form}
          savePassword={savePassword}
          handleChange={handleChange}
          usernameRef={usernameRef}
          iconState={iconState}
          setIconState={setIconState}
        />
        <PasswordTable
          passwordArray={passwordArray}
          setPasswordArray={setPasswordArray}
          setForm={handleEdit} // Pass handleEdit to update form when editing
        />
      </div>
      <ToastContainer /> {/* Toast container to render the toast notifications */}
    </>
  );
};

export default Manager;
