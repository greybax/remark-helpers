import { ast, text, html } from "./index";
import should from "should";


const input = `
# header ~~removed string~~
`;

it('ast', ()=> {
  ast(input).should.have.a.property("type").which.is.equal('root');
});

it('text', ()=> {
  text(input).should.be.equal('header removed string');
});

it('html', ()=> {
  html(input).should.be.equal('<h1>header <del>removed string</del></h1>');
});