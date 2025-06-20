const SocialButton = ({
  href,
  icon: IconComponent,
  label,
  color = "accent",
}) => {
  const handleClick = () => {
    window.open(href, "_blank", "noopener,noreferrer");
  };

  const colorClasses = {
    accent: "bg-accent hover:bg-accent-hover text-white",
    github: "bg-gray-800 hover:bg-gray-900 text-white",
    linkedin: "bg-blue-600 hover:bg-blue-700 text-white",
    instagram:
      "bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white",
    twitter: "bg-blue-400 hover:bg-blue-500 text-white",
    email: "bg-red-500 hover:bg-red-600 text-white",
    phone: "bg-green-500 hover:bg-green-600 text-white",
  };

  return (
    <button
      onClick={handleClick}
      className={`
        social-btn
        ${colorClasses[color] || colorClasses.accent}
        animate-fade-in
        group
        relative
        overflow-hidden
      `}
      aria-label={label}
      title={label}
    >
      <IconComponent size={20} className="relative z-10" />

      {/* Ripple effect */}
      <div className="absolute inset-0 rounded-full bg-white/20 scale-0 group-hover:scale-110 transition-transform duration-300"></div>
    </button>
  );
};

export default SocialButton;
