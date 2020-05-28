import React from 'react';
import './App.css';

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            servers:[
            ]
        };
    }

    componentDidMount() {
        this.getServerList();
    }

    render() {
        const {servers} = this.state;
        const {selectOnChange} = this;
        const serverNames = servers.map(
            (server) =>(
                <option key={server.serverId} value={server.serverId}>{server.serverName}</option>
            )
        )

        return (
            <div className="App">
                <header className="App-header">
                    <select onChange={selectOnChange}>
                        {serverNames}
                    </select>
                    <input/>
                </header>

            </div>
        );
        ;
    }

    selectOnChange = (event) =>{
        console.log(event.target.value);
    }

    getServerList = () =>{
        fetch('/api'+'?url=/df/servers')
            .then(res=>res.json())
            .then(data=>this.setState({servers:data}));
    }
}


export default App;
