import React, {Component} from 'react';

export default class Pokemon extends Component {


    getId(pk) {
        const ar = pk.url.split("/");
        let nr = ar[ar.length - 2];
        return nr;
    }

    getImageFilename(pk) {
        let filename ="../app/images/" + this.getId(pk) + ".png";
        return filename;
    }

    render() {
        let display;

        display = this.props.data.map
        (
            (poke) =>
                (
                    <div key={poke.name}>
                        <div key={poke.name} className="col-lg-3 col-sm-6 hidden-xs">
                            <img src={this.getImageFilename(poke)} alt=""/>
                            <p>#{this.getId(poke)}</p>
                            <p> {poke.name}</p>

                        </div>

                        <div className="row hidden-lg hidden-sm hidden-md">
                            <div className="col-xs-6">
                                <img className="big-box" src={this.getImageFilename(poke)} alt=""/>
                            </div>
                            <div className="col-xs-6">
                                <div className="mini-box">
                                    <div className="col-xs-12">#{this.getId(poke)}</div>
                                    <div className="col-xs-12">{poke.name}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                )
        )

        return (
            <div>
                {display}
            </div>
        );
    }

}
