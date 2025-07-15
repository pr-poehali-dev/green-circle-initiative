import { motion } from "framer-motion";
import Icon from "@/components/ui/icon";

const MobileVersion = () => {
  return (
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
  );
};

export default MobileVersion;