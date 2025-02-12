'use client'
import React from "react"
import styles from "./header.module.css"
import Link from "next/link"
import Image from "next/image"

export default function Header() {
    return (
        <div className={styles.header}>
            <link rel="preconnect" href="https://fonts.googleapis.com"></link>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
            <link href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap" rel="stylesheet"></link>
            <nav className={styles.navegacao}>
                <div>
                <Image src={'/images/logo.png'} width={70} height={70} alt="Logo" className={styles.logo}/>
                </div>
            
            <ul className={styles.headerul}>
                <li className={styles.headerLi}>
                    <Link href="/" className={styles.opcaoHeader}>
                        Home
                    </Link>
                </li>
                <li className={styles.headerLi}>

                        <Link href="#" className={styles.opcaoHeader}>Médicos</Link>
                        <ul className={styles.Submenu}>
                            <li className={styles.headerLi}>
                               <Link href="/medicos" className={styles.opcaoHeader}>Listar médicos</Link>
                            </li>
                            <li className={styles.headerLi}>
                                <Link href="#" className={styles.opcaoHeader}>Adicionar</Link>
                            </li>
                            <li className={styles.headerLi}>
                                <Link href="#" className={styles.opcaoHeader}>Editar</Link>
                            </li>
                            <li className={styles.headerLi}>
                               <Link href="#" className={styles.opcaoHeader}>Excluir</Link>
                            </li>
                        </ul>
                    </li>
                    <li className={styles.headerLi}>
                        <Link href="#" className={styles.opcaoHeader}>Pacientes</Link>
                        <ul className={styles.Submenu}>
                            <li className={styles.headerLi}>
                                <Link href="/pacientes" className={styles.opcaoHeader}>Listar pacientes</Link>
                            </li>
                            <li className={styles.headerLi}>
                                <Link href="#" className={styles.opcaoHeader}>Adicionar</Link>
                            </li>
                            <li className={styles.headerLi}>
                                <Link href="#" className={styles.opcaoHeader}>Editar</Link>
                            </li>
                            <li className={styles.headerLi}>
                                <Link href="#" className={styles.opcaoHeader}>Excluir</Link>
                            </li>
                        </ul>
                    </li>
                    <li className={styles.headerLi}>
                        <Link href="#" className={styles.opcaoHeader}>Agaendamento</Link>
                        <ul className={styles.Submenu}>
                            <li className={styles.headerLi}>
                               <Link href="/agendamentos" className={styles.opcaoHeader}>Listar Consultas</Link>
                            </li>
                            <li className={styles.headerLi}>
                                <Link href="#" className={styles.opcaoHeader}>Agendar Consulta</Link>
                            </li>
                            <li className={styles.headerLi}>
                                <Link href="#" className={styles.opcaoHeader}>Editar Agendamento</Link>
                            </li>
                            <li className={styles.headerLi}> 
                                <Link href="#" className={styles.opcaoHeader}>Cancelar</Link>
                            </li>
                        </ul>
                    </li>
                </ul>
            </nav>
        </div>
    )
}