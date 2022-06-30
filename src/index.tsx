import ReactDOM from 'react-dom/client';
import App, { IExam } from './core/App';
import * as Exam1 from './exams/1';
import * as Exam2 from './exams/2';

const exams: IExam[] = [Exam1, Exam2];

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(<App exams={exams} />);
