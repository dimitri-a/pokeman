import React, {Component} from 'react';
import axios from 'axios';
import Pokemon from './Pokemon.jsx';

export default class List extends Component {

    constructor(props) {
        super(props);

        this.state = {
            data: [],
            currentPageNr: 0,
            filter: ''
        }

        //this.selectData();
    }

    componentDidMount() {
        this.getPokemons();
    }

    getPokemons() {
        axios.get("http://pokeapi.co/api/v2/pokemon/?limit=151").then(response => {
            this.setState({data: response.data.results});
        });
    }


    selectData() {
        let result;


        if (this.state.filter !== '') {
            console.log('this.state.data=', this.state.data);
            result = this.state.data.filter(item => item.name.includes(this.state.filter));
            console.log('filter=');
        }
        else {
            result = this.state.data;
        }

        //todo remove
        debugger;
        let currentPage = result.slice(this.state.currentPageNr*20, this.state.currentPageNr*20+20);

        console.log('currentPage=', currentPage);

        return currentPage;
    }


    setFilter(filter) {
        this.setState({filter: filter},function(){
            this.selectData();
        });
    }

    prev()
    {
        console.log('prev');
        this.setState({currentPageNr:this.state.currentPageNr-1});
        //this.selectData();
    }

    next()
    {
        this.setState({currentPageNr:this.state.currentPageNr +1});
        //this.selectData();
    }

    render() {

        return (<div>
                <button className="btn btn-default" onClick={() => this.prev()}>prev</button>
                <button className="btn btn-default" onClick={() => this.next()}>next</button>
                <input type="text" placeholder="search your pokemon" onChange={e => this.setFilter(e.target.value)}/>

                <Pokemon data={this.selectData()}/>
            </div>
        );
    }

}
