import {observable, computed} from "mobx";

export default class AppState {
    repType = observable("");
    state = observable("");

    currRepSet = observable([]);
    selectedRepName = observable("");

    selectedRep = computed(() => {
        if (!this.selectedRepName.get() || this.currRepSet.length === 0) {
            return {};
        } else {
            let currRep = {};
            for (var i=0; i<this.currRepSet.length; i++) {
                if (this.currRepSet[i].name === this.selectedRepName.get()) {
                    currRep = this.currRepSet[i]; 
                    break;
                }
            }
            if (currRep.name) {
                let names = currRep.name.split(' ');
                currRep.firstName = names.length > 0 ? names[0] : "";
                currRep.lastName = names.length > 1 ? names[names.length-1] : "";
            }
            return currRep;
        }
    })

    fetchReps = () => {
        while (this.currRepSet.length > 0) { this.currRepSet.shift() }
        this.selectedRepName.set("");
        if (!this.repType || !this.state) {
            return;
        }
        let repTypePath = this.repType === "HOUSE" ? 'representatives' : 'senators';
        fetch(`/${repTypePath}/${this.state}`)
        .then(response => response.json())
        .then(json => {
            while (json && json.results && json.results.length) {
                this.currRepSet.push(json.results.shift());
            }
        });
    }
}