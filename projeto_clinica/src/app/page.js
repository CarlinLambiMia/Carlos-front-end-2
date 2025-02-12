import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.div}>
      <link rel="preconnect" href="https://fonts.googleapis.com"></link>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
      <link href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap" rel="stylesheet"></link>
      <div className={styles.campoParagrafo}>
        <h1> Bem-vindo á clínica Bruxelas</h1>
        <p> Nossa equipe de profissionais altamente qualificados está pronta para cuidar da sua saúde
com dedicação e excelência. Oferecemos um atendimento humanizado, tecnologia de ponta
          e uma ampla gama de especialidades médicas para garantir seu bem-estar.</p>
      </div>
    </div>

  );
}
