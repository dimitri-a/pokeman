import React, {Component} from 'react';
import axios from 'axios';

export default class List extends Component {

    constructor(props) {
        super(props);

        this.state = {
            data: []
        }
    }

    componentDidMount(){
        this.getPokemons();
    }

    getPokemons(){
        axios.get("http://pokeapi.co/api/v2/pokemon/?limit=151").then(response => {
            console.log(response.data.results);
            this.setState({ data: response.data.results });
        });
    }


    selectData(search){
        //todo remove
        debugger;
        console.log('this.state.data=',this.state.data);
        let filter = this.state.data.filter(item => item.name.includes(search));
        console.log('filter=',filter);

        let currentPage = filter.slice(0,20);

        console.log('currentPage=',currentPage);

        return currentPage;
    }



    render() {
     
        return (<div>
                <input type="text" placeholder="search your pokemon" onChange={e => this.selectData(e.target.value)}/>
                
                
            </div>
        );
    }

}
