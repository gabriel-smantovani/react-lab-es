import Contador from './Components/Contador';
//import Gallery from './Components/Gallery';
import { Link } from "react-router-dom";
import './Atv.css';

export default function Atv03() {
    return (
        <>
            <h1>Atividade 03</h1>
            <Contador />
            <Link to="/">&#129144; retornar à página inicial</Link>
        </>
    );
}