import "./Subheading.css";

export default function Subheading({ title, subtitleDark, subtitleLight }) {
  return (
    <>
      <h2 className="app__title">{title}</h2>
      <h4 className="app__subtitle-dark">{subtitleDark}</h4>
      <h4 className="app__subtitle-light">{subtitleLight}</h4>
    </>
  );
}
