//Phil Hofer

//define a function called highlightCode
//this function takes 2 arguments, node and keywords
function highlightCode(node, keywords) {
  //define variable called text, stores the text from what was passed
  //as node.
  var text = node.textContent;
  //clear the node
  node.textContent = ""; // Clear the node

  //declare variables match and pos and store 0 in them
  var match, pos = 0;
  //while match is equal to keywords.exec(text)
  while (match = keywords.exec(text)) {
    //declare variable called before that stores the text from that index
    var before = text.slice(pos, match.index);
    //add to the node the text from before
    node.appendChild(document.createTextNode(before));
    //declare variable called strong that creates an element
    var strong = document.createElement("strong");
    //add to strong what is at match[0]
    strong.appendChild(document.createTextNode(match[0]));
    //add to node what is in strong
    node.appendChild(strong);
    //pos becomes the last index of keywords
    pos = keywords.lastIndex;
  }
  //declare variable called after and give it the slice of text from pos
  var after = text.slice(pos);
  //add to node what is in after
  node.appendChild(document.createTextNode(after));
}

