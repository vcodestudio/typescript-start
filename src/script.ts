import * as $ from 'jquery';

class SetModule {
    inp : string;
    constructor(input : string) {
        this.inp = input;
    }
    Debug() {
        console.log(this.inp+"..");
        $('body').html(this.inp);
    }
}

const t = new SetModule("DATA");
t.Debug();