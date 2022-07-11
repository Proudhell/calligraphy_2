import Header from "./components/Header"
import Footer from "./components/Footer"
import Page1 from "./components/Page1"
import 'bootstrap/dist/css/bootstrap.min.css';
import Background from "./components/Background";

function App() {
  return (
    <body>
      <div>
        <Header/>
        <Background/>
        
        <div class="awfw">
        </div>
        <Footer />
      </div>
    </body>
  );
}
export default App;