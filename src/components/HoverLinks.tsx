import "./styles/style.css";

const HoverLinks = ({ text, cursor }: { text: string; cursor?: boolean }) => {
  return (
    <span className="hover-link" data-cursor={!cursor && `disable`}>
      <span className="hover-in">
        <span>{text}</span>
        <span aria-hidden="true">{text}</span>
      </span>
    </span>
  );
};

export default HoverLinks;
