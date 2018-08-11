var recipes = {}

function updateObjectWithKeyAndValue(obj, key, value) {
  obj[key] = value;
  return obj;
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  
}

function deleteFromObjectByKey(object, key) {
   var newObject = Object.assign({}, object);
   delete newObject.key;
   return newObject;
 }

