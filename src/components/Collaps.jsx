import arrowCollaps from "../assets/arrow_collaps.svg";

export default function Collapse({ title, children }) {
  return (
    <details className="collaps">
      <summary className="collaps_head ">
        <span className="collaps_title">{title}</span>
        <img
          className="collaps_arrow "
          src={arrowCollaps}
        ></img>
      </summary>
      <div className="collaps_anim">
        <div className="collaps_text">{children}</div>
      </div>
    </details>
  );
}
