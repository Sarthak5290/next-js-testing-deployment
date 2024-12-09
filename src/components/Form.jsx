import PropTypes from "prop-types";

const Form = ({ form, savePassword, handleChange, usernameRef, iconState, setIconState }) => {
  const togglePasswordVisibility = () => {
    setIconState((prevState) => (prevState === "hover" ? "hover-cross" : "hover"));
  };

  return (
    <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-xl">
      <h2 className="text-2xl font-semibold text-gray-700 mb-6 text-center">
        Secure Password Manager
      </h2>

      <input
        name="site"
        value={form.site}
        type="text"
        placeholder="Enter Website URL"
        onChange={handleChange}
        className="w-full p-4 mb-4 text-gray-700 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
      />

      <input
        name="username"
        ref={usernameRef}
        value={form.username}
        onChange={handleChange}
        type="text"
        placeholder="Enter your username"
        className="w-full p-4 mb-4 text-gray-700 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
      />

      <div className="relative">
        <input
          name="password"
          value={form.password}
          onChange={handleChange}
          type={iconState === "hover" ? "password" : "text"}
          placeholder="Enter your password"
          className="w-full p-4 text-gray-700 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
        <span
          className="absolute right-3 top-3 cursor-pointer"
          onClick={togglePasswordVisibility}
        >
          <lord-icon
            src="https://cdn.lordicon.com/dicvhxpz.json"
            trigger="hover"
            state={iconState}
            style={{ width: "30px", height: "30px" }}
          ></lord-icon>
        </span>
      </div>

      <button
        onClick={savePassword}
        className="w-full mt-6 p-4 bg-indigo-500 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-600"
      >
        Save Password
      </button>
    </div>
  );
};

Form.propTypes = {
  form: PropTypes.shape({
    site: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
  }).isRequired,
  savePassword: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  usernameRef: PropTypes.object.isRequired,
  iconState: PropTypes.string.isRequired,
  setIconState: PropTypes.func.isRequired,
};

export default Form;
