import React, { useEffect, useMemo, useRef, useState } from "react";
import "./Experience.css";
import TypingAnimation from "../TypingAnimation/TypingAnimation";
import { motion } from "framer-motion";


const experiences = [
      {
    title: "UNC Department of Computer Science",
    image: "/images/unccs.png",
    roles: [
      {
        role: "Undergraduate Research Assistant",
        duration: "August 2026 - Present",
        description:
          "Spatial & Physical Intelligence (SPIN) Lab under Dr. Roni Sengupta",
      },
    ],
  },
    {
    title: "Adobe",
    image: "/images/adobe.png",
    roles: [
      {
        role: "Software Engineer Intern",
        duration: "Summer 2026",
        description:
          "Lightroom - Built internal developer tools, UI infrastructure, and automated testing workflows for Adobe Lightroom, supporting design system modernization and improving the reliability of the desktop experience.",
      },
    ],
  },
  {
    title: "SAS Institute",
    image: "/images/sas.png",
    roles: [
      {
        role: "Software Engineer Intern",
        duration: "May 2025 - January 2026",
        description:
          "Interactive Experiences - Developed and shipped full-stack web applications, including a branded arcade-style game (React, Phaser) for high-visibility SAS campaigns, and GenAI-powered surveys and production-facing frontend features (Next, Prisma, PostgreSQL).",
      },
    ],
  },
  {
    title: "UNC Department of Computer Science",
    image: "/images/unccs.png",
    roles: [
      {
        role: "Teaching Assistant",
        duration: "August 2023 - December 2025",
        description:
          "Supported and taught large-scale undergraduate computer science courses in modern web development (COMP 426) and programming fundamentals (COMP 110), helping 800+ students succeed through office hours, assignment/exam grading, and curriculum improvement.",
      },
    ],
  },
  {
    title: "Centible",
    image: "/images/centible.png",
    roles: [
      {
        role: "Start-Up Lead",
        duration: "May 2025 - December 2025",
        description:
          "Led development of a student-run start-up for a financial tracking app built in Swift, focused on improving user retention and engagement while designing a freemium monetization strategy.",
      },
      {
        role: "Product Manager",
        duration: "January 2025 - May 2025",
        description:
          "Researched and scoped 4 core product features by synthesizing user research and developer documentation. Translated user insights into user flows and wireframes and defined a premium launch strategy targeting $5.5K+ in annual revenue.",
      },
    ],
  },
  {
    title: "App Team Carolina",
    image: "/images/appteam.jpg",
    roles: [
      {
        role: "iOS Developer",
        duration: "January 2023 - January 2024",
        description:
          "Developed weekly iOS projects using Swift and Apple developer frameworks, culminating in an iOS app that scans product ingredient labels using Apple Vision to detect allergens and flagged ingredients.",
      },
    ],
  },
  {
    title: "Develop for Good",
    image: "/images/dfg.png",
    roles: [
      {
        role: "Product Lead",
        duration: "April 2025 - Present",
        description:
          "Led and mentored volunteer product managers and cross-functional teams of designers and developers through the product development cycle, overseeing product strategy and execution of web and mobile apps built for nonprofit organizations including the International Brain Research Organization (IBRO) and Partners in Education Roatan (PIER).",
      },
      {
        role: "Product Manager",
        duration: "April 2024 - August 2024",
        description:
          "Owned product direction for a community-focused web platform supporting street garbage clean-ups in lower-income areas of Bangalore, India, leading a team of 6 designers. Drove user research and usability testing through UserTesting, iterating on wireframes based on direct user feedback and competitive analysis.",
      },
    ],
  },
  {
    title: "1893 Brand Studio",
    image: "/images/dth.png",
    roles: [
      {
        role: "Web Developer",
        duration: "January 2023 - January 2024",
        description:
          "Developed visually engaging websites and digital marketing assets for local Chapel Hill businesses and individual clients, collaborating closely with stakeholders and building sites using WordPress, Figma, Elementor, HTML, and CSS.",
      },
    ],
  },
];

const leadership = [
  {
    title: "HackNC",
    image: "/images/hacknc.jpeg",
    roles: [
      {
        role: "Marketing Director",
        duration: "March 2024 - January 2025",
        description:
          "Drove 1,000+ registrations for North Carolina’s largest hackathon by increasing event visibility through outbound email campaigns, in-class presentations, social media, and partnerships with tech sponsors and CS organizations statewide.",
      },
    ],
  },
  {
    title: "Shiva Dance Center",
    image: "/images/shiva.webp",
    roles: [
      {
        role: "Assistant Dance Teacher",
        duration: "August 2020 - August 2023",
        description:
          "Mentored students ages 10–13 in Indian classical Kathak dance through weekly 2-hour classes, teaching technique, performance, and dance history. Designed choreography and curriculum weekly, and grew the studio’s Facebook and YouTube following by 1,000+ within one year.",
      },
    ],
  },
];

const rowVariants = {
  hidden: { opacity: 0 },
  show: (index) => ({
    opacity: 1,
    transition: {
      duration: 0.35,
      ease: "easeOut",
      delay: index * 0.06, // light stagger as you scroll down
    },
  }),
};

const cardVariants = {
  hidden: (side) => ({
    opacity: 0,
    y: 18,
    x: side === "left" ? -40 : 40,
    filter: "blur(6px)",
  }),
  show: {
    opacity: 1,
    y: 0,
    x: 0,
    filter: "blur(0px)",
    transition: { duration: 0.3, ease: "easeOut" },
  },
};

const dotVariants = {
  hidden: { scale: 0.85, opacity: 0 },
  show: { scale: 1, opacity: 1, transition: { duration: 0.45, ease: "easeOut" } },
};


// flatten company to roles into timeline entries
function toEntries(groups, sectionLabel) {
  const out = [];
  groups.forEach((exp) => {
    exp.roles.forEach((r) => {
      out.push({
        section: sectionLabel,
        company: exp.title,
        logo: exp.image,
        role: r.role,
        duration: r.duration,
        description: r.description,
      });
    });
  });
  return out;
}

function TimelineItem({ entry, index, active, onKeyJump }) {
  const side = index % 2 === 0 ? "left" : "right";

  return (
    <article
      className={`tl-item ${side} ${active ? "is-active" : ""}`}
      tabIndex={0}
      onKeyDown={onKeyJump}
      aria-label={`${entry.company} — ${entry.role}`}
    >
      <div className="tl-col tl-left">
        {side === "left" && (
          <motion.div
            className="tl-card"
            variants={cardVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.35 }}
            custom={side}
          >
            <h3 className="tl-title">{entry.role}</h3>
            <p className="tl-company">{entry.company}</p>
            <div
              className="tl-desc"
              dangerouslySetInnerHTML={{ __html: entry.description }}
            />
          </motion.div>
        )}
        {side === "right" && <div className="tl-date tl-date-left">{entry.duration}</div>}
      </div>

      <div className="tl-mid" aria-hidden="true">
        <motion.div
          className="tl-dot"
          variants={dotVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
        >
          <img src={entry.logo} alt="" loading="lazy" decoding="async" />
        </motion.div>
      </div>

      <div className="tl-col tl-right">
        {side === "right" && (
          <motion.div
            className="tl-card"
            variants={cardVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.35 }}
            custom={side}
          >
            <h3 className="tl-title">{entry.role}</h3>
            <p className="tl-company">{entry.company}</p>
            <div
              className="tl-desc"
              dangerouslySetInnerHTML={{ __html: entry.description }}
            />
          </motion.div>
        )}
        {side === "left" && <div className="tl-date tl-date-right">{entry.duration}</div>}
      </div>
    </article>
  );
}



export default function Experience() {
  const entries = useMemo(() => {
    return [
      ...toEntries(experiences, "Professional"),
      ...toEntries(leadership, "Leadership"),
    ];
  }, []);

  const itemRefs = useRef([]);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    itemRefs.current = itemRefs.current.slice(0, entries.length);

    const obs = new IntersectionObserver(
      (obsEntries) => {
        // choose the most visible intersecting item
        let best = null;
        for (const e of obsEntries) {
          if (!e.isIntersecting) continue;
          if (!best || e.intersectionRatio > best.intersectionRatio) best = e;
        }
        if (!best) return;
        const idx = Number(best.target.getAttribute("data-index"));
        if (!Number.isNaN(idx)) setActiveIndex(idx);
      },
      { root: null, threshold: [0.2, 0.35, 0.5, 0.65] }
    );

    itemRefs.current.forEach((node) => node && obs.observe(node));
    return () => obs.disconnect();
  }, [entries.length]);

  // optional: keyboard jump between items (↑/↓)
  const handleKeyJump = (i) => (e) => {
    if (e.key !== "ArrowDown" && e.key !== "ArrowUp") return;
    e.preventDefault();
    const next = e.key === "ArrowDown" ? i + 1 : i - 1;
    const node = itemRefs.current[next];
    if (node) node.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  return (
    <section className="experience-timeline-container">
      <div className="experience-title">
        <TypingAnimation text="Experiences" />
      </div>

      <div className="tl-wrap">
        <div className="tl-line" aria-hidden="true" />
        {entries.map((entry, i) => (
          <motion.div
          key={`${entry.company}-${entry.role}-${i}`}
          ref={(el) => (itemRefs.current[i] = el)}
          data-index={i}
          className="tl-row"
          variants={rowVariants}
          initial="hidden"
          whileInView="show"
          custom={i}
          viewport={{ once: true, amount: 0.25 }}
          >
          <TimelineItem
            entry={entry}
            index={i}
            active={i === activeIndex}
            onKeyJump={handleKeyJump(i)}
          />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
