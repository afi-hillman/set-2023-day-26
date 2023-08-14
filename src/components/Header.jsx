import React from "react";
import Button from "./ui/Button";
import logo from "../assets/logo.png";

const Header = () => {
  const registerButtonStyle = { borderRadius: "8px" };
  return (
    <div className="flex justify-between sticky top-0 bg-white w-screen py-6 px-40 border">
      <div className="w-40">
        <img src={logo} alt="logo" />
      </div>
      <div className="flex justify-center items-center gap-4">
        <Button variant="ghost">📊 Stats</Button>
        <Button variant="ghost">🏹 Talents</Button>
        <Button variant="ghost">📢 Post Jobs</Button>
        <Button variant="ghost">💌 Get Job Alerts</Button>
        <Button variant="ghost">☁ Log in</Button>
        <Button variant="solid" style={registerButtonStyle}>
          ✨ Register
        </Button>
      </div>
    </div>
  );
};
export default Header;
