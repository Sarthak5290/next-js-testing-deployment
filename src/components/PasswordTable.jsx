import PropTypes from "prop-types"; // Import PropTypes
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { toast } from "react-toastify";

const PasswordTable = ({ passwordArray, setPasswordArray }) => {
  const handleDelete = (index) => {
    const updatedPasswords = passwordArray.filter((_, i) => i !== index);
    setPasswordArray(updatedPasswords);
    localStorage.setItem("passwords", JSON.stringify(updatedPasswords));
    toast.success("Password deleted successfully!");
  };

  return (
    <div className="w-[87.5%] bg-white p-6 rounded-xl shadow-xl mt-10">
      <h2 className="text-xl font-semibold text-gray-700 mb-4">Your Saved Passwords</h2>

      {passwordArray.length === 0 ? (
        <p className="text-center text-gray-500">No password available</p>
      ) : (
        <table className="w-full border-collapse border border-gray-200">
          <thead>
            <tr>
              <th>Sr. No.</th>
              <th>Website</th>
              <th>Username</th>
              <th>Password</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {passwordArray.map((password, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{password.site}</td>
                <td>{password.username}</td>
                <td>********</td>
                <td>
                  <FontAwesomeIcon
                    icon={faTrash}
                    className="cursor-pointer"
                    onClick={() => handleDelete(index)}
                  />
                  {/* add edit icon and add thier functionaliyt here */}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

// Add PropTypes validation
PasswordTable.propTypes = {
  passwordArray: PropTypes.arrayOf(
    PropTypes.shape({
      site: PropTypes.string.isRequired,
      username: PropTypes.string.isRequired,
      password: PropTypes.string.isRequired,
    })
  ).isRequired,
  setPasswordArray: PropTypes.func.isRequired,
};

export default PasswordTable;
