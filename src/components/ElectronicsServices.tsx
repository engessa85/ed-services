import React from "react";
import ServiceCard from "./ServiceCard";

function ElectronicsServices() {
  return (
    <div className="mt-5 container mx-auto grid  lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
      <ServiceCard
        type="Electronics"
        title="Electronics Circuit"
        desc="This course provides a comprehensive introduction to the fundamentals of electronics circuits. Students will learn about PN Diodes, BJTs, and MOSFETs. Semiconductor device basics, characteristics and models. Diode applications. Transistor biasing and basic amplifier configurations."
      />
      <ServiceCard
        type="Electronics"
        title="Electronics Lab"
        desc="This laboratory course complements the theoretical concepts learned in the Electronics Circuits course. Students will gain practical experience in designing, building, and testing electronic circuits. Through hands-on experiments, they will verify theoretical principles and develop problem-solving skills."
      />
      <ServiceCard
        type="Embedded"
        title="Microcontrollers"
        desc="This course provides an introduction to microcontrollers, which are small, low-power computers that are embedded in various electronic devices. Students will learn about the architecture, programming, and applications of microcontrollers."
      />
      <ServiceCard
        type="Embedded"
        title="Arduino"
        desc="This course introduces Arduino, a popular open-source microcontroller platform used for prototyping and building electronic projects. Students will learn about the Arduino hardware, programming environment, and its applications in various fields."
      />
    </div>
  );
}

export default ElectronicsServices;
