var recipes = {}

function updateObjectWithKeyAndValue(object, key, value) {
 object [key] = value
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  
}

function deleteFromObjectByKey(object, key) {
   var newObject = Object.assign({}, object);
   delete newObject.key;
   return newObject;
 }

