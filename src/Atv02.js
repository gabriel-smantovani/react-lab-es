import Letreiro from './Components/Letreiro';
//import Gallery from './Components/Gallery';
import { Link } from "react-router-dom";
import './Atv.css';

export default function Atv01() {
    return (
        <>
            <h1>Atividade 02</h1>
            <Letreiro />
            <br />
            <Link to="/">&#129144; retornar à página inicial</Link>
        </>
    );
}