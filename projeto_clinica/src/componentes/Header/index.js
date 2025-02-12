'use client'
import React from "react"
import styles from "./header.module.css"
import Link from "next/link"
import Image from "next/image"

export default function Header() {
    return (
        <div className={styles.header}>
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
                                <button><Link href="/medicos" className={styles.opcaoHeader}>Listar médicos</Link></button>
                            </li>
                            <li className={styles.headerLi}>
                                <button><Link href="#" className={styles.opcaoHeader}>Adicionar</Link></button>
                            </li>
                            <li className={styles.headerLi}>
                                <button><Link href="#" className={styles.opcaoHeader}>Editar</Link></button>
                            </li>
                            <li className={styles.headerLi}>
                                <button><Link href="#" className={styles.opcaoHeader}>Excluir</Link></button>
                            </li>
                        </ul>
                    </li>
                    <li className={styles.headerLi}>
                        <Link href="#" className={styles.opcaoHeader}>Pacientes</Link>
                        <ul className={styles.Submenu}>
                            <li className={styles.headerLi}>
                                <button><Link href="/pacientes" className={styles.opcaoHeader}>Listar pacientes</Link></button>
                            </li>
                            <li className={styles.headerLi}>
                                <button><Link href="#" className={styles.opcaoHeader}>Adicionar</Link></button>
                            </li>
                            <li className={styles.headerLi}>
                                <button><Link href="#" className={styles.opcaoHeader}>Editar</Link></button>
                            </li>
                            <li className={styles.headerLi}>
                                <button><Link href="#" className={styles.opcaoHeader}>Excluir</Link></button>
                            </li>
                        </ul>
                    </li>
                    <li className={styles.headerLi}>
                        <Link href="#" className={styles.opcaoHeader}>Agaendamento</Link>
                        <ul className={styles.Submenu}>
                            <li className={styles.headerLi}>
                                <button><Link href="/agendamentos" className={styles.opcaoHeader}>Listar Consultas</Link></button>
                            </li>
                            <li className={styles.headerLi}>
                                <button><Link href="#" className={styles.opcaoHeader}>Agendar Consulta</Link></button>
                            </li>
                            <li className={styles.headerLi}>
                                <button><Link href="#" className={styles.opcaoHeader}>Editar Agendamento</Link></button>
                            </li>
                            <li className={styles.headerLi}>
                                <button><Link href="#" className={styles.opcaoHeader}>Cancelar</Link></button>
                            </li>
                        </ul>
                    </li>
                </ul>
            </nav>
        </div>
    )
}