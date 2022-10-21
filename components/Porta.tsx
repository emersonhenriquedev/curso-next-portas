import PortaModel from "../model/porta";
import styles from "../styles/Porta.module.css";
import Presente from '../components/Presente';

interface PortaProps {
  value: PortaModel
  onChange: (novaPorta: PortaModel) => void
}

export default function Porta(props: PortaProps) {
  const porta = props.value
  const selecionada = porta.selecionada ? styles.selecionada : "";

  function alternarSelecao(e) {
    return props.onChange(porta.alternarSelecao())
  }

  function abrir(e) {
    e.stopPropagation()
    return props.onChange(porta.abrir())
  }

  function renderPorta() {
    return (
      <div className={styles.porta}>
        <div className={styles.numero}>{porta.numero}</div>
        <div className={styles.macaneta} onClick={abrir}></div>
      </div>
    )
  }

  return (
    <div className={styles.area} onClick={alternarSelecao}>
      <div className={`${styles.estrutura} ${selecionada}`}>
        {porta.fechada ? renderPorta() : (porta.temPresente ? <Presente /> : false)}
      </div>
      <div className={styles.chao}></div>
    </div>
  );
}
