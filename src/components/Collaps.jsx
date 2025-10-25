import { useState } from "react";
import arrowCollaps from "../assets/arrow_collaps.svg";

export default function Collaps({ title, children }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="collaps">
      <div
        data-testid="collaps_head"
        className="collaps_head "
        onClick={() => setOpen((o) => !o)}
        role="button"
        aria-expanded={open}
      >
        <span className="collaps_title">{title}</span>
        <img className="collaps_arrow " src={arrowCollaps} alt="" aria-hidden="true" />
      </div>
      <div data-testid="collaps_text" className="collaps_anim" aria-hidden={!open}>
        <div className="collaps_text">{children}</div>
      </div>
    </div>
  );
}
