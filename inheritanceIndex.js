function HtmlElement() {
    this.focus = function() { console.log('focus'); }
}


HtmlElement.prototype.click = function() { console.log('click'); }

let m = new HtmlElement();


function HtmlSelectElement(items = []) {
    this.items = items;
    this.addItem = function(item) { this.items.push(item); }    
    this.removeItem = function(item) { this.items.splice(indexOf(item), 1); }
    
    this.render =  function() {
        return `<select> 
                ${this.items.map(item => 
                    `<option> ${item} </option>`).join('') } 
                </select>`
    }
}

HtmlSelectElement.prototype = Object.create(HtmlElement.prototype);
HtmlSelectElement.prototype.constructor = HtmlSelectElement;

let ms = new HtmlSelectElement();





function HtmlImgElement(src) {
    this.src = src;
    this.render =  function() {
        return`<img src= ${this.src}/>`;
    }
}

HtmlImgElement.prototype = new HtmlElement();
HtmlImgElement.prototype.constructor = HtmlImgElement;

const elements = [
    new HtmlSelectElement([1, 2, 3]),
    new HtmlImgElement('sttp://')
];

for (let element of elements)
    console.log(element.render());