import styles from "./styles.module.css";

import { History, HouseIcon, Settings, Sun } from "lucide-react";

export function Links() {
  return (
    <div className={styles.links}>
      <a
        className={styles.linksLink}
        href="http://"
        aria-label="Página inicial"
      >
        <HouseIcon />
      </a>
      <a className={styles.linksLink} href="http://" aria-label="Histórico">
        <History />
      </a>
      <a className={styles.linksLink} href="http://" aria-label="Configurações">
        <Settings />
      </a>
      <a className={styles.linksLink} href="http://" aria-label="Modo claro">
        <Sun />
      </a>
    </div>
  );
}
