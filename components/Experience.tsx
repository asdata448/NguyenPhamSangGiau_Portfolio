'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Briefcase, GraduationCap, Trophy, Building2 } from 'lucide-react';

const experiences = [
  {
    icon: Briefcase,
    title: 'Independent Algo-Trader & Risk Manager',
    role: 'Funded Prop Trader | Quản trị rủi ro định lượng',
    description:
      'Vượt qua hệ thống sát hạch của các quỹ cấp vốn quốc tế với quy mô tài khoản từ $10k, $25k, $50k. Tuân thủ tuyệt đối giới hạn quản trị rủi ro (Max Drawdown luôn < 5%) và duy trì lợi nhuận ổn định (~20%/năm).',
    period: '2024 - Present',
  },
  {
    icon: Trophy,
    title: 'Các Đấu trường Phân tích & Dữ liệu',
    role: 'Thí sinh năng lực | DAZONE (2026) | MyInsight | FSC',
    description:
      'Trực tiếp giải quyết các bài toán Big Data và tối ưu hóa hệ thống tại các cuộc thi phân tích dữ liệu chuyên ngành. Lọt Top 40 toàn quốc cuộc thi Tài chính & Chứng khoán FSC.',
    period: '2025 - 2026',
  },
  {
    icon: GraduationCap,
    title: 'Đại học Ngoại thương (FTU2)',
    role: 'Chuyên ngành Kinh tế đối ngoại | Sinh viên',
    description:
      'Nền tảng kết hợp giữa Khoa học dữ liệu và Supply Chain Management. Nắm vững nghiệp vụ Xuất nhập khẩu (Incoterms, Cargo Insurance), quy trình Purchasing và các mô hình kinh tế vĩ mô.',
    tags: ['Điểm A: Toán học & Kinh tế lượng', 'Điểm A: Cơ sở dữ liệu', 'Điểm A: AI trong CĐS', 'Điểm cao: Nhóm môn Tài chính'],
    period: '2023 - Present',
  },
  {
    icon: Building2,
    title: 'CTCP Chứng khoán Kafi',
    role: 'Associate',
    description:
      'Quan sát quy trình vận hành của một tổ chức tài chính và hệ thống cung cấp dịch vụ môi giới trên thị trường chứng khoán nội địa.',
    period: '2024',
  },
  {
    icon: Briefcase,
    title: 'Quản lý dự án (Project Management)',
    role: 'Head of Project Development & CEM @ EHub FTU2',
    description:
      'Thiết lập KPIs, quản lý tiến độ (Lead-time) và giám sát quá trình Cost Allocation cho các dự án khởi nghiệp quy mô 100+ sinh viên tham gia.',
    period: '2024 - 2025',
  },
];

export default function Experience() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section
      ref={ref}
      id="experience"
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
            <span className="gradient-text">Nền tảng Thực tiễn & Học thuật</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Hành trình phát triển chuyên môn qua các dự án thực tế và cơ sở học
            thuật vững chắc
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-teal-500 to-teal-600 transform md:-translate-x-1/2" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className={`relative flex flex-col md:flex-row gap-6 ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-teal-500 rounded-full border-4 border-gray-950 transform -translate-x-1/2 md:-translate-x-1/2 glow-teal" />

                {/* Content */}
                <div className="ml-12 md:ml-0 md:w-1/2">
                  <div className="card-gradient border border-gray-800 rounded-xl p-6 hover:border-teal-500/30 transition-all duration-300 group">
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-lg bg-teal-500/10 text-teal-400 group-hover:bg-teal-500/20 transition-colors">
                        <exp.icon className="w-6 h-6" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-100 mb-1">
                          {exp.title}
                        </h3>
                        <p className="text-teal-400 font-medium text-sm mb-2">
                          {exp.role}
                        </p>
                        <span className="inline-block text-xs text-gray-500 bg-gray-800 px-3 py-1 rounded-full">
                          {exp.period}
                        </span>
                        <p className="text-gray-400 mt-3 leading-relaxed">
                          {exp.description}
                        </p>
                        {exp.tags && (
                          <div className="flex flex-wrap gap-2 mt-4">
                            {exp.tags.map((tag, i) => (
                              <span
                                key={i}
                                className="text-xs bg-teal-500/10 text-teal-400 px-3 py-1 rounded-full border border-teal-500/20"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
