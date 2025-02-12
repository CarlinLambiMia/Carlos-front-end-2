import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.div}>
      <div className={styles.campoParagrafo}>
        <h1> Bem-vindo á clínica Bruxelas</h1>
        <p> Nossa equipe de profissionais altamente qualificados está pronta para cuidar da sua saúde
com dedicação e excelência. Oferecemos um atendimento humanizado, tecnologia de ponta
          e uma ampla gama de especialidades médicas para garantir seu bem-estar.</p>
      </div>
    </div>

  );
}
