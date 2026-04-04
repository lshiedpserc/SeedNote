import Header from './components/Header';
import Sidebar from './components/Sidebar';
import NotebookList from './components/NotebookList';
import Editor from './components/Editor';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header />

      <main className="pt-16 h-screen flex">
        <Sidebar />
        <NotebookList />
        <Editor />
      </main>

      <Footer />
    </>
  );
}

export default App;
