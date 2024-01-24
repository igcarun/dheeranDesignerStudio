import { DataProvider } from './Context/DataContext';
import Footer from './Footer/footer';
import Header from './Header/header';
import Main from './Main/main';
import './App.scss';
// import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <DataProvider>
        <Header></Header>
        <Main></Main>
        <Footer></Footer>
      </DataProvider>
    </>
  );
}

export default App;
