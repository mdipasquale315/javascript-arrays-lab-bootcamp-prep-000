const app = "I don't do much."
var kittens = ['Milo', 'Otis', 'Garfield']
function destructivelyAppendKitten(name){
   name = kittens.push('Ralph')
  return name
}
function destructivelyPrependKitten(name){
  name = kittens.unshift('Bob')
  return name
}
function destructivelyRemoveLastKitten(name){
  name = kittens.pop()
  return name
}
function destructivelyRemoveFirstKitten(name){
  name = kittens.shift()
  return name
}
function appendKitten(name){
   [kittens...'Broom']
  return name
}
