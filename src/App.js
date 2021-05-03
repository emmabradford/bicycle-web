//import react from 'react';
import AppBar from './appBar';
import 'devextreme/dist/css/dx.common.css';
import 'devextreme/dist/css/dx.light.css';
import Schedule from './schedule';
import Dialog from './dialog'
import Inventory from './inventory';
import Customers from './customers';
import ToolTip from './toolTip'
import ToolTip1 from './toolTip1'
import ToolTip2 from './toolTip2'
import ToolTip3 from './toolTip3'


function App() {
  return (
    <div className="App">
        <AppBar />
        <ToolTip />        
        <Dialog />
        <ToolTip1 / >
        <Schedule />
        <ToolTip2 / >

        <Inventory />
        <ToolTip3 / >
        <Customers />
    </div>
  );
}

export default App;
