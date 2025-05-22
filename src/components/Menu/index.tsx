import { useState, useEffect } from "react";
import styles from "./styles.module.css";

import { History, HouseIcon, MoonIcon, Settings, Sun } from "lucide-react";

type AvailableThemes = 'dark' | 'light';



export function Menu() {
  const [theme, setTheme] = useState<AvailableThemes>(() => {
    const storageTheme = localStorage.getItem('theme') as AvailableThemes || 'dark'; // eu to meio que forçando: "ou o localStorage vai retornar dark ou light" e se ele não encontrar nehuma ele vai retornar 'dark'
    return storageTheme;
  });

  const nextThemeIcon = {
    dark: <Sun />,
    light: <MoonIcon />
  }



  function handleThemeChange(
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) {
    event.preventDefault(); // Não segue o link

    setTheme((prevTheme) => {
      const nextTheme = prevTheme === "dark" ? "light" : "dark";
      return nextTheme;
    });

  }

  useEffect(() => {
     document.documentElement.setAttribute('data-theme', theme);
      localStorage.setItem('theme', theme);
  }, [theme])



  return (
    <nav className={styles.menu}>
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
        {nextThemeIcon[theme]}
      </a>
    </nav>
  );
}
