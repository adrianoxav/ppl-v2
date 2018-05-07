import React, {Component} from 'react';

class Home extends Component{

    constructor(props){
        super(props);
        this.state = {data:[]};
    }

    componentDidMount(){
        document.title = "PPL";
    }

    render(){
        return(
            <div>
                <h1>Hello, world!</h1>
            </div>
        );
    }

}

export default Home;