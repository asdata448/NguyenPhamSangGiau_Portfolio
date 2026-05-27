'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowRight, TrendingUp, Shield, Award } from 'lucide-react';

export default function Hero() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section
      ref={ref}
      id="about"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-gray-900 to-teal-950/20" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,168,168,0.1),transparent_50%)]" />

      {/* Animated Lines */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-teal-500/30 to-transparent"
          animate={{
            scaleX: [0, 1, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
          }}
        />
        <motion.div
          className="absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-teal-500/20 to-transparent"
          animate={{
            scaleX: [0, 1, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 1,
          }}
        />
      </div>

      {/* Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20"
      >
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div variants={itemVariants} className="space-y-8">
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center space-x-2 bg-teal-500/10 border border-teal-500/20 rounded-full px-4 py-2"
            >
              <span className="w-2 h-2 bg-teal-400 rounded-full animate-pulse" />
              <span className="text-teal-400 font-semibold text-sm">
                Data-Driven Analyst
              </span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight"
            >
              <span className="text-gray-100">Định lượng Đầu tư</span>
              <br />
              <span className="gradient-text">& Tối ưu hóa Chuỗi cung ứng</span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-lg text-gray-400 max-w-xl leading-relaxed"
            >
              Nghiên cứu thị trường từ năm 15 tuổi. Tập trung phát triển sự nghiệp
              Data-Driven thông qua việc ứng dụng khoa học dữ liệu, tự động hóa
              thuật toán và phân tích kinh tế vĩ mô để kiểm soát rủi ro tài chính
              và giải quyết các bài toán chuỗi cung ứng.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-4"
            >
              <motion.a
                href="#projects"
                className="group inline-flex items-center space-x-2 bg-gradient-to-r from-teal-500 to-teal-600 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-teal-500/25 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Xem Dự Án</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </motion.a>

              <motion.a
                href="#skills"
                className="inline-flex items-center space-x-2 border border-teal-500/30 text-teal-400 px-6 py-3 rounded-lg font-semibold hover:bg-teal-500/10 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Kỹ Năng</span>
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right Content - Stats Cards */}
          <motion.div
            variants={itemVariants}
            className="grid sm:grid-cols-2 lg:grid-cols-1 gap-4"
          >
            {[
              {
                icon: TrendingUp,
                title: '$10k - $50k',
                description: 'Prop Firm Funded',
                color: 'text-green-400',
              },
              {
                icon: Shield,
                title: '< 5%',
                description: 'Max Drawdown',
                color: 'text-teal-400',
              },
              {
                icon: Award,
                title: 'Top 40',
                description: 'Toàn quốc FSC',
                color: 'text-yellow-400',
              },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 + 0.5 }}
                className="group card-gradient border border-gray-800 rounded-xl p-6 hover:border-teal-500/30 transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className={`p-3 rounded-lg bg-gray-800 ${stat.color}`}>
                    <stat.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-100">
                      {stat.title}
                    </h3>
                    <p className="text-gray-400 text-sm mt-1">
                      {stat.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
