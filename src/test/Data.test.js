import {getData} from './../data/data';

import { expect } from 'chai';

describe('GetData testing', function() {


    it('should return an array', function(done) {
        getData(0,15).then((result) => {
                expect(result).to.be.an('array');
                done();
            })
            .catch((err) => {
                done(err);
            });
    });
    it('should return an array of size 15 products', function(done) {
        getData(0,15).then((result) => {
                expect(result).to.have.lengthOf(15);
                done();
            })
            .catch((err) => {
                done(err);
            });
    });

  });