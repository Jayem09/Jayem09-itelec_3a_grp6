import React from "react";
import Hero from "../../components/Hero";
import Banner from "../Dashboard/Banner";
import { Link } from "react-router-dom";
export default function home() {
  return (
    <Hero>
      <Banner
        title="VIP"
        subtitle="VIP rooms starting at 999999999999999 pisos only"
      >
        <Link to="/rooms" className="btn-primary">
          our rooms
        </Link>
      </Banner>
    </Hero>
  );
}
