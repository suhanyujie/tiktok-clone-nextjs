import type { ShowErrorObject } from "@/app/types";
import { useState } from "react";
import TextInput from "../TextInput";
import { BiLoaderCircle } from "react-icons/bi";

export default function Register() {
  const [loading, setLoading] = useState<boolean>(false);
  const [name, setName] = useState<string | "">("");
  const [email, setEmail] = useState<string | "">("");
  const [password, setPassword] = useState<string | "">("");
  const [confirmPassword, setConfirmPassword] = useState<string | "">("");
  const [error, setError] = useState<ShowErrorObject | null>(null);
  const showError = (type: string) => {
    if (error && Object.entries(error).length > 0 && error?.type === type) {
      return error.message;
    }
    return "";
  };

  const register = () => {
    console.log("register");
  };

  return (
    <>
      <div>
        <h1 className="text-center text-[28px] mb-4 font-bold">Register</h1>

        <div className="px-6 pb-2">
          <TextInput
            string={name}
            placeholder="user name"
            onUpdate={setName}
            inputType="text"
            error={showError("name")}
          />
        </div>

        <div className="px-6 pb-2">
          <TextInput
            string={email}
            placeholder="Email address"
            onUpdate={setEmail}
            inputType="email"
            error={showError("email")}
          />
        </div>

        <div className="px-6 pb-2">
          <TextInput
            string={password}
            placeholder="password"
            onUpdate={setPassword}
            inputType="password"
            error={showError("password")}
          />
        </div>

        <div className="px-6 pb-2">
          <TextInput
            string={confirmPassword}
            placeholder="confirm password"
            onUpdate={setConfirmPassword}
            inputType="password"
            error={showError("confirmPassword")}
          />
        </div>

        <div className="px-6 pb-2 mt-6">
          <button
            type="button"
            disabled={loading}
            onClick={() => register()}
            className={`
                  flex items-center justify-center w-full text-[17px] font-semibold text-white py-3 rounded-sm
                  ${
                    !name || !email || !password || !confirmPassword
                      ? "bg-gray-200"
                      : "bg-[#f02c56]"
                  }
              `}
          >
            {loading ? (
              <BiLoaderCircle
                className="animate-spin"
                color="#ffffff"
                size={25}
              />
            ) : (
              "Register"
            )}
          </button>
        </div>
      </div>
    </>
  );
}
