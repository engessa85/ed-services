import React from 'react'
import ServiceCard from './ServiceCard'

export default function ComputerServices() {
  return (
    <div className="mt-5 container mx-auto grid  lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">

    <ServiceCard
      type="Digital"
      title="Digital Circuit"
      desc="This course introduces the fundamental principles of digital circuits, which form the building blocks of modern electronic systems. Students will learn about the binary number system, Boolean algebra, logic gates, combinational and sequential circuits, and state machines."
    />
    <ServiceCard
      type="Network"
      title="Network CCNA"
      desc="This course provides a comprehensive introduction to the fundamentals of networking, focusing on Cisco networking technologies. Students will learn about network topologies, protocols, addressing, routing, and switching."
    />
    <ServiceCard
      type="Programming"
      title="C programming"
      desc="This course provides a comprehensive introduction to the C programming language, one of the most widely used languages in software development. Students will learn the fundamental concepts of C programming, including syntax, data types, control flow, functions, pointers, and memory management."
    />
    <ServiceCard
      type="Programming"
      title="Python programming"
      desc="This course provides a comprehensive introduction to the Python programming language, one of the most popular and versatile languages in use today. Students will learn the fundamental concepts of Python programming, including syntax, data types, control flow, functions, modules, and object-oriented programming."
    />
  </div>
  )
}
