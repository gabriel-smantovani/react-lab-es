import Relogio from './Components/Relogio';
//import Gallery from './Components/Gallery';
import { Link } from "react-router-dom";
import './Atv.css';

export default function Atv01() {
    return (
        <>
            <h1>Atividade 01</h1>
            <Relogio />
            <br />
            <Link to="/">&#129144; retornar à página inicial</Link>
        </>
    );
}