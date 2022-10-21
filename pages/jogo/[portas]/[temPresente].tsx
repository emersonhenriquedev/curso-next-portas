import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Porta from "../../../components/Porta";
import { criarPortas, atualizarPortas } from "../../../functions/portas";
import styles from '../../../styles/Jogo.module.css'

export default function Jogo() {
    const router = useRouter()
    const [portas, setPortas] = useState([])

    useEffect(() => {
        const portas = +router.query.portas
        const temPresente = +router.query.temPresente
        setPortas(criarPortas(portas, temPresente))
        
    }, [router.query.portas, router.query.temPresente])


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
                <Link href="/">
                    <button>Reiniciar jogo</button>
                </Link>
            </div>
        </div>
    );
}
