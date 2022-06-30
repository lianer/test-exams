import styles from './App.module.css';

export interface IExam {
  ExamDescription: React.FC;
  WriteHere: React.FC;
}

const Header: React.FC = function () {
  return (
    <header>
      <h1>面试题</h1>
    </header>
  );
};

const Portlet: React.FC<IExam> = function ({ ExamDescription, WriteHere }) {
  return (
    <section className={styles.Portlet}>
      <div className={styles.ExamDescription}>
        <ExamDescription />
      </div>
      <div className={styles.WriteHere}>
        <WriteHere />
      </div>
    </section>
  );
};

const App: React.FC<{ exams?: IExam[] }> = function ({ exams }) {
  return (
    <main className={styles.App}>
      <Header></Header>

      {exams?.map(({ ExamDescription, WriteHere }) => (
        <Portlet
          ExamDescription={ExamDescription}
          WriteHere={WriteHere}
        ></Portlet>
      ))}
    </main>
  );
};

export default App;
