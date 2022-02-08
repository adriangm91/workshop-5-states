import React from "react";
import Table from "./Table";

// al ser un componente se pone en mayuscula
class App extends React.Component { 
    render(){
      return (
        <div className='container'>
          <Table />
        </div>
      );
    }
  }

  export default App;