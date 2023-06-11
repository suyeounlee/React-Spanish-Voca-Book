import { Link } from "react-router-dom";
import React from "react";

export default function EmptyPage() {
  return (
    <>
      <h2>Error occured.</h2>
      <Link to="/">Go back</Link>
    </>
  );
}