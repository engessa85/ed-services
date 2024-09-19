import React from "react";
import ServiceCard from "./ServiceCard";

function ElectricalServices() {
  return (
    <div className="mt-5 container mx-auto grid  lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
      <div></div>
      <ServiceCard
        type="Electical"
        title="Electrical Circuit"
        desc="This course provides a comprehensive introduction to the fundamentals of electrical circuits. Students will learn about the basic components of electrical circuits, their characteristics, and how they are interconnected to form various circuit configurations. The course will cover topics such as circuit analysis, network theorems, transient analysis, and AC circuits."
      />
      <ServiceCard
        type="Electrical"
        title="Electrical Lab"
        desc="This laboratory course complements the theoretical concepts learned in the Electrical Circuits course. Students will gain practical experience in designing, building, and testing electrical circuits. Through hands-on experiments, they will verify theoretical principles and develop problem-solving skills."
      />
    </div>
  );
}

export default ElectricalServices;
