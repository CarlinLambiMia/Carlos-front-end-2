'use client'
import React from "react"
import styles from "./footer.module.css"

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.descricao}>
                <p>&copy; Todos direitos reservados para esse aluno.</p>
            </div>
        </footer>
    )
}