"use client";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { login } from "../component/authSlice";
import { users } from "../component/data";
import { ToastContainer, toast } from 'react-toastify';
import { MdAccountCircle } from "react-icons/md";
export default function Login() {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const router = useRouter();
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (isAuthenticated) {
      router.push("/");
    }
  }, [isAuthenticated, router]);
const [loading, setLoading] = useState(false);

const handleSubmit = (e) => {
  e.preventDefault();
  setLoading(true);
  const user = users.find(
    (user) => user.email === email && user.password === password
  );
  if (user) {
    dispatch(login(user));
    router.push("/");
  } else {
    toast.error("Your Email or password is not correct!", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      theme: "dark",
    });
  }
  setLoading(false);
};


  return (
    <div className="flex flex-col items-center login border-2 p-2 w-1/2 rounded-2xl m-auto">
      <ToastContainer/>
      <MdAccountCircle className="text-6xl"/>
      <h1 className="text-2xl font-bold mb-4">Login</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-80">
        <input
          type="email"
          placeholder="Email"
          className="p-2 rounded-2xl border outline-0"
          value={email}
          required
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="p-2 rounded-2xl border outline-0"
          value={password}
          required
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
  type="submit"
  disabled={loading}
  className={`p-2 ${loading ? "bg-gray-400" : "bg-blue-500"} text-white rounded-2xl cursor-pointer`}
>
  {loading ? "Logging in..." : "Login"}
</button>

      </form>
    </div>
  );
}
