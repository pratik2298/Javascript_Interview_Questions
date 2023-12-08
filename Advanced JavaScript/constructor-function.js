function Biscuit(){
    this.height = 22;
    this.width = 12;
    this.color = 'Brown';
    this.taste = 'Sugary';
    this.getBiscuitConfiguration = function(){
        return `${this.width}, ${this.height}, ${this.color}, ${this.taste}`;
    }
}


let b1 =  new Biscuit()
console.log(b1.getBiscuitConfiguration())
