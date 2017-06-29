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
            result = this.state.data.filter(item => item.name.includes(this.state.filter));
        }
        else {
            result = this.state.data;
        }

        let currentPage = result.slice(this.state.currentPageNr * 20, this.state.currentPageNr * 20 + 20);
        return currentPage;
    }


    setFilter(filter) {
        this.setState({filter: filter}, function () {
            this.selectData();
        });
    }

    prev() {
        this.setState({currentPageNr: this.state.currentPageNr - 1});
    }

    next() {
        this.setState({currentPageNr: this.state.currentPageNr + 1});
    }

    render() {
        return (
            <div className="container dtop">
                <button disabled={this.state.currentPageNr < 1 && this.state.filter ===''} className="btn btn-default" onClick={() => this.prev()}>prev</button>
                <button  disabled={this.state.currentPageNr > 6 && this.state.filter ===''}  className="btn btn-default" onClick={() => this.next()}>next</button>

                <div className="col-lg-12 col-md-12 col-xs-12">
                    <input className="middle form-control" type="text" placeholder="search your pokemon"
                           onChange={e => this.setFilter(e.target.value)}/>
                </div>
                <Pokemon data={this.selectData()}/>
            </div>
        );
    }
}
