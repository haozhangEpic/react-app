import Layout from "./features/layout";
import md5 from './utils/md5'




let empCode = 'TR802065'
let code = 'Ds5IXR'
console.log(md5.hexMD5(empCode + '&a.dl!b*?' + code))
function App() {
  return (
    <div className="App">
      <Layout />
    </div>
  );
}

export default App;
