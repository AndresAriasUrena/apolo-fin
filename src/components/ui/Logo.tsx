export const Logo = ({ className = "h-10" }: { className?: string }) => {
    return (
      <svg
        className={className}
        viewBox="0 0 200 50"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Forma del logo */}
        <g transform="translate(10, 5)">
          {/* Trapecio superior (morado) */}
          <path
            d="M 0 15 L 30 0 L 40 0 L 30 15 Z"
            fill="#8C5FFF"
          />
          {/* Triángulo inferior derecha (aqua) */}
          <path
            d="M 30 15 L 40 0 L 40 20 Z"
            fill="#8DE2DC"
          />
          {/* Cuadrilátero inferior izquierda (coral) */}
          <path
            d="M 10 15 L 30 15 L 25 25 L 15 25 Z"
            fill="#FF5C72"
          />
        </g>
        
        {/* Texto Apolo */}
        <text
          x="60"
          y="32"
          fontFamily="Arial, sans-serif"
          fontSize="28"
          fontWeight="bold"
          fill="#000000"
        >
          Apolo
        </text>
      </svg>
    );
  };