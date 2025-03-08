import { useState } from "react";
import { FaFacebook, FaGoogle } from "react-icons/fa";

export default function RegisterPage() {
  const [phone, setPhone] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <div className="flex h-screen">
      {/* Left Side: Register Form */}
      <div className="w-1/2 flex items-center justify-center p-10">
        <img src="/Logo.png" alt="Rent Connect" className="absolute top-2 left-5 w-32" />
        <div className="max-w-screen-md w-full">
          <h1 className="text-3xl font-bold">Đăng ký</h1>
          <p className="mt-2 text-gray-600">
            Đã có tài khoản? <span className="text-blue-600 font-semibold">Đăng nhập ngay!</span>
          </p>
          
          <div className="mt-6">
            <label className="block text-gray-700">Số điện thoại</label>
            <input
              type="text"
              className="w-full mt-1 p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              placeholder="Nhập số điện thoại của bạn"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          
          <div className="mt-4">
            <label className="block text-gray-700">Tên người dùng</label>
            <input
              type="text"
              className="w-full mt-1 p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              placeholder="Nhập tên người dùng của bạn"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          
          <div className="mt-4">
            <label className="block text-gray-700">Mật khẩu</label>
            <input
              type="password"
              className="w-full mt-1 p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              placeholder="Nhập mật khẩu"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          
          <div className="mt-4">
            <label className="block text-gray-700">Xác nhận mật khẩu</label>
            <input
              type="password"
              className="w-full mt-1 p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              placeholder="Xác nhận mật khẩu"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
          
          <button className="w-full mt-6 bg-orange-500 text-white py-3 rounded-md hover:bg-orange-600">
            Đăng ký
          </button>
          
          <p className="text-center mt-6 text-gray-600">hoặc tiếp tục với</p>
          
          <div className="flex justify-center mt-4 space-x-4">
            <FaFacebook className="text-blue-600 text-2xl cursor-pointer" />
            <FaGoogle className="text-red-500 text-2xl cursor-pointer" />
          </div>
        </div>
      </div>
      
      {/* Right Side: Image */}
      <div className="w-1/2">
        <img
          src="/Pic1.jpeg"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}