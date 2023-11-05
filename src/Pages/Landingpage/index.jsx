import React, { useState } from "react";
import Herosection from "../../Components/Herosection";
import Howitworks from "../../Components/Howitworks";
import Partners from "../../Components/Partners";
import Joinform from "../../Components/Joinform";
import FAQ from "../../Components/FAQ";
import Footer from "../../Components/Footer";
const Index = () => {
  const [partner, setPartners] = useState("");

  return (
    <div className="App">
      <Herosection />
      <Howitworks />
      <Partners setPartner={setPartners} />
      <Joinform partner={partner} setPartners={setPartners} />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Index;
