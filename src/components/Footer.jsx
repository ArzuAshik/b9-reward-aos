import React from "react";

export default function Footer() {
  return (
    <footer className="bg-black">
      <div className="container mx-auto">
        <h2 className="text-center text-white text-xl p-16">
          &copy; {new Date().getFullYear()} AR Arzu All Rights Reserved
        </h2>
      </div>
    </footer>
  );
}
