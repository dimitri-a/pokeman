import React, {Component} from 'react';
import axios from 'axios';

export default class List extends Component {

    constructor(props) {
        super(props);

        this.state = {
            allData: []
        }

        this.getPokemons();
    }

    getPokemons(){

        axios.get('http://pokeapi.co/api/v2/pokemon/?limit=151')
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }



    render() {
     
        return (<div>
          hi
            </div>
        );
    }

}
