export function <%= namePascal %>Factory() {
  let publicVar = 'public';
  let privateVar = 'private';

  return {
    publicVar : publicVar,
    getPrivateVar : getPrivateVar,
    setPrivateVar : setPrivateVar
  };

  function getPrivateVar() {
    return privateVar;
  }

  function setPrivateVar(value) {
    privateVar = value;
    return this;
  }
}
