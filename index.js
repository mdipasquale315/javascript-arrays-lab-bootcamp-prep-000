const app = "I don't do much."
var kittens = ['Milo', 'Otis', 'Garfield']
function destructivelyAppendKitten(name){
   name = kittens.push('Ralph')
  return name
}
function destructivelyPrependKitten(name){
  name = kittens.unshift()
  return name
}