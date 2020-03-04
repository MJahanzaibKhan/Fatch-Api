import React from 'react';


class Data extends React.Component {
    constructor() {
        super();
        this.state = {
            allValues: []
        }
    }


    val = () => {

        fetch('https://jsonplaceholder.typicode.com/albums/')
            .then(response => response.json())
            .then((myJson) => {
                console.log(myJson);
                let album = myJson;
                this.setState({
                    allValues: album
                })
            })
        console.log(this.state.allValues);
    }
    componentWillMount() {
        this.val();
    }

    render() {
        console.log('render');
        return (
            <div>
                <button onClick={this.val}>click</button>
            </div>
        )
    }

}
export default Data;