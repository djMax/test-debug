import tap from 'tap';
import Stuff from '../src/asyncStuff';

global.Promise = require('bluebird');

tap.test('test fn', async (tester) => {
    const s = new Stuff();
    s.withReq(async (req) => {
        console.log('in req');
        await s.doStuff();
    });
    tester.ok(true, 'yes sir');
});
