class Formatter {
  //add static methods here
  static capitalize(phrase) {
    return phrase[0].toUpperCase() + phrase.slice(1)
  }
  
  static sanitize(phrase) {
    return phrase.replace(/[^A-Za-z0-9-' ]+/g, '')
  }
  
  static titleize(phrase) {
    return phrase.split(" ").map((w, i) => {
      const exceptions = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
      if(!exceptions.includes(w) || i === 0) {return Formatter.capitalize(w)}
      else {return w}
    }).join(" ")
  }
}

console.log( Formatter.titleize( "getting giggles" ) )
console.log( Formatter.titleize( "where the wild things are" ) )
console.log( Formatter.titleize( "chicken soup with rice and a few other songs" ) )
console.log( Formatter.titleize( "Maurice a an but of and for at by from end" ) )
console.log( Formatter.titleize( "a tale of two cities" ) )
console.log( Formatter.titleize( "in the night kitchen" ) )
