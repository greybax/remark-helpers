import { ast, text, html, md } from "./index";
import should from "should";


const input = `
# header ~~removed string~~
`;

const mdast = {
  type: "root",
  children: [
    {
      type: "heading",
      depth: 1,
      children: [
        {
          type: "text",
          value: "header"
        }
      ]
    }
  ]
};

it('ast markdown', () => {
  ast(input).should.have.a.property("type").which.is.equal('root');
});
it('text markdown', () => {
  text(input).should.be.equal('header removed string');
});
it('html markdown', () => {
  html(input).should.be.equal('<h1>header <del>removed string</del></h1>');
});
it('md markdown', () => {
  md(input).should.be.equal('# header ~~removed string~~');
});

it('ast mdast', () => {
  ast(mdast).should.have.a.property("type").which.is.equal('root');
});
it('text mdast', () => {
  text(mdast).should.be.equal('header');
});
it('html mdast', () => {
  html(mdast).should.be.equal('<h1>header</h1>');
});
it('md mdast', () => {
  md(mdast).should.be.equal('# header');
});