/*Create a function called tellStory()

The function should accept an array of 3 strings as an argument: name, mood, activity ( All strings )

The function should return one big string with a story made from the arguments

Example: This is *name*. *name* is a nice person. Today they are *mood*. They are *activity* all day. The end.

The value that is returned from the function should be printed in the console or in alert */

let person = ["Bob", "sad", "working"];

function tellStory(array) {
  return `This is ${array[0]}. ${array[0]} is a nice person. Today they are ${array[1]}. They are ${array[2]} all day. The End`;
}

console.log(tellStory(person));
