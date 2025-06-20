import { ExternalLink } from "lucide-react";

const LinkButton = ({
  href,
  title,
  description,
  icon: Icon,
  gradient = false,
}) => {
  const handleClick = () => {
    window.open(href, "_blank", "noopener,noreferrer");
  };

  return (
    <button
      onClick={handleClick}
      className={`
        btn-link
        ${
          gradient
            ? "bg-gradient-to-r from-accent to-purple-600 text-white hover:from-purple-600 hover:to-accent"
            : "bg-card-light dark:bg-card-dark text-text-light dark:text-text-dark border border-gray-200 dark:border-gray-700 hover:border-accent dark:hover:border-accent"
        }
        group
        relative
        overflow-hidden
      `}
    >
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center space-x-3">
          {Icon && (
            <div
              className={`p-2 rounded-lg ${
                gradient ? "bg-white/20" : "bg-accent/10"
              }`}
            >
              <Icon
                size={20}
                className={gradient ? "text-white" : "text-accent"}
              />
            </div>
          )}
          <div className="text-left">
            <h3 className="font-semibold text-base">{title}</h3>
            {description && (
              <p
                className={`text-sm ${
                  gradient
                    ? "text-white/80"
                    : "text-gray-600 dark:text-gray-300"
                }`}
              >
                {description}
              </p>
            )}
          </div>
        </div>
        <ExternalLink
          size={16}
          className={`${
            gradient ? "text-white/80" : "text-gray-400 dark:text-gray-500"
          } group-hover:text-accent transition-colors`}
        />
      </div>

      {/* Hover effect overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
    </button>
  );
};

export default LinkButton;
