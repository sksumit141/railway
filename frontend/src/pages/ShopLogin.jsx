import React, { useState, useEffect } from "react";
import { Eye, EyeOff, RefreshCw } from "lucide-react";

const ShopLogin = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [captcha, setCaptcha] = useState("");
  const [captchaInput, setCaptchaInput] = useState("");
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const generateCaptcha = () => {
    const chars =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let result = "";
    for (let i = 0; i < 6; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setCaptcha(result);
    setCaptchaInput("");
  };

  useEffect(() => {
    generateCaptcha();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.username.trim()) {
      newErrors.username = "Username is required";
    } else if (formData.username !== "electrical") {
      newErrors.username = "Invalid username";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password !== "electrical123") {
      newErrors.password = "Invalid password";
    }

    if (!captchaInput.trim()) {
      newErrors.captcha = "Captcha is required";
    } else if (captchaInput !== captcha) {
      newErrors.captcha = "Invalid Captcha"; // Fixed typo from 'captch' to 'captcha'
    }

    return newErrors;
  };

  const handleSubmit = async () => {
    setIsLoading(true);

    const newErrors = validateForm();
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      // Simulate login process
      setTimeout(() => {
        alert("Login successful!");
        setIsLoading(false);
        // Reset form
        setFormData({ username: "", password: "" });
        setCaptchaInput("");
        generateCaptcha();
      }, 1500);
    } else {
      setIsLoading(false);
      if (newErrors.captcha) {
        generateCaptcha();
      }
    }
  };

  return (
    <div className="h-100vh  bg-gradient-to-br bg-white flex items-center justify-center   ">
      <div className="w-full max-w-5xl bg-white rounded-lg shadow-2xl overflow-hidden">
        <div className="flex min-h-[500px]">
          {/* Left Side - Image Section */}
          <div className="flex-1 bg-slate-800 flex items-center justify-center p-0 relative overflow-hidden">
            <img
              src="/IMGP2556.jpg"
              alt="WAG-9 Locomotive"
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
          </div>

          {/* Vertical Divider */}
          <div className="w-px bg-gradient-to-b from-transparent via-slate-300 to-transparent"></div>

          {/* Right Side - Login Form */}
          <div className="flex-1 p-12 flex items-center justify-center bg-white">
            <div className="w-full max-w-sm">
              <div className="mb-8">
                <h1 className="text-3xl font-bold text-slate-900 mb-2">
                  Shop Login
                </h1>
                <p className="text-slate-600">
                  Enter your credentials to continue
                </p>
              </div>

              <div className="space-y-6">
                {/* Username Field */}
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Username
                  </label>
                  <input
                    type="text"
                    name="username"
                    value={formData.username}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border rounded-lg bg-white focus:ring-2 focus:ring-slate-500 focus:border-transparent transition-all duration-200 ${
                      errors.username
                        ? "border-red-400 focus:ring-red-200"
                        : "border-slate-300 hover:border-slate-400"
                    }`}
                    placeholder="Enter your username"
                  />
                  {errors.username && (
                    <p className="mt-2 text-sm text-red-600 flex items-center">
                      <span className="mr-1">⚠</span>
                      {errors.username}
                    </p>
                  )}
                </div>

                {/* Password Field */}
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Password
                  </label>
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      name="password"
                      value={formData.password}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 pr-12 border rounded-lg bg-white focus:ring-2 focus:ring-slate-500 focus:border-transparent transition-all duration-200 ${
                        errors.password
                          ? "border-red-400 focus:ring-red-200"
                          : "border-slate-300 hover:border-slate-400"
                      }`}
                      placeholder="Enter your password"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-500 hover:text-slate-700 transition-colors duration-200"
                    >
                      {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                    </button>
                  </div>
                  {errors.password && (
                    <p className="mt-2 text-sm text-red-600 flex items-center">
                      <span className="mr-1">⚠</span>
                      {errors.password}
                    </p>
                  )}
                </div>

                {/* Captcha Field */}
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Security Code
                  </label>
                  <div className="flex space-x-3">
                    <input
                      type="text"
                      value={captchaInput}
                      onChange={(e) => setCaptchaInput(e.target.value)}
                      className={`flex-1 px-4 py-3 border rounded-lg bg-white focus:ring-2 focus:ring-slate-500 focus:border-transparent transition-all duration-200 ${
                        errors.captcha
                          ? "border-red-400 focus:ring-red-200"
                          : "border-slate-300 hover:border-slate-400"
                      }`}
                      placeholder="Enter code"
                    />
                    <div className="px-4 py-3 bg-slate-50 border border-slate-300 rounded-lg font-mono text-lg font-bold text-slate-800 select-none min-w-[90px] text-center">
                      {captcha}
                    </div>
                    <button
                      type="button"
                      onClick={generateCaptcha}
                      className="p-3 text-slate-500 hover:text-slate-700 border border-slate-300 rounded-lg hover:bg-slate-50 transition-all duration-200 hover:scale-105"
                      title="Generate new code"
                    >
                      <RefreshCw size={20} />
                    </button>
                  </div>
                  {errors.captcha && (
                    <p className="mt-2 text-sm text-red-600 flex items-center">
                      <span className="mr-1">⚠</span>
                      {errors.captcha}
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="button"
                  onClick={handleSubmit}
                  disabled={isLoading}
                  className="w-full bg-slate-900 text-white py-3 px-6 rounded-lg font-semibold hover:bg-slate-800 focus:ring-4 focus:ring-slate-300 focus:ring-offset-2 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-[1.02] active:scale-[0.98] mt-8"
                >
                  {isLoading ? (
                    <div className="flex items-center justify-center">
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-3"></div>
                      Signing In...
                    </div>
                  ) : (
                    "Sign In"
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopLogin;
