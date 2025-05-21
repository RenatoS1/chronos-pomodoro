import { useState, useEffect } from "react";
import styles from "./styles.module.css";

import { History, HouseIcon, Settings, Sun } from "lucide-react";

type AvailableThemes = 'dark' | 'light';



export function Menu() {
  const [theme, setTheme] = useState<AvailableThemes>("dark");

  function handleThemeChange(
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) {
    event.preventDefault(); // Não segue o link

    setTheme((prevTheme) => {
      const nextTheme = prevTheme === "dark" ? "light" : "dark";
      return nextTheme;
    });

    // document.documentElement.setAttribute('data-theme', theme);
  }

  //useEffect(() => {
  //  console.log('useEffect sem dependencias', Date.now());
  //
  // });

  //useEffect(() => {
  //  console.log("useEffect com array de deps vazio", Date.now());
  //}, []);
  
  useEffect(() => {
     console.log('theme mudou', theme,  Date.now());
     document.documentElement.setAttribute('data-theme', theme);
  
  }, [theme])

  return (
    <nav className={styles.menu}>
      <h1>{theme}</h1>
      <a
        className={styles.menuLink}
        href="http://"
        aria-label="Página inicial"
        title="Página inicial"
      >
        <HouseIcon />
      </a>

      <a
        className={styles.menuLink}
        href="http://"
        aria-label="Histórico"
        title="Histórico"
      >
        <History />
      </a>

      <a
        className={styles.menuLink}
        href="http://"
        aria-label="Configurações"
        title="Configurações"
      >
        <Settings />
      </a>

      <a
        className={styles.menuLink}
        href="#"
        aria-label="Modo claro"
        title="Mudar Tema"
        onClick={handleThemeChange}
      >
        <Sun />
      </a>
    </nav>
  );
}
