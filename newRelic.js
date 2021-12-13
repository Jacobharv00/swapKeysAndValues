/*
  NOTES:
  Write a function that accepts an object and swaps the keys and the values.
  Need to make a new function
  Need a way to identify both keys and values then swap them
  If the obj has the key swap it to the value
*/

// Solution 1
const swapKeysAndValues = ( obj ) => {

  // Obj to test against
  originalObj = {
    'key1': 'value1',
    'key2': 'value2'
  }

  // Create a new object containing the keys and values from obj
  const newObject = Object.entries( originalObj )

  // Map over the keys and values and swap them
  const swapped = newObject.map( ( [ key, value ] ) => [ value, key ] )

  return swapped
}
swapKeysAndValues()


/* Solution 2
const swapKeysAndValues = ( obj ) => {
  let newObj = Object.entries( obj )

  for ( let key in obj ) {
    if ( obj.hasOwnProperty( key ) ) {
      newObj[ obj[ key ] ] = key
    }
  }
  return newObj
}
swapKeysAndValues()
*/


/*  Solution 3
const swapKeysAndValues = ( obj ) => {

  const originalObj = {
    'key1': 'value1',
    'key2': 'value2'
  }

  let newObject = {}

  Object.entries( originalObj ).forEach( entry => {
    let key = entry[ 0 ]
    let value = entry[ 1 ]
    newObject[ value ] = key
  } )

  return newObject
}
swapKeysAndValues()

*/

