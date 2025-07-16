import React from "react";
import { motion } from "framer-motion";

const team = [
  {
    name: "Andre Dzikry S. A.",
    role: "Co-Founder & CEO",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    linkedin: "https://linkedin.com/in/andredzikry",
  },
  {
    name: "Harish Falih A.",
    role: "Co-Founder & CTO",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
    linkedin: "https://linkedin.com/in/harishfalih",
  },
  {
    name: "Rina Salsabila",
    role: "Marketing Lead",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
    linkedin: "https://linkedin.com/in/rinasalsabila",
  },
];

const TeamSection: React.FC = () => (
  <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
    <div className="max-w-6xl mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-extrabold text-center text-primary mb-4 font-sans">
        Tim Kami
      </h2>
      <p className="text-center text-muted mb-10">
        Profesional berpengalaman di bidang otomotif, teknologi, dan pemasaran.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {team.map((member, idx) => (
          <motion.div
            key={member.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow p-8 flex flex-col items-center text-center"
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-24 h-24 rounded-full object-cover mb-4 border-4 border-primary/20 shadow"
              loading="lazy"
            />
            <h3 className="text-lg font-bold text-primary mb-1">
              {member.name}
            </h3>
            <p className="text-muted text-sm mb-2">{member.role}</p>
            <a
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 font-semibold hover:underline text-sm"
            >
              LinkedIn
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default TeamSection;
