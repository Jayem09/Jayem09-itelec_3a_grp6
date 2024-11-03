import React from "react";
import Banner from "./Banner";
import { Link } from "react-router-dom";
import Hero from "../../components/Hero";
export default function error() {
  return (
    <Hero>
      <Banner title="Error idk why" subtitle="search mo sa goggle">
        <Link to="/" className="btn-primary">
          go home mf
        </Link>
      </Banner>
    </Hero>
  );
}
