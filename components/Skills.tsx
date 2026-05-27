'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Database, TrendingUp, BarChart3, Shield, Languages } from 'lucide-react';

const skillCategories = [
  {
    icon: Code,
    title: 'Lập trình & Phân tích',
    color: 'text-blue-400',
    skills: [
      { name: 'Python (Pandas, ML)', level: 90 },
      { name: 'SQL (Big Data)', level: 85 },
      { name: 'Deep Learning (LSTM)', level: 80 },
      { name: 'R Programming', level: 75 },
    ],
  },
  {
    icon: Database,
    title: 'Data & Visualization',
    color: 'text-green-400',
    skills: [
      { name: 'PowerBI', level: 85 },
      { name: 'Excel Advanced', level: 90 },
      { name: 'Tableau', level: 75 },
      { name: 'Data Modeling', level: 80 },
    ],
  },
  {
    icon: TrendingUp,
    title: 'Trading & Algo Systems',
    color: 'text-teal-400',
    skills: [
      { name: 'MetaTrader 5 (MQL5)', level: 85 },
      { name: 'TradingView (Pine Script)', level: 90 },
      { name: 'Algorithmic Trading', level: 80 },
      { name: 'Risk Management', level: 95 },
    ],
  },
  {
    icon: BarChart3,
    title: 'Supply Chain & Logistics',
    color: 'text-purple-400',
    skills: [
      { name: 'Supply Chain Management', level: 85 },
      { name: 'Procurement', level: 80 },
      { name: 'International Trade', level: 85 },
      { name: 'Cost Allocation', level: 80 },
    ],
  },
  {
    icon: Shield,
    title: 'Financial Analysis',
    color: 'text-yellow-400',
    skills: [
      { name: 'Quantitative Analysis', level: 85 },
      { name: 'Macroeconomics', level: 80 },
      { name: 'Financial Modeling', level: 85 },
      { name: 'Portfolio Management', level: 80 },
    ],
  },
  {
    icon: Languages,
    title: 'Ngôn ngữ',
    color: 'text-pink-400',
    skills: [
      { name: 'Tiếng Anh (Proficient)', level: 85 },
      { name: 'Tiếng Trung (HSK)', level: 70 },
      { name: 'Tiếng Việt (Native)', level: 100 },
    ],
  },
];

export default function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section
      ref={ref}
      id="skills"
      className="py-20 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="gradient-text">Năng lực Cốt lõi</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Kỹ năng chuyên môn đa dạng từ Phân tích Dữ liệu đến Quản trị Chuỗi
            cung ứng
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group"
            >
              <div className="card-gradient border border-gray-800 rounded-xl p-6 hover:border-teal-500/30 transition-all duration-300 h-full">
                <div className="flex items-center gap-3 mb-6">
                  <div className={`p-3 rounded-lg bg-gray-800 ${category.color} group-hover:bg-gray-700 transition-colors`}>
                    <category.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-100">
                    {category.title}
                  </h3>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm text-gray-300">
                          {skill.name}
                        </span>
                        <span className="text-xs text-teal-400 font-medium">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={inView ? { width: `${skill.level}%` } : {}}
                          transition={{
                            delay: index * 0.1 + skillIndex * 0.05 + 0.3,
                            duration: 0.8,
                            ease: 'easeOut',
                          }}
                          className="h-full bg-gradient-to-r from-teal-500 to-teal-600 rounded-full"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
