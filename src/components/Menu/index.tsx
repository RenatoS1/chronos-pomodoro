import styles from "./styles.module.css";

import { History, HouseIcon, Settings, Sun } from "lucide-react";

export function Menu() {
  return (
    <nav className={styles.menu}>
      <a
        className={styles.menuLink}
        href="http://"
        aria-label="Página inicial"
      >
        <HouseIcon />
      </a>
      <a className={styles.menuLink} href="http://" aria-label="Histórico">
        <History />
      </a>
      <a className={styles.menuLink} href="http://" aria-label="Configurações">
        <Settings />
      </a>
      <a className={styles.menuLink} href="http://" aria-label="Modo claro">
        <Sun />
      </a>
    </nav>
  );
}
