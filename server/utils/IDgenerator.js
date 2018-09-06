export default function generateID(list, field) {
  let newID;
  do {
    newID = Math.floor(Math.random() * 100000);
  } while (list.find(item => item[field] === newID) !== undefined);
  return newID.toString();
}
