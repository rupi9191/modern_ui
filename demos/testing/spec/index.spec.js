var calculator = require('./index.js');

describe('calculator', function(){
	it('add two numbers',function(){
		expect(calculator.add(1,1)).toBe(2);
	});
});