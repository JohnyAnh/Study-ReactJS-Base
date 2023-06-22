import logo from './logo.svg';
import './App.scss';
import MyComponent from './Example/MyComponent';
/**
 * Có 2 components: class component / function component (function, arrow)
 * JSX đặt biệt là class or function nó sử dụng JSX trả về thay vì biến thì trả về HTML
 */
function App() {
  //const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello Word with React JohnyVu
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <MyComponent /> {/*Ưu tiên cái này*/}
        {/* <MyComponent></MyComponent>*/} {/*Dùng để khai báo con của Componet này} */}
      </header>
    </div>
  );
}

export default App;
