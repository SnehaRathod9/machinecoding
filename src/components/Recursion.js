import { useState } from "react";

const Recursion = ({ data }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <>
      <div
        onClick={() => setIsExpanded((prev) => !prev)}
        role="button"
        style={{ cursor: "pointer", tabIndex: "0" }}
      >
        {data.isFolder && (isExpanded ? "⏬" : "▶")}

        {data.name}
      </div>
      {isExpanded
        ? data?.children?.map((children) => (
            <div key={children.id} style={{ marginLeft: "30px" }}>
              {" "}
              <Recursion key={children.id} data={children} />
            </div>
          ))
        : ""}
    </>
  );
};

export default Recursion;
