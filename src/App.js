import logo from './logo.svg';


const Amount =() =>{
 return <h1>REACT JS</h1>
}

const Name=()=>{
  return(
    <>
    <h1>kishore jayen is an web developer and he is an Enterpreneur</h1>
    </>
  )
}


const Table=()=>{
  return(
    <table>
    <tr>
    <th>Name</th><th>Age</th><th>Gender</th>
    </tr>
    <tr>
    <td>Krish</td><td>21</td><td>Male</td>
    </tr>
    <tr>
    <td>Lena</td><td>27</td><td>Female</td>
    </tr>
    <tr>
    <td>Abdul</td><td>34</td><td>Male</td>
    </tr>
    </table>
  )
}



function App() {
  return (
    <i>
    <Amount/>
     <Name/>
     <Table/>
     {/* <Sector/>
    <Role/> */}
   </i>
   
  );
}
export default App;
