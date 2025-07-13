import { motion } from "framer-motion";
import Icon from "@/components/ui/icon";

const HeroImage = () => {
  return (
    <motion.div
      className="relative h-full flex items-center justify-center order-1 lg:order-2"
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            delayChildren: 0.2,
            staggerChildren: 0.1,
          },
        },
      }}
    >
      <div className="relative w-full max-w-xs sm:max-w-sm lg:max-w-md mx-auto">
        {/* Мобильная версия */}
        <div className="block lg:hidden">
          {/* Заголовок с анимированными индикаторами */}
          <motion.div
            className="flex items-center justify-between mb-4 bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-2xl p-3"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <div className="flex items-center space-x-2">
              {[
                { color: "emerald", delay: 0 },
                { color: "amber", delay: 0.3 },
                { color: "rose", delay: 0.6 },
              ].map((dot, i) => (
                <motion.div
                  key={i}
                  className={`w-2 h-2 bg-${dot.color}-400 rounded-full shadow-lg shadow-${dot.color}-400/50`}
                  animate={{ scale: [1, 1.3, 1], opacity: [0.8, 1, 0.8] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: dot.delay,
                  }}
                />
              ))}
            </div>
            <div className="text-sm font-bold bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">
              Network Status
            </div>
            <motion.div
              className="w-2 h-2 bg-cyan-400 rounded-full"
              animate={{ opacity: [0.3, 1, 0.3], scale: [1, 1.5, 1] }}
              transition={{ duration: 3, repeat: Infinity }}
            />
          </motion.div>

          {/* Четыре карточки метрик в сетке 2x2 */}
          <motion.div
            className="grid grid-cols-2 gap-3 mb-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            {[
              {
                icon: "Activity",
                value: "99.9%",
                label: "Uptime",
                color: "emerald",
                gradient: "from-emerald-500/20 to-green-600/10",
              },
              {
                icon: "Zap",
                value: "0.8ms",
                label: "Latency",
                color: "blue",
                gradient: "from-blue-500/20 to-cyan-600/10",
              },
              {
                icon: "Database",
                value: "1.2TB",
                label: "Traffic",
                color: "purple",
                gradient: "from-purple-500/20 to-pink-600/10",
              },
              {
                icon: "Users",
                value: "3,247",
                label: "Devices",
                color: "orange",
                gradient: "from-orange-500/20 to-amber-600/10",
              },
            ].map((metric, i) => (
              <motion.div
                key={metric.label}
                className={`group relative bg-gradient-to-br ${metric.gradient} backdrop-blur-xl border border-white/25 rounded-xl p-3 text-center shadow-lg`}
                initial={{ opacity: 0, scale: 0.8, rotateY: -10 }}
                animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                transition={{
                  delay: 0.6 + i * 0.1,
                  type: "spring",
                  stiffness: 120,
                }}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <div
                  className={`w-8 h-8 bg-${metric.color}-400/30 rounded-lg mx-auto mb-2 flex items-center justify-center shadow-lg`}
                >
                  <Icon
                    name={metric.icon as any}
                    size={16}
                    className={`text-${metric.color}-300`}
                  />
                </div>
                <motion.div
                  className="text-white text-sm font-bold mb-1"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8 + i * 0.05 }}
                >
                  {metric.value}
                </motion.div>
                <div className="text-white/70 text-xs font-medium">
                  {metric.label}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Статус сети */}
          <motion.div
            className="flex items-center justify-between p-3 bg-gradient-to-r from-green-500/20 to-emerald-500/10 rounded-xl border border-green-400/30 shadow-lg mb-3"
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 1 }}
            whileHover={{
              scale: 1.02,
              borderColor: "rgba(34, 197, 94, 0.5)",
            }}
          >
            <div className="flex items-center gap-2">
              <motion.div
                className="w-2 h-2 bg-green-400 rounded-full shadow-lg shadow-green-400/50"
                animate={{ scale: [1, 1.3, 1], opacity: [0.8, 1, 0.8] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <span className="text-white font-semibold text-sm">
                Network Online
              </span>
            </div>
            <div className="flex items-center gap-1">
              <Icon name="Wifi" size={16} className="text-green-300" />
              <motion.div
                className="w-1 h-1 bg-green-400 rounded-full"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
            </div>
          </motion.div>

          {/* Производительность */}
          <motion.div
            className="bg-gradient-to-r from-blue-500/20 to-cyan-500/10 rounded-xl border border-blue-400/30 shadow-lg p-4 mb-4"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.2 }}
            whileHover={{
              scale: 1.02,
              borderColor: "rgba(59, 130, 246, 0.5)",
            }}
          >
            <div className="flex items-center justify-between mb-3">
              <span className="text-white font-semibold text-sm">
                Производительность
              </span>
              <motion.span
                className="text-cyan-200 text-sm font-bold"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1.5, type: "spring" }}
              >
                67%
              </motion.span>
            </div>
            <div className="w-full bg-white/30 rounded-full h-2 shadow-inner">
              <motion.div
                className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 h-2 rounded-full shadow-lg relative overflow-hidden"
                initial={{ width: 0 }}
                animate={{ width: "67%" }}
                transition={{ delay: 1.4, duration: 2, ease: "easeOut" }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                  animate={{ x: ["-100%", "200%"] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "linear",
                    delay: 2,
                  }}
                />
              </motion.div>
            </div>
          </motion.div>

          {/* Простые устройства */}
          <motion.div
            className="grid grid-cols-3 gap-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.6 }}
          >
            {[
              { icon: "Router", label: "Router", color: "emerald" },
              { icon: "Network", label: "Switch", color: "blue" },
              { icon: "Shield", label: "Firewall", color: "amber" },
            ].map((device, index) => (
              <motion.div
                key={device.label}
                className={`p-2 bg-gradient-to-br from-${device.color}-500/20 to-${device.color}-600/10 rounded-lg border border-${device.color}-400/30 text-center shadow-lg`}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                initial={{ scale: 0, rotate: -90 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{
                  delay: 1.8 + index * 0.1,
                  type: "spring",
                  stiffness: 150,
                }}
              >
                <Icon
                  name={device.icon as any}
                  size={18}
                  className={`mx-auto mb-1 text-${device.color}-300`}
                />
                <div className="text-xs text-white font-medium">
                  {device.label}
                </div>
                <motion.div
                  className="w-1 h-1 mx-auto mt-1 bg-green-400 rounded-full"
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: index * 0.3,
                  }}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Десктопная версия */}
        <div className="hidden lg:block">
          <motion.div
            className="relative bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-3xl border border-white/25 rounded-[2.5rem] p-8 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.3)] overflow-hidden"
            initial={{ scale: 0.8, opacity: 0, rotateY: -20, z: -50 }}
            animate={{ scale: 1, opacity: 1, rotateY: 0, z: 0 }}
            transition={{
              type: "spring",
              stiffness: 80,
              damping: 15,
              delay: 0.5,
              duration: 1.2,
            }}
            whileHover={{
              scale: 1.03,
              rotateY: 3,
              boxShadow: "0 35px 80px -15px rgba(0,0,0,0.4)",
              borderColor: "rgba(255,255,255,0.4)",
            }}
          >
            {/* Премиальный заголовок */}
            <motion.div
              className="flex items-center justify-between mb-8 relative"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <div className="flex items-center space-x-3">
                {[
                  { color: "emerald", delay: 0 },
                  { color: "amber", delay: 0.3 },
                  { color: "rose", delay: 0.6 },
                ].map((dot, i) => (
                  <motion.div
                    key={i}
                    className={`w-4 h-4 bg-${dot.color}-400 rounded-full shadow-lg shadow-${dot.color}-400/50`}
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: dot.delay,
                    }}
                  />
                ))}
              </div>
              <div className="text-lg font-bold bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">
                Network Intelligence
              </div>

              <motion.div
                className="absolute top-0 right-0 w-2 h-2 bg-cyan-400 rounded-full"
                animate={{ opacity: [0.3, 1, 0.3], scale: [1, 1.5, 1] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
            </motion.div>

            {/* Премиальные метрики */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              {[
                {
                  icon: "Activity",
                  value: "99.9%",
                  label: "Uptime",
                  color: "emerald",
                  trend: "+0.2%",
                },
                {
                  icon: "Zap",
                  value: "0.8ms",
                  label: "Latency",
                  color: "blue",
                  trend: "-15%",
                },
                {
                  icon: "Database",
                  value: "1.2TB",
                  label: "Traffic",
                  color: "purple",
                  trend: "+24%",
                },
                {
                  icon: "Users",
                  value: "3,247",
                  label: "Devices",
                  color: "orange",
                  trend: "+12%",
                },
              ].map((metric, i) => (
                <motion.div
                  key={metric.label}
                  className="group relative bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-xl rounded-xl p-4 border border-white/30 shadow-lg hover:shadow-xl transition-all duration-500"
                  initial={{
                    opacity: 0,
                    y: 30,
                    scale: 0.8,
                    rotateX: -10,
                  }}
                  animate={{ opacity: 1, y: 0, scale: 1, rotateX: 0 }}
                  transition={{
                    delay: 1.0 + i * 0.1,
                    type: "spring",
                    stiffness: 120,
                  }}
                  whileHover={{
                    scale: 1.05,
                    y: -5,
                    rotateY: 3,
                    boxShadow: "0 20px 40px -10px rgba(0,0,0,0.3)",
                  }}
                >
                  <div className="flex items-center justify-between mb-2">
                    <div
                      className={`p-2 rounded-lg bg-gradient-to-br from-${metric.color}-400/30 to-${metric.color}-600/20 shadow-sm`}
                    >
                      <Icon
                        name={metric.icon as any}
                        size={16}
                        className={`text-${metric.color}-300`}
                      />
                    </div>
                    <motion.span
                      className={`text-xs font-bold px-2 py-1 rounded-full ${
                        metric.trend.startsWith("+")
                          ? "bg-emerald-500/20 text-emerald-300"
                          : "bg-red-500/20 text-red-300"
                      }`}
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 1.4 + i * 0.05 }}
                    >
                      {metric.trend}
                    </motion.span>
                  </div>
                  <motion.div
                    className="text-xl font-black text-white mb-1 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.2 + i * 0.05 }}
                  >
                    {metric.value}
                  </motion.div>
                  <div className="text-white/70 text-xs font-medium">
                    {metric.label}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Интерактивные элементы */}
            <div className="space-y-3">
              {/* Статус сети */}
              <motion.div
                className="flex items-center justify-between p-3 bg-gradient-to-r from-green-500/20 to-emerald-500/10 rounded-xl border border-green-400/30 shadow-lg"
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 1.6 }}
                whileHover={{
                  scale: 1.03,
                  backgroundColor: "rgba(34, 197, 94, 0.25)",
                  borderColor: "rgba(34, 197, 94, 0.5)",
                }}
              >
                <div className="flex items-center gap-3">
                  <motion.div
                    className="w-3 h-3 bg-green-400 rounded-full shadow-lg shadow-green-400/50"
                    animate={{
                      scale: [1, 1.3, 1],
                      opacity: [0.8, 1, 0.8],
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  <span className="text-white font-semibold text-sm">
                    Network Online
                  </span>
                </div>
                <Icon name="Wifi" size={18} className="text-green-300" />
              </motion.div>

              {/* Производительность */}
              <motion.div
                className="p-3 bg-gradient-to-r from-blue-500/20 to-cyan-500/10 rounded-xl border border-blue-400/30 shadow-lg"
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 1.8 }}
                whileHover={{
                  scale: 1.03,
                  backgroundColor: "rgba(59, 130, 246, 0.25)",
                  borderColor: "rgba(59, 130, 246, 0.5)",
                }}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-white font-semibold text-sm">
                    Производительность
                  </span>
                  <span className="text-cyan-200 text-sm font-bold">67%</span>
                </div>
                <div className="w-full bg-white/30 rounded-full h-2 shadow-inner">
                  <motion.div
                    className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 h-2 rounded-full shadow-lg"
                    initial={{ width: 0 }}
                    animate={{ width: "67%" }}
                    transition={{
                      delay: 2,
                      duration: 2,
                      ease: "easeOut",
                    }}
                  />
                </div>
              </motion.div>

              {/* Устройства */}
              <motion.div
                className="grid grid-cols-3 gap-2"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2 }}
              >
                {[
                  {
                    icon: "Router",
                    label: "Router",
                    status: "active",
                    color: "emerald",
                  },
                  {
                    icon: "Network",
                    label: "Switch",
                    status: "active",
                    color: "blue",
                  },
                  {
                    icon: "Shield",
                    label: "Firewall",
                    status: "warning",
                    color: "amber",
                  },
                ].map((device, index) => (
                  <motion.div
                    key={device.label}
                    className={`p-2 bg-gradient-to-br from-${device.color}-500/20 to-${device.color}-600/10 rounded-lg border border-${device.color}-400/30 text-center shadow-lg`}
                    whileHover={{
                      scale: 1.08,
                      y: -3,
                    }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ scale: 0, rotate: -90, opacity: 0 }}
                    animate={{ scale: 1, rotate: 0, opacity: 1 }}
                    transition={{
                      delay: 2.2 + index * 0.1,
                      type: "spring",
                      stiffness: 150,
                      damping: 12,
                    }}
                  >
                    <Icon
                      name={device.icon as any}
                      size={20}
                      className={`mx-auto mb-1 ${
                        device.status === "active"
                          ? `text-${device.color}-300`
                          : "text-amber-300"
                      }`}
                    />
                    <div className="text-xs text-white font-medium">
                      {device.label}
                    </div>
                    <motion.div
                      className={`w-1 h-1 mx-auto mt-1 rounded-full ${
                        device.status === "active"
                          ? "bg-green-400"
                          : "bg-amber-400"
                      }`}
                      animate={{ opacity: [0.5, 1, 0.5] }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: index * 0.3,
                      }}
                    />
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Премиальные декорации */}
            <motion.div
              className="absolute -top-3 -right-3 w-6 h-6 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full shadow-lg shadow-cyan-400/50"
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.8, 1, 0.8],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <motion.div
              className="absolute -bottom-3 -left-3 w-4 h-4 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full shadow-lg shadow-purple-400/50"
              animate={{
                scale: [1, 1.4, 1],
                opacity: [0.6, 1, 0.6],
                rotate: [360, 180, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1.5,
              }}
            />
          </motion.div>

          {/* Плавающие карточки - только для десктопа */}
          <motion.div
            className="absolute -top-20 -left-16 bg-gradient-to-br from-green-500/20 to-emerald-600/10 backdrop-blur-2xl border border-green-400/30 rounded-2xl p-4 shadow-2xl"
            initial={{ opacity: 0, x: -120, rotate: -15, scale: 0.8 }}
            animate={{ opacity: 1, x: 0, rotate: 0, scale: 1 }}
            transition={{
              delay: 2.5,
              type: "spring",
              stiffness: 80,
              damping: 15,
            }}
            whileHover={{
              scale: 1.15,
              rotate: 8,
              y: -8,
              boxShadow: "0 25px 50px rgba(34, 197, 94, 0.3)",
              borderColor: "rgba(34, 197, 94, 0.6)",
            }}
          >
            <div className="flex items-center gap-3">
              <div className="p-2 bg-green-500/30 rounded-lg shadow-lg">
                <Icon name="TrendingUp" size={18} className="text-green-300" />
              </div>
              <div>
                <div className="text-white text-sm font-bold">+24%</div>
                <div className="text-green-200 text-xs">Производительность</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="absolute -bottom-20 -right-16 bg-gradient-to-br from-blue-500/20 to-cyan-600/10 backdrop-blur-2xl border border-blue-400/30 rounded-2xl p-4 shadow-2xl"
            initial={{ opacity: 0, x: 120, rotate: 15, scale: 0.8 }}
            animate={{ opacity: 1, x: 0, rotate: 0, scale: 1 }}
            transition={{
              delay: 2.8,
              type: "spring",
              stiffness: 80,
              damping: 15,
            }}
            whileHover={{
              scale: 1.15,
              rotate: -8,
              y: -8,
              boxShadow: "0 25px 50px rgba(59, 130, 246, 0.3)",
              borderColor: "rgba(59, 130, 246, 0.6)",
            }}
          >
            <div className="flex items-center gap-3">
              <div className="p-2 bg-blue-500/30 rounded-lg shadow-lg">
                <Icon name="Shield" size={18} className="text-blue-300" />
              </div>
              <div>
                <div className="text-white text-sm font-bold">99.9%</div>
                <div className="text-blue-200 text-xs">Защищенность</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="absolute -top-8 -right-20 bg-gradient-to-br from-purple-500/20 to-pink-600/10 backdrop-blur-2xl border border-purple-400/30 rounded-xl p-3 shadow-2xl"
            initial={{ opacity: 0, y: -50, rotate: 20, scale: 0.7 }}
            animate={{ opacity: 1, y: 0, rotate: 0, scale: 1 }}
            transition={{
              delay: 3.1,
              type: "spring",
              stiffness: 100,
              damping: 15,
            }}
            whileHover={{
              scale: 1.1,
              rotate: 5,
              y: -5,
              boxShadow: "0 20px 40px rgba(168, 85, 247, 0.3)",
            }}
          >
            <div className="flex items-center gap-2">
              <Icon name="Zap" size={16} className="text-purple-300" />
              <span className="text-white text-sm font-bold">0.8ms</span>
            </div>
          </motion.div>

          {/* Орбитальные элементы */}
          <motion.div
            className="absolute top-1/2 left-1/2 w-96 h-96 pointer-events-none"
            style={{ x: "-50%", y: "-50%" }}
            animate={{ rotate: 360 }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          >
            <div className="absolute inset-0 border border-white/5 rounded-full" />
            <div className="absolute inset-4 border border-white/8 rounded-full" />
            <motion.div
              className="absolute top-0 left-1/2 w-3 h-3 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full shadow-lg shadow-cyan-400/50"
              style={{ x: "-50%" }}
              animate={{ scale: [1, 1.5, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <motion.div
              className="absolute bottom-0 left-1/2 w-2 h-2 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full shadow-lg shadow-purple-400/50"
              style={{ x: "-50%" }}
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 1.5, repeat: Infinity, delay: 0.5 }}
            />
            <motion.div
              className="absolute top-1/2 right-0 w-2 h-2 bg-gradient-to-br from-emerald-400 to-green-500 rounded-full shadow-lg shadow-emerald-400/50"
              style={{ y: "-50%" }}
              animate={{ scale: [1, 1.4, 1] }}
              transition={{ duration: 1.8, repeat: Infinity, delay: 1 }}
            />
          </motion.div>
        </div>

        {/* Плавающие частицы - только для десктопа */}
        <div className="hidden lg:block">
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full"
              style={{
                width: `${2 + (i % 3)}px`,
                height: `${2 + (i % 3)}px`,
                background: `radial-gradient(circle, ${
                  [
                    "#3b82f6",
                    "#06d6a0",
                    "#f59e0b",
                    "#ec4899",
                    "#8b5cf6",
                    "#f97316",
                  ][i % 6]
                }60, transparent)`,
                left: `${10 + i * 8}%`,
                top: `${20 + (i % 5) * 15}%`,
                filter: "blur(0.5px)",
              }}
              animate={{
                y: [0, -40, 0],
                opacity: [0.2, 1, 0.2],
                scale: [1, 2.5, 1],
                x: [0, Math.sin(i) * 15, 0],
                rotate: [0, 360, 0],
              }}
              transition={{
                duration: 6 + i * 0.4,
                repeat: Infinity,
                delay: i * 0.5,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default HeroImage;
