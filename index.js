import remark from "remark";
import remarkHtml from "remark-html";
import removeMd from "remove-markdown";

const ast = input =>
    typeof input === 'string' && !isMdast(input)
        ? remark().parse(input)
        : input;

const text = (input) => {
    if (!input) return;

    if (isMdast(input)) {
        input = md(input);
    }
    
    return removeMd(input).trim();
}

const html = (input) => {
    if (!input) return;

    if (isMdast(input)) {
        input = md(input);
    }

    return remark().use(remarkHtml).process(input).contents.trim();
}

const md = (input) => {
    if (!input) return;

    if (isMdast(input)) {
        input = remark().stringify(input);
    }

    return input.trim();
}

// shortcuts
const isType = (node, type) => node.type === type;
const isDepth = (node, depth) => node.depth === depth;
const hasChildren = (node) => node.children ? true : false;

const isRoot = node => isType(node, "root");
const isParagraph = node => isType(node, "paragraph");
const isBlockquote = node => isType(node, 'blockquote');
const isHeading = node => isType(node, 'heading');
const isCode = node => isType(node, 'code');
const isInlineCode = node => isType(node, 'inlineCode');
const isYaml = node => isType(node, 'yaml');
const isHtml = node => isType(node, 'html');
const isList = node => isType(node, 'list');
const isListItem = node => isType(node, 'listItem');
const isTable = node => isType(node, 'table');
const isTableRow = node => isType(node, 'tableRow');
const isTableCell = node => isType(node, 'tableCell');
const isThematicBreak = node => isType(node, 'thematicBreak');
const isBreak = node => isType(node, 'break');
const isEmphasis = node => isType(node, 'emphasis');
const isStrong = node => isType(node, 'strong');
const isDelete = node => isType(node, 'delete');
const isLink = node => isType(node, 'link');
const isImage = node => isType(node, 'image');
const isFootnote = node => isType(node, 'footnote');
const isLinkReference = node => isType(node, 'linkReference');
const isImageReference = node => isType(node, 'imageReference');
const isFootnoteReference = node => isType(node, 'footnoteReference');
const isDefinition = node => isType(node, 'definition');
const isFootnoteDefinition = node => isType(node, 'footnoteDefinition');
const isText = node => isType(node, 'Text');

// special
const isMdast = (input) => {
    if (!input) return;

    return isRoot(input) || hasChildren(input);
}


export default {
    // helpers
    ast, text, html, md,

    // shortcuts
    isType, isDepth, hasChildren,
    isRoot, isParagraph, isBlockquote, isHeading, isCode, isInlineCode,
    isYaml, isHtml, isList, isListItem, isTable, isTableRow, isTableCell,
    isThematicBreak, isBreak, isEmphasis, isStrong, isDelete, isLink, isImage,
    isFootnote, isLinkReference, isImageReference, isFootnoteReference,
    isDefinition, isFootnoteDefinition, isText
};