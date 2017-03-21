import tap from 'tap';
import doStuff from '../src/asyncStuff';

global.Promise = require('bluebird');

tap.test('test fn', async (tester) => {
    await doStuff();
    tester.ok(true, 'yes sir');
});
