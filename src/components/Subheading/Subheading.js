import "./Subheading.css";

export default function Subheading({ title, subtitle }) {
  return (
    <>
      <h2 className="app__title">{title}</h2>
      <h4 className="app__subtitle">{subtitle}</h4>
    </>
  );
}
