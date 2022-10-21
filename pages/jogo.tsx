import { useState } from "react";
import Porta from "../components/Porta";
import { criarPortas, atualizarPortas } from "../functions/portas";
import styles from '../styles/Jogo.module.css'

export default function Jogo() {
    const [portas, setPortas] = useState(criarPortas(4, 2))

    function renderPortas() {
        return portas.map(porta => {
            return <Porta key={porta.numero} value={porta} onChange={novaPorta => setPortas(atualizarPortas(portas, novaPorta))} />
        })
    }

    return (
        <div className={styles.jogo}>
            <div className={styles.portas}>
                {renderPortas()}
            </div>
            <div className={styles.botoes}>

            </div>
        </div>
    );
}