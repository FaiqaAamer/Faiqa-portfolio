import React, { useEffect } from "react";
import { FaHeart, FaEnvelope, FaFileAlt, FaLinkedin, FaGithub } from "react-icons/fa";
import TelephoneFrontView from "../../assets/Contact/Telephone_front_view.png";
import TelephoneBackView from "../../assets/Contact/Telephone_above_view.png";
import "./Contact.css";

function Contact() {
  useEffect(() => {
    const LINKS = [
      { icon: "heart", label: "Say hello", url: "https://yourportfolio.com" },
      { icon: "linkedin", label: "LinkedIn", url: "https://www.linkedin.com/in/faiqa-aamer-a84a083ab/?skipRedirect=true" },
      { icon: "github", label: "GitHub", url: "https://github.com/FaiqaAamer" },
      { icon: "mail", label: "Email", url: "mailto:hello@yourportfolio.com" },
      { icon: "cv", label: "CV / Resume", url: "https://yourportfolio.com/resume.pdf" }
    ];

    const HOLES = [
      [295,156.5], [324,151], [352.5,157.5], [376,174.5],
      [346,278.5], [315,282], [287,272.5], [266.5,253.5],
      [256.5,226.5], [272,172.5], [258.5,198.5]
    ];

    const HOLE_R = 15;
    const svgNS = "http://www.w3.org/2000/svg";
    const holeGroup = document.getElementById("holeGroup");
    const widget = document.getElementById("phoneWidget");
    const frontLayer = document.getElementById("frontLayer");
    const afterLayer = document.getElementById("afterLayer");

    function reveal() {
      widget.classList.add("revealed");
    }
    function conceal() {
      widget.classList.remove("revealed");
    }

    frontLayer.addEventListener("click", reveal);
    frontLayer.addEventListener("keydown", e => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        reveal();
      }
    });

    afterLayer.addEventListener("click", e => {
      if (!e.target.closest(".hole")) conceal();
    });

    function makeGlyph(g, entry, hx, hy) {
        const foreign = document.createElementNS("http://www.w3.org/2000/svg", "foreignObject");
        foreign.setAttribute("x", hx - 6);
        foreign.setAttribute("y", hy - 6);
        foreign.setAttribute("width", 12);
        foreign.setAttribute("height", 12);

        const container = document.createElement("div");
        container.style.display = "flex";
        container.style.alignItems = "center";
        container.style.justifyContent = "center";
        container.style.width = "12px";
        container.style.height = "12px";

        const iconMap = {
            heart: <FaHeart size={1} className="dial-icon"/>,
            mail: <FaEnvelope size={5} className="dial-icon"/>,
            cv: <FaFileAlt size={5} className="dial-icon"/>,
            linkedin: <FaLinkedin size={5} className="dial-icon"/>,
            github: <FaGithub size={5} className="dial-icon"/>
        };

        import("react-dom/client").then(ReactDOM => {
            const root = ReactDOM.createRoot(container);
            root.render(iconMap[entry.icon]);
        });

        foreign.appendChild(container);
        g.appendChild(foreign);
        }


    HOLES.forEach((pos, i) => {
      const entry = LINKS[i] || { icon: "heart", label: "Say hello", url: "#" };
      const [hx, hy] = pos;

      const g = document.createElementNS(svgNS, "g");
      g.setAttribute("class", "hole");
      g.setAttribute("tabindex", "0");
      g.setAttribute("role", "link");
      g.setAttribute("aria-label", entry.label);

      const hit = document.createElementNS(svgNS, "circle");
      hit.setAttribute("class", "hit");
      hit.setAttribute("cx", hx);
      hit.setAttribute("cy", hy);
      hit.setAttribute("r", HOLE_R);
      g.appendChild(hit);

      const ring = document.createElementNS(svgNS, "circle");
      ring.setAttribute("class", "ring");
      ring.setAttribute("cx", hx);
      ring.setAttribute("cy", hy);
      ring.setAttribute("r", HOLE_R - 2);
      g.appendChild(ring);

      makeGlyph(g, entry, hx, hy);

      function go() {
        g.classList.add("pressed");
        setTimeout(() => {
          g.classList.remove("pressed");
          if (entry.url && entry.url !== "#") {
            window.open(entry.url, "_blank", "noopener");
          }
        }, 160);
      }

      g.addEventListener("click", e => {
        e.stopPropagation();
        go();
      });
      g.addEventListener("keydown", e => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          e.stopPropagation();
          go();
        }
      });

      holeGroup.appendChild(g);
    });
  }, []);

  return (
    <div className="phone-widget" id="phoneWidget">
      <div
        className="layer layer-front"
        id="frontLayer"
        role="button"
        tabIndex="0"
        aria-label="Show contact dial"
      >
        <img src={TelephoneFrontView} alt="Vintage black rotary telephone" />
      </div>

      <div className="layer layer-after" id="afterLayer">
        <div className="dial-scene">
          <img
            src={TelephoneBackView}
            alt="Rotary telephone dial with contact icons"
          />
          <svg
            id="dialSvg"
            viewBox="0 0 604 413"
            preserveAspectRatio="xMidYMid meet"
            aria-hidden="false"
          >
            <g id="holeGroup"></g>
          </svg>
        </div>
      </div>
    </div>
  );
}

export default Contact;
