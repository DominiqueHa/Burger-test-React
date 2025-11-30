import { Link } from "react-router-dom";

export default function ErrorPage() {
  return (
    <div>ErrorPage
        <br />
        <Link to="/">
        <button>Retourne vers la page d'accueil</button>
        </Link>
    </div>
  )
}
