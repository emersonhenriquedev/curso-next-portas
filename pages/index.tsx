import { useState } from "react";

import Porta from "../components/Porta";
import PortaModel from "../model/porta";

export default function Home() {
  const [p1, setP1] = useState(new PortaModel(1, false, false, false));
  const p2 = new PortaModel(2);

  return (
    <div style={{ display: "flex", gap: "10px" }}>
      <Porta value={p1} onChange={novaPorta => setP1(novaPorta)} />
      {/* <Porta porta={p2} /> */}
    </div>
  );
}
