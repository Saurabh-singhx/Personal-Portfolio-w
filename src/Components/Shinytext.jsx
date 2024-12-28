const ShinyText = ({ 
    text, 
    disabled = false, 
    speed = 5, 
    className = '' 
  }) => {
    const animationDuration = `${speed}s`;
  
    return (
      <div
        className={`relative inline-block ${className}`}
        style={{
          animationDuration: animationDuration,
        }}
      >
        {/* Static black text */}
        <span className="text-black">{text}</span>
  
        {/* Overlay for the shiny effect */}
        {!disabled && (
          <span
            className="absolute inset-0 bg-clip-text text-transparent animate-shine"
            style={{
              backgroundImage:
                'linear-gradient(120deg, rgba(255, 255, 255, 0) 40%, rgba(255, 255, 255, 1) 50%, rgba(255, 255, 255, 0) 60%)',
              backgroundSize: '200% 100%',
              animationDuration: animationDuration,
            }}
          >
            {text}
          </span>
        )}
      </div>
    );
  };
  
  export default ShinyText;
  