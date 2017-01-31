import AppState from './appState.js'
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import ResultsView from './resultsView.js' 
import SelectionForm from './selectionForm.js'

class FindMyRepView extends Component {
    render () {
        return <div>
            <SelectionForm appState={appState} />
            <ResultsView appState={appState} />
        </div>;
    }
}

const appState = new AppState();
ReactDOM.render(<FindMyRepView/>, document.getElementById('react-app'));