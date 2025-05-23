import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./Register.css";
import { useNavigate } from "react-router-dom";

import ToastNotification from "./ToastNotification";

const Register = () => {
  const navigate = useNavigate();

  const handleBackToLogin = () => {
    navigate("/Login");
  };
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    userName: "",
    phoneNumber: "",
    address: "",
    email: "",
    password: "",
    confirmPassword: "",
    gender: "",
  });

  const [lastUserID, setlastUserID] = useState(0);

  // Lấy toàn bộ danh sách users để kiểm tra
  async function getUsers() {
    try {
      const response = await fetch("http://localhost:3000/users");
      if (!response.ok) throw new Error("Failed to fetch users");
      const users = await response.json();
      return users;
    } catch (error) {
      console.error("Error fetching users:", error);
      return [];
    }
  }

  // Lấy ID lớn nhất từ danh sách users
  async function getlastUserID() {
    try {
      const response = await fetch("http://localhost:3000/users");
      if (!response.ok) throw new Error("Failed to fetch users");
      const users = await response.json();
      if (users.length === 0) return 0; // Nếu danh sách rỗng, bắt đầu từ 0
      // Tìm ID lớn nhất (chuyển id về số nếu server trả về chuỗi)
      const maxId = Math.max(...users.map((item) => Number(item.id)));
      return maxId;
    } catch (error) {
      console.error("Error fetching user:", error);
      return 0;
    }
  }

  // Khởi tạo lastUserID khi component mount
  useEffect(() => {
    getlastUserID().then((id) => {
      setlastUserID(id);
    });
  }, []);

  // Gửi dữ liệu lên server
  async function postData(data) {
    try {
      const response = await fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (!response.ok) throw new Error("Failed to add user");
      const result = await response.json();
      console.log("Success:", result);
      setlastUserID((prev) => prev + 1);
    } catch (error) {
      console.error("Error:", error);
    }
  }

  const register = async (userName, firstName, lastName, phoneNumber, address, email, password, gender) => {
    const users = await getUsers();

    const existPhone = users.some(
      (user) => (user.phone_number) === (phoneNumber)
    );

    const existEmail = users.some(
      (user) => (user.email) === (email)
    );

    if (existPhone) {
      alert("This phone number has been used");
      return;
    }
    if (existEmail) {
      alert("This email has been used");
      return;
    }
    const lastId = await getlastUserID();
    const newId = lastId + 1;
    const data = {
      id: newId.toString(),
      user_name: userName,
      first_name: firstName,
      last_name: lastName,
      phone_number: phoneNumber,
      address: address,
      email: email,
      password: password,
      gender: gender,
      admin: false
    };
    await postData(data);
    
    setToast({ type: "success", message: "Registration successful!" });
    setTimeout(() => {
      navigate("/Login");
    }, 1250);
  };

  const handleToastClose = () => {
    setToast(null);
  };
  const [toast, setToast] = useState(null);

  const handleChange = (e) => {
    const { name, value, type } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "radio" ? value : value,
    }));
  };

  const handleValidation = (field) => {
    const inputElement = document.getElementById(field);
    let isValid = true;

    if (field === "firstName" && formData.firstName.trim() === "") {
      setToast({ type: "danger", message: "First Name is required!" });
      isValid = false;
    } else if (field === "lastName" && formData.lastName.trim() === "") {
      setToast({ type: "danger", message: "Last Name is required!" });
      isValid = false;
    } else if (field === "userName" && formData.userName.trim() === "") {
      setToast({ type: "danger", message: "Username is required!" });
      isValid = false;
    } else if (field === "phoneNumber") {
      const phoneRegex = /^[0-9]{10}$/;
      if (!phoneRegex.test(formData.phoneNumber.trim())) {
        setToast({ type: "danger", message: "Phone number is invalid!" });
        isValid = false;
      }
    } else if (field === "address" && formData.address.trim() === "") {
      setToast({ type: "danger", message: "Address is required!" });
      isValid = false;
    } else if (field === "email") {
      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      if (!emailRegex.test(formData.email.trim())) {
        setToast({ type: "danger", message: "Email is invalid!" });
        isValid = false;
      }
    } else if (field === "password" && formData.password.trim() === "") {
      setToast({ type: "danger", message: "Password is required!" });
      isValid = false;
    } else if (field === "confirmPassword") {
      if (formData.confirmPassword.trim() === "") {
        setToast({ type: "danger", message: "Confirm Password is required!" });
        isValid = false;
      } else if (formData.password !== formData.confirmPassword) {
        setToast({ type: "danger", message: "Passwords do not match!" });
        isValid = false;
      }
    } else if (field === "gender" && !formData.gender) {
      setToast({ type: "danger", message: "Please select gender!" });
      isValid = false;
    }

    // Thêm hoặc xóa class dựa vào kết quả kiểm tra
    if (inputElement) {
      if (!isValid) {
        inputElement.classList.add("invalid-input");
        inputElement.classList.remove("valid-input");
      } else {
        inputElement.classList.remove("invalid-input");
        inputElement.classList.add("valid-input");
        setToast(null);
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let hasError = false;
    const fields = [
      "firstName",
      "lastName",
      "userName",
      "phoneNumber",
      "address",
      "email",
      "password",
      "confirmPassword",
      "gender",
    ];

    fields.forEach((field) => {
      handleValidation(field);
      const inputElement = document.getElementById(field);
      if (inputElement && inputElement.classList.contains("invalid-input")) {
        hasError = true;
      }
    });

    if (hasError) {
      setToast({
        type: "danger",
        message: "Please fix errors before submitting!",
      });
      return;
    }

    
    //add
    const Username = document.getElementById("userName").value;
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const phoneNumber = document.getElementById("phoneNumber").value;
    const address = document.getElementById("address").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    // const gender = document.getElementById("gender").value;
    const gender = document.querySelector('input[name="gender"]:checked').value;

    
    register(Username, firstName, lastName, phoneNumber, address, email, password, gender);
    
  };

  return (
    <div className="container-fluid register-container">
      <div className="row">
        <div className="col-sm-12 col-md-6 form-container-register">
          <h1 className="text-center mb-4 text-white">
            <strong>Create Account</strong>
          </h1>
          <input
            className="form-control w-75 mb-3 mx-auto shadow"
            id="firstName"
            name="firstName"
            type="text"
            placeholder="First Name"
            value={formData.firstName}
            onChange={handleChange}
            onBlur={() => handleValidation("firstName")}
          />
          <input
            className="form-control w-75 mb-3 mx-auto shadow"
            id="lastName"
            name="lastName"
            type="text"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={handleChange}
            onBlur={() => handleValidation("lastName")}
          />
          <input
            className="form-control w-75 mb-3 mx-auto shadow"
            id="userName"
            name="userName"
            type="text"
            placeholder="Username"
            value={formData.userName}
            onChange={handleChange}
            onBlur={() => handleValidation("userName")}
          />
          <input
            className="form-control w-75 mb-3 mx-auto shadow"
            id="phoneNumber"
            name="phoneNumber"
            type="text"
            placeholder="Phone Number"
            value={formData.phoneNumber}
            onChange={handleChange}
            onBlur={() => handleValidation("phoneNumber")}
          />
          <input
            className="form-control w-75 mb-3 mx-auto shadow"
            id="address"
            name="address"
            type="text"
            placeholder="Address"
            value={formData.address}
            onChange={handleChange}
            onBlur={() => handleValidation("address")}
          />
          <div className="mb-3 w-75 mx-auto">
            <label className="d-block mb-2 text-white">Gender</label>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="gender"
                id="male"
                checked={formData.gender === "Male"}
                value="Male"
                onChange={handleChange}
                onBlur={() => handleValidation("gender")}
              />
              <label className="form-check-label text-white" htmlFor="male">
                Male
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="gender"
                id="female"
                checked={formData.gender === "Female"}
                value="Female"
                onChange={handleChange}
                onBlur={() => handleValidation("gender")}
              />
              <label className="form-check-label text-white" htmlFor="female">
                Female
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="gender"
                id="other"
                value="Other"
                checked={formData.gender === "Other"}
                onChange={handleChange}
                onBlur={() => handleValidation("gender")}
              />
              <label className="form-check-label text-white" htmlFor="other">
                Other
              </label>
            </div>
          </div>
          <input
            className="form-control w-75 mb-3 mx-auto shadow"
            id="email"
            name="email"
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            onBlur={() => handleValidation("email")}
          />
          <input
            className="form-control w-75 mb-3 mx-auto shadow"
            id="password"
            name="password"
            type="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            onBlur={() => handleValidation("password")}
          />
          <input
            className="form-control w-75 mb-3 mx-auto shadow"
            id="confirmPassword"
            name="confirmPassword"
            type="password"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={handleChange}
            onBlur={() => handleValidation("confirmPassword")}
          />
          <button
            className="btn submit gradient-hover-effect w-75 mb-3 mx-auto p-2"
            type="submit"
            onClick={handleSubmit}
          >
            <b>Register</b>
          </button>

          <div
            className=" cancel-btn w-75 mb-3 mx-auto p-2"
            type="button"
            onClick={handleBackToLogin}
          >
            <a href="./Login">Back To Login</a>
          </div>
        </div>

        {/* Right side background image */}
        <div className="col-sm-12 col-md-6 bg-image"></div>
      </div>
      {/* Toast Message Call */}
      <div id="toast">
        {toast && (
          <ToastNotification
            type={toast.type}
            message={toast.message}
            onClose={handleToastClose}
            duration={4000}
          />
        )}
      </div>
    </div>
  );
};

export default Register;
