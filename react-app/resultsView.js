import React, {Component} from 'react';
import {observer} from 'mobx-react';
import States from './states.js';

@observer 
export default class ResultsView extends Component {
    render () {
        return (
            <div>
                <div className="left-side">
                    <h2>List / Representatives</h2>
                    <ul>
                        <li className="header"><span>Name</span><span>Party</span></li>
                        {this.props.appState.currRepSet.length === 0 
                            ? <li><span>Select a type of representative and state to see results</span></li> 
                            : null}
                    {this.props.appState.currRepSet.map(rep =>
                        <li onClick={() => {
                            this.props.appState.selectedRepName.set(rep.name);
                        }} key={rep.name} className="selectable">
                            <span className={rep.name === this.props.appState.selectedRepName.get() ? "selected" : ""}>{rep.name}</span>
                            <span>{rep.party}</span>
                        </li>)                
                    }
                    </ul>
                </div>
                <div className="right-side">
                    <h2>Info</h2>
                    <input disabled placeholder="First Name" value={this.props.appState.selectedRep.get().firstName || ""} />
                    <input disabled placeholder="Last Name" value={this.props.appState.selectedRep.get().lastName || ""} />
                    <input disabled placeholder="District" value={this.props.appState.selectedRep.get().district || ""} />
                    <input disabled placeholder="Phone" value={this.props.appState.selectedRep.get().phone || ""} />
                    <input disabled placeholder="Office" value={this.props.appState.selectedRep.get().office || ""} />
                </div>
            </div>
        );
    }
};