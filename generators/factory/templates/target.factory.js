export function <%= namePascal %>Factory($log) {
	'ngInject';

	this.$log = $log;

	let publicVar  = 'public';
	let privateVar = 'private';

	return {
		publicVar    : publicVar,
		getPrivateVar: getPrivateVar,
		setPrivateVar: setPrivateVar
	};

	function getPrivateVar() {
		return privateVar;
	}

	function setPrivateVar(value) {
		privateVar = value;
		return this;
	}
}
