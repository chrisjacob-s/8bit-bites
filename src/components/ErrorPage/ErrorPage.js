import "./ErrorPage.css"

import NavbarAlt from "../NavbarAlt/NavbarAlt";

export default function ErrorPage() {
  return (<>
    <NavbarAlt />
    <div className="app__error-page">
      <h1>Error! This page does not exist!</h1>
    </div>
  </>)
}
