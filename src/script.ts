class SetModule {
    inp : string;
    constructor(input : string) {
        this.inp = input;
    }
    Debug() {
        console.log(this.inp+"..");
    }
}

const t = new SetModule("DATA");
t.Debug();