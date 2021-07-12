import chai from 'chai';
import chatHttp from 'chai-http';
import 'chai/register-should';
import app from '../index';

chai.use(chatHttp);
const { expect } = chai;

describe('Testing the user endpoints:', () => {
  it('It should get a particular user', (done) => {
    const userId = 1;
    chai.request(app)
      .get(`/api/v1/users/${userId}`)
      .set('Accept', 'application/json')
      .end((err, res) => {
        expect(res.status).to.equal(200);
        res.body.data.should.have.property('id');
        res.body.data.should.have.property('name');
        res.body.data.should.have.property('email');
        res.body.data.should.have.property('birthday');
        res.body.data.should.have.property('icon');
        done();
      });
  });

  it('It should not get a particular user with invalid id', (done) => {
    const userId = 8888;
    chai.request(app)
      .get(`/api/v1/users/${userId}`)
      .set('Accept', 'application/json')
      .end((err, res) => {
        expect(res.status).to.equal(404);
        res.body.should.have.property('message').eql(`Cannot find user with the id ${userId}`);
        done();
      });
  });

  it('It should not get a particular user with non-numeric id', (done) => {
    const userId = 'aaa';
    chai.request(app)
      .get(`/api/v1/users/${userId}`)
      .set('Accept', 'application/json')
      .end((err, res) => {
        expect(res.status).to.equal(400);
        res.body.should.have.property('message').eql('Please input a valid numeric value');
        done();
      });
  });
});
