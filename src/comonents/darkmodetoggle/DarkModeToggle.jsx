"use client"
import { useContext } from "react";
import styles from "./DarkModeToggle.module.css"
import Switch from '@mui/material/Switch';
import { ThemeContext } from "@/context/ThemContext";

export default function DarkModeToggle() {
  const {mode , toggle} = useContext(ThemeContext)

  return (
   <div className={styles.container} onClick={toggle}>
        <div className={styles.icon}>🌙</div> 
        <div className={styles.icon}>🌚</div> 
        <div 
        className={styles.switcher}
        style={mode === "light" ? {left:"2px"}: {right:"2px"} } /
        >
    </div>
  );
}

