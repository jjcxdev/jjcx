import * as React from "react";
import { SVGMotionProps, motion } from "framer-motion";

const Path = (
  props: React.JSX.IntrinsicAttributes &
    SVGMotionProps<SVGPathElement> &
    React.RefAttributes<SVGPathElement> & {
      color?: string;
    }
) => (
  <motion.path
    fill="transparent"
    strokeWidth="4"
    stroke={props.color || "#06b6d4"}
    strokeLinecap="round"
    {...props}
  />
);

interface MenuToggleProps {
  toggle: () => void;
}

export const MenuToggle: React.FC<MenuToggleProps> = ({ toggle }) => (
  <div
    onClick={() => {
      console.log("Div clicked");
      toggle();
    }}
    role="button"
    tabIndex={0}
    onKeyDown={() => {
      console.log("Key pressed");
      toggle();
    }}>
    <svg width="50" height="50" viewBox="0 0 23 23">
      <Path
        variants={{
          closed: { d: "M 2 2.5 L 20 2.5" },
          open: { d: "M 3 16.5 L 17 2.5" },
        }}
      />
      <Path
        d="M 2 9.423 L 20 9.423"
        variants={{
          closed: { opacity: 1 },
          open: { opacity: 0 },
        }}
        transition={{ duration: 0.1 }}
      />
      <Path
        variants={{
          closed: { d: "M 2 16.346 L 20 16.346" },
          open: { d: "M 3 2.5 L 17 16.346" },
        }}
      />
    </svg>
  </div>
);