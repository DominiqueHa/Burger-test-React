import { Link, useParams } from "react-router-dom";
export default function OrderPage() {
    //state
    const {username} = useParams();

    //comportement

    //affichage (render)
  return (
    <div>Bonjour {username}
        <Link to="/">
         <button>Déconnection</button>
    </Link>
    </div>
    
  )
}
