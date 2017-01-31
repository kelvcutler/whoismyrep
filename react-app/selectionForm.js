import React, {Component} from 'react';
import {observer} from 'mobx-react';
import {States} from './states.js';

@observer 
export default class SelectionForm extends Component {
    render () {
        return (
            <div>
                <h1>Who&#39;s My Representative?</h1>
                <select onChange={this.selectRepType}>
                    <option value={null}>type of representative...</option>
                    <option value="HOUSE">House of Representatives</option>
                    <option value="SENATE">Senate</option>
                </select>
                <select onChange={this.selectState}>
                    <option value={null}>your state...</option>
                {States.map(state =>
                    <option value={state.abbreviation} key={state.abbreviation}>{state.name}</option>
                )}}
                </select>
                <input type="submit" disabled={!this.props.appState.repType.get() && !this.props.appState.state.get()} value="Submit" onClick={this.props.appState.fetchReps} />
            </div>
        );
    }
    
    selectRepType = (event) => {
        this.props.appState.repType.set(event.target.value);
    }
    selectState = (event) => {
        this.props.appState.state.set(event.target.value);
    }
};