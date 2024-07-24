import React from "react";

interface IconProps {
  size?: number | string;
  color?: string;
  className?: string;
}

type IconDefinition = {
  viewBox: string;
  path: React.ReactNode;
};

const createIcon = (definition: IconDefinition) => {
  return React.forwardRef<SVGSVGElement, IconProps>(
    ({ size = 24, color = "currentColor", className = "", ...props }, ref) => {
      return (
        <svg
          ref={ref}
          width={size}
          height={size}
          viewBox={definition.viewBox}
          fill="none"
          stroke={color}
          strokeWidth="2"
          className={`inline-block ${className}`}
          {...props}
        >
          {definition.path}
        </svg>
      );
    }
  );
};

// Icon definitions
const iconDefinitions: Record<string, IconDefinition> = {
  homeOutline: {
    viewBox: "0 0 24 24",
    path: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
      />
    ),
  },
  homeSolid: {
    viewBox: "0 0 24 24",
    path: (
      <>
        <path d="M11.47 3.841a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 0 1.06-1.061l-8.689-8.69a2.25 2.25 0 0 0-3.182 0l-8.69 8.69a.75.75 0 1 0 1.061 1.06l8.69-8.689Z" />
        <path d="m12 5.432 8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.625a1.875 1.875 0 0 1-1.875-1.875v-6.198a2.29 2.29 0 0 0 .091-.086L12 5.432Z" />
      </>
    ),
  },
  hamburger: {
    viewBox: "0 0 24 24",
    path: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
      />
    ),
  },
  cross: {
    viewBox: "0 0 24 24",
    path: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6 18 18 6M6 6l12 12"
      />
    ),
  },
};

// Create the Icons object dynamically
export const Icons = Object.entries(iconDefinitions).reduce(
  (acc, [key, definition]) => {
    acc[key as keyof typeof iconDefinitions] = createIcon(definition);
    return acc;
  },
  {} as Record<keyof typeof iconDefinitions, ReturnType<typeof createIcon>>
);

// Type for the Icons object
export type IconName = keyof typeof iconDefinitions;
