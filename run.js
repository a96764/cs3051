let Human= function(name, familyName){
    this.name=name
    this.familyName=familyName
    this.ptint=function(){return this.name+""+this.familyName}

}

let a = new Human('Me', 'You')
let b = new Human('Lapo', 'Lilit')

let fac= function(num) {
    if (num==1) return 1
    return num*fac(num-1)
}

console.log(fac(6))