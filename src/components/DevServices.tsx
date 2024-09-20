import React from "react";
import Devcard from "./DevCard";
import {
  django,
  djangores,
  frontend1,
  frontend2,
  frontend3,
  ds,
  script,
  sc,
  mo
} from "@/app/data/ProgrammingLanguages";

function DevServices() {
  return (
    <div className="mt-5 container mx-auto grid  lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
      <Devcard
        type="Backend"
        title="Backend App using Django"
        desc="We provide backend web app development using Django, with database support for SQLite and PostgreSQL. Our service ensures secure, scalable, and high-performance applications tailored to your needs, whether for lightweight projects or complex, production-ready systems."
        imagePath="/django.jpeg"
        language={django}
      />

      <Devcard
        type="Backend"
        title="API App using Django REST framework"
        desc="We offer API development using Django REST Framework, delivering secure, scalable, and high-performance APIs for seamless integration with mobile and web apps. Our service ensures efficient data handling and easy-to-maintain backends."
        imagePath="/djangorest.png"
        language={djangores}
      />

      <Devcard
        type="Frontend"
        title="Frontend App using Html, CSS and JS"
        desc="Our Frontend Development Service creates responsive and user-friendly web applications using HTML, CSS, and JavaScript. We design visually appealing and interactive interfaces that provide a smooth user experience across all devices."
        imagePath="/front1.png"
        language={frontend1}
      />

      <Devcard
        type="Frontend"
        title="Frontend App using ReactJS"
        desc="Our Frontend Development Service using ReactJS focuses on building dynamic, high-performance web applications with a modern and interactive user experience. ReactJS allows us to create fast, scalable, and reusable components, making it ideal for developing complex and responsive user interfaces"
        imagePath="/react.jpeg"
        language={frontend2}
      />

      <Devcard
        type="Frontend"
        title="Frontend App using NextJS"
        desc="Our Frontend Development Service using Next.js specializes in creating fast, SEO-friendly, and scalable web applications. Next.js enhances performance with server-side rendering (SSR) and static site generation (SSG), ensuring optimal load times and improved SEO. We build dynamic, responsive user interfaces with a modern design."
        imagePath="/next.jpg"
        language={frontend3}
      />

      <Devcard
        type="DataScience"
        title="Data Science and ML Projects"
        desc="Our Data Science and Machine Learning (ML) Projects Service provides tailored solutions for extracting insights and building predictive models from data. We use advanced data analysis, machine learning algorithms, and AI techniques to solve complex business problems, automate processes, and forecast trends. From data collection and cleaning to model development and deployment."
        imagePath="/ds.jpg"
        language={ds}
      />

      <Devcard
        type="Scripting"
        title="Scritpting using Python"
        desc="Our Scripting Service using Python offers efficient solutions for automating tasks, data manipulation, and system integration. Python's versatility allows us to create scripts that streamline processes, enhance productivity"
        imagePath="/python.jpg"
        language={script}
      />
      <Devcard
        type="Automation"
        title="Automation and Scraping using Python"
        desc="Our Automation and Web Scraping Service using Python specializes in automating repetitive tasks and extracting valuable data from websites. Using Python's powerful libraries, we develop custom scripts to streamline workflows, gather real-time data, and perform data analysis efficiently."
        imagePath="/auto.jpg"
        language={sc}
      />
      <Devcard
        type="Mobile"
        title="Mobile App using React Native"
        desc="Our Mobile App Development Service using React Native creates high-quality, cross-platform apps for iOS and Android. With a shared codebase, we deliver responsive, user-friendly solutions that reduce development time and costs while ensuring a native look and feel."
        imagePath="/native.png"
        language={mo}
      />
    </div>
  );
}

export default DevServices;
