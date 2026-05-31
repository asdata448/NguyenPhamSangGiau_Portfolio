'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, X, ArrowRight, FileText, Code } from 'lucide-react';
import { useState } from 'react';

type ProjectLink = {
  url: string;
  label: string;
  icon?: 'FileText' | 'Code' | 'ExternalLink';
};

const projects = [
  {
    id: 1,
    title: 'Enterprise Forecast Pipeline',
    tech: ['Python', 'SQL', 'MLOps', 'FastAPI'],
    description:
      'Mô hình Machine Learning xử lý dữ liệu chuỗi thời gian, áp dụng đo lường động lượng tài chính hoặc tích hợp Demand Forecasting trong SCM.',
    longDescription: `
      <h4 class="text-xl font-bold mb-4">Kiến trúc & Tính ứng dụng:</h4>
      <ul class="space-y-3 text-gray-300">
        <li><strong>Mô hình hóa dữ liệu:</strong> Ứng dụng chuyên sâu kiến trúc Deep Learning (mạng nơ-ron chuỗi thời gian LSTM kết hợp Transformer Attention Blocks).</li>
        <li><strong>Xử lý dữ liệu quy mô lớn:</strong> Thành thạo truy vấn và tối ưu hóa hệ thống bằng SQL trên các tập dữ liệu lớn (Dataset đạt mức 1,000,000+ dòng).</li>
        <li><strong>Chuẩn hóa doanh nghiệp:</strong> Triển khai hệ thống theo chuẩn production-grade tích hợp Model Registry, Schema Contract và kiểm tra chặt chẽ rò rỉ dữ liệu.</li>
        <li><strong>Tính linh hoạt đa ngành:</strong> Thuật toán nền tảng này cung cấp Insight sắc bén cho thị trường tài chính, đồng thời là bộ khung lý tưởng để giải quyết bài toán dự báo nhu cầu.</li>
      </ul>
    `,
    icon: '🤖',
    gradient: 'from-blue-500 to-purple-600',
    links: [
      {
        url: 'https://canva.link/x9z4qrbtncmuvor',
        label: 'Báo cáo dự án',
        icon: 'FileText',
      },
      {
        url: 'https://colab.research.google.com/drive/1vneaFTttBPvJp6BD3VdHIqB286Hx7_K3?usp=sharing',
        label: 'Chi tiết bộ mã mô hình hóa',
        icon: 'Code',
      },
      {
        url: 'https://colab.research.google.com/drive/1t1Au0Fqm-_SDU0J6j6yp0kgoABBLVbO4?usp=sharing',
        label: 'Bộ mã xử lý dữ liệu',
        icon: 'Code',
      },
    ] as ProjectLink[],
  },
  {
    id: 2,
    title: 'Algorithmic Risk System',
    tech: ['Pine Script', 'MQL5', 'VPS', 'Genetic Algorithms'],
    description:
      'Hệ thống tự động hóa logic phân tích. Backtest 6 năm giảm 43% Max Drawdown, bảo chứng năng lực thiết lập Position Sizing và Loss Control.',
    longDescription: `
      <h4 class="text-xl font-bold mb-4">Logic Vận hành & Quản trị định lượng:</h4>
      <ul class="space-y-3 text-gray-300">
        <li><strong>Tự động hóa luồng phân tích:</strong> Chuyển đổi các bộ quy tắc kỹ thuật thành Indicators/Expert Advisors chạy độc lập trên máy chủ ảo (VPS).</li>
        <li><strong>Kiểm soát rủi ro chặt chẽ:</strong> Hệ thống tự động tính toán Position Sizing (Khối lượng phân bổ) khớp chuẩn mức rủi ro quỹ cấp vốn khắt khe.</li>
        <li><strong>Kiểm định lịch sử (Backtesting):</strong> Thực hiện kiểm thử chuyên sâu trên 6 năm dữ liệu lịch sử, kết hợp tối ưu hóa thuật toán di truyền giúp giảm 43% tỷ lệ Max Drawdown.</li>
        <li><strong>Bảo chứng thực tế:</strong> Quá trình stress-test khắc nghiệt chứng minh mô hình luôn duy trì trạng thái có lợi nhuận (Profitable).</li>
      </ul>
    `,
    icon: '📈',
    gradient: 'from-teal-500 to-green-600',
    links: [] as ProjectLink[],
  },
  {
    id: 3,
    title: 'Dự án Giao dịch "Modern Turtle"',
    tech: ['Genetic Algorithms', 'Backtesting', 'Risk Management'],
    description:
      'Nâng cấp hệ thống giao dịch kinh điển của nhóm Turtles (1983) bằng cách tích hợp các bộ lọc nâng cao như Thuật toán Di truyền.',
    longDescription: `
      <h4 class="text-xl font-bold mb-4">Chi tiết dự án:</h4>
      <ul class="space-y-3 text-gray-300">
        <li><strong>Modern Turtle Trading (02/2026):</strong> Nâng cấp hệ thống giao dịch kinh điển của nhóm Turtles (1983) bằng cách tích hợp các bộ lọc nâng cao như Thuật toán Di truyền (Genetic Algorithms).</li>
        <li><strong>Tái thiết lập:</strong> Cải tiến quy tắc vào lệnh và hệ thống quản trị rủi ro để thích ứng với điều kiện thị trường hiện đại.</li>
        <li><strong>Kỹ năng áp dụng:</strong> Algorithmic Trading, Backtesting, Thuật toán Di truyền, Quản trị rủi ro.</li>
      </ul>
    `,
    icon: '🐢',
    gradient: 'from-yellow-500 to-orange-600',
    links: [
      {
        url: 'https://colab.research.google.com/drive/1qjTxHYjVcWJaYL3BBJGwvnjoXg6fqpIz?usp=sharing',
        label: 'Xem Demo',
        icon: 'ExternalLink',
      },
    ] as ProjectLink[],
  },
  {
    id: 4,
    title: 'Công cụ Phân tích Kỹ thuật Nâng cao',
    tech: ['Pine Script v5', 'MetaTrader 5', 'DSP', 'Z-score'],
    description:
      'Tự lập trình và phát triển các chỉ báo hỗ trợ giao dịch phức tạp ứng dụng Xử lý Tín hiệu Số (DSP), chuẩn hóa Z-score.',
    longDescription: `
      <h4 class="text-xl font-bold mb-4">Phát triển Công cụ:</h4>
      <ul class="space-y-3 text-gray-300">
        <li><strong>Chỉ báo nâng cao:</strong> Tự lập trình và phát triển các chỉ báo hỗ trợ giao dịch phức tạp ứng dụng Xử lý Tín hiệu Số (DSP).</li>
        <li><strong>Chuẩn hóa Z-score:</strong> Áp dụng logic đệ quy để tối ưu hóa quyết định đầu tư thông qua chuẩn hóa thống kê.</li>
        <li><strong>Công cụ/Kỹ năng:</strong> Pine Script (v5), MetaTrader 5 (MQL5), Quantitative Analysis.</li>
      </ul>
    `,
    icon: '📊',
    gradient: 'from-indigo-500 to-blue-600',
    links: [] as ProjectLink[],
  },
  {
    id: 5,
    title: 'Macro & Trade Research',
    tech: ['Academic Research', 'Econometrics', 'Supply Chain'],
    description:
      'Đồ án nghiên cứu học thuật về FDI kỹ thuật số, phân tích tác động của FTA tới cấu trúc chuỗi cung ứng.',
    longDescription: `
      <h4 class="text-xl font-bold mb-4">Chi tiết đồ án:</h4>
      <ul class="space-y-3 text-gray-300">
        <li><strong>Đề tài nghiên cứu:</strong> Phân tích "Làn sóng FDI kỹ thuật số tiếp theo tại Việt Nam" và báo cáo hiệu suất thương mại quốc tế tại TP.HCM.</li>
        <li><strong>Năng lực phân tích:</strong> Ứng dụng mô hình Kinh tế lượng để khảo sát sự dịch chuyển của dòng vốn đầu tư trực tiếp và tác động của các hiệp định (EVFTA, CPTPP).</li>
        <li><strong>Giá trị cốt lõi:</strong> Minh chứng cho khả năng tư duy hệ thống, phân tích dữ liệu vĩ mô vững chắc.</li>
      </ul>
    `,
    icon: '🌍',
    gradient: 'from-purple-500 to-pink-600',
    links: [
      {
        url: 'https://canva.link/23w74djkevmu47n',
        label: 'Xem Báo cáo',
        icon: 'FileText',
      },
    ] as ProjectLink[],
  },
  {
    id: 6,
    title: 'Startup Business Model',
    tech: ['Financial Planning', 'Budget', 'Pricing'],
    description:
      'Thiết lập Business Model Canvas, dự phóng Budget plan và quản lý Pricing/Cost cho dự án kinh doanh tại UnivStar.',
    longDescription: `
      <h4 class="text-xl font-bold mb-4">Nội dung triển khai:</h4>
      <ul class="space-y-3 text-gray-300">
        <li><strong>Thiết lập mô hình:</strong> Đánh giá tính khả thi ứng dụng công nghệ sấy thăng hoa cho nông sản và xây dựng Business Model Canvas.</li>
        <li><strong>Quản lý ngân sách:</strong> Xây dựng bảng P&L, dự phóng dòng tiền, thiết lập chiến lược định giá và kiểm soát chi phí vận hành.</li>
        <li><strong>Bảo vệ dự án:</strong> Trực tiếp thiết kế tài liệu phân tích thị trường và thuyết trình tính khả thi trước hội đồng chuyên môn.</li>
      </ul>
    `,
    icon: '🚀',
    gradient: 'from-green-500 to-teal-600',
    links: [] as ProjectLink[],
  },
];

export default function Projects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  const getIconComponent = (iconName: string) => {
    switch (iconName) {
      case 'FileText':
        return FileText;
      case 'Code':
        return Code;
      default:
        return ExternalLink;
    }
  };

  return (
    <>
      <section
        ref={ref}
        id="projects"
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
              <span className="gradient-text">Dự án Tiêu biểu</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Các dự án và hệ thống phân tích đã triển khai thực tế
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                onClick={() => setSelectedProject(project)}
                className="group cursor-pointer"
              >
                <div className="card-gradient border border-gray-800 rounded-xl p-6 hover:border-teal-500/30 transition-all duration-300 h-full flex flex-col">
                  <div className={`text-4xl mb-4 bg-gradient-to-r ${project.gradient} bg-clip-text`}>
                    {project.icon}
                  </div>

                  <h3 className="text-xl font-bold text-gray-100 mb-2 group-hover:text-teal-400 transition-colors">
                    {project.title}
                  </h3>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="text-xs bg-teal-500/10 text-teal-400 px-2 py-1 rounded border border-teal-500/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <p className="text-gray-400 text-sm leading-relaxed mb-4 flex-grow">
                    {project.description}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-teal-400 text-sm font-medium group-hover:translate-x-2 transition-transform">
                      <span>Xem chi tiết</span>
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </div>
                    {project.links.length > 0 && (
                      <div className="flex items-center space-x-1">
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" title={`Có ${project.links.length} demo/dữ liệu`} />
                        {project.links.length > 1 && (
                          <span className="text-xs text-gray-500">{project.links.length}</span>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-gray-900 border border-gray-800 rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto"
            >
              <div className={`p-6 border-b border-gray-800 bg-gradient-to-r ${selectedProject.gradient}`}>
                <div className="flex justify-between items-start">
                  <div className="text-5xl">{selectedProject.icon}</div>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="p-2 hover:bg-gray-800 rounded-lg transition-colors"
                  >
                    <X className="w-6 h-6 text-gray-300" />
                  </button>
                </div>
                <h3 className="text-2xl font-bold text-white mt-4">
                  {selectedProject.title}
                </h3>
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-6">
                  {selectedProject.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs bg-teal-500/10 text-teal-400 px-3 py-1 rounded-full border border-teal-500/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div
                  className="prose prose-invert max-w-none"
                  dangerouslySetInnerHTML={{ __html: selectedProject.longDescription }}
                />

                {selectedProject.links.length > 0 && (
                  <div className="mt-8 pt-6 border-t border-gray-800">
                    <h4 className="text-lg font-semibold text-gray-100 mb-4">
                      {selectedProject.links.length === 1 ? 'Tài liệu dự án' : 'Tài liệu & Demo dự án'}
                    </h4>
                    <div className="flex flex-wrap gap-3">
                      {selectedProject.links.map((link, index) => {
                        const IconComponent = getIconComponent(link.icon);
                        return (
                          <motion.a
                            key={index}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center space-x-2 bg-gradient-to-r from-teal-500 to-teal-600 text-white px-5 py-2.5 rounded-lg font-semibold hover:shadow-lg hover:shadow-teal-500/25 transition-all duration-300"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <IconComponent className="w-4 h-4" />
                            <span>{link.label}</span>
                            <ExternalLink className="w-3.5 h-3.5" />
                          </motion.a>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
