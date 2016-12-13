// Use 3rd party libs to generate HTML from Markdown
"use strict";
var commonmark = require("commonmark");
var hljs = require("highlight.js");
var commonmarkReader = new commonmark.Parser();
var commonmarkWriter = new commonmark.HtmlRenderer();
function markdownToHtmlUsingCommonmark(markdownText) {
    var parsed = commonmarkReader.parse(markdownText);
    var markdownHtml = commonmarkWriter.render(parsed);
    var div = document.createElement('div');
    div.className = 'markdown-body';
    div.innerHTML = markdownHtml;
    return div;
}
exports.markdownToHtmlUsingCommonmark = markdownToHtmlUsingCommonmark;
function applyHighlightingToHtml(domElement) {
    // pure function, clone the input
    var domElCopy = domElement.cloneNode(true);
    Array.prototype.slice.call(domElCopy.querySelectorAll('pre code'))
        .forEach(function (block) { return hljs.highlightBlock(block); });
    return domElCopy;
}
exports.applyHighlightingToHtml = applyHighlightingToHtml;
function cleanCurlyBracesInHtml(htmlText) {
    // Handle curly braces within text (Angular 2 doesn't like)
    var htmlTextFixed = htmlText.replace(/{/g, '&#123;');
    htmlTextFixed = htmlTextFixed.replace(/}/g, '&#125;');
    return htmlTextFixed;
}
exports.cleanCurlyBracesInHtml = cleanCurlyBracesInHtml;
function getCleanHtmlTextFromMarkdown(mdText) {
    var mdHtmlEl = markdownToHtmlUsingCommonmark(mdText);
    var mdHtmlElHighlight = applyHighlightingToHtml(mdHtmlEl);
    return cleanCurlyBracesInHtml(mdHtmlElHighlight.outerHTML);
}
exports.getCleanHtmlTextFromMarkdown = getCleanHtmlTextFromMarkdown;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFya2Rvd24uc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm1hcmtkb3duLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsb0RBQW9EOztBQUVwRCx1Q0FBd0M7QUFDeEMsbUNBQW9DO0FBU3BDLElBQUksZ0JBQWdCLEdBQUcsSUFBSSxVQUFVLENBQUMsTUFBTSxFQUFFLENBQUE7QUFDOUMsSUFBSSxnQkFBZ0IsR0FBRyxJQUFJLFVBQVUsQ0FBQyxZQUFZLEVBQUUsQ0FBQTtBQUVwRCx1Q0FBd0MsWUFBb0I7SUFDMUQsSUFBSSxNQUFNLEdBQUcsZ0JBQWdCLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxDQUFBO0lBQ2pELElBQUksWUFBWSxHQUFHLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQTtJQUVsRCxJQUFJLEdBQUcsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFBO0lBQ3ZDLEdBQUcsQ0FBQyxTQUFTLEdBQUcsZUFBZSxDQUFBO0lBQy9CLEdBQUcsQ0FBQyxTQUFTLEdBQUcsWUFBWSxDQUFBO0lBQzVCLE1BQU0sQ0FBQyxHQUFHLENBQUE7QUFDWixDQUFDO0FBakJDLHNFQUE2QjtBQW1CL0IsaUNBQWtDLFVBQXVCO0lBQ3ZELGlDQUFpQztJQUNqQyxJQUFJLFNBQVMsR0FBZ0IsVUFBVSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQTtJQUN2RCxLQUFLLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLGdCQUFnQixDQUFDLFVBQVUsQ0FBQyxDQUFDO1NBQy9ELE9BQU8sQ0FBQyxVQUFDLEtBQUssSUFBSyxPQUFBLElBQUksQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLEVBQTFCLENBQTBCLENBQUMsQ0FBQTtJQUNqRCxNQUFNLENBQUMsU0FBUyxDQUFBO0FBQ2xCLENBQUM7QUF4QkMsMERBQXVCO0FBMEJ6QixnQ0FBaUMsUUFBUTtJQUN2QywyREFBMkQ7SUFDM0QsSUFBSSxhQUFhLEdBQUcsUUFBUSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsUUFBUSxDQUFDLENBQUE7SUFDcEQsYUFBYSxHQUFHLGFBQWEsQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLFFBQVEsQ0FBQyxDQUFBO0lBQ3JELE1BQU0sQ0FBQyxhQUFhLENBQUE7QUFDdEIsQ0FBQztBQTlCQyx3REFBc0I7QUFnQ3hCLHNDQUF1QyxNQUFNO0lBQzNDLElBQUksUUFBUSxHQUFHLDZCQUE2QixDQUFDLE1BQU0sQ0FBQyxDQUFBO0lBQ3BELElBQUksaUJBQWlCLEdBQUcsdUJBQXVCLENBQUMsUUFBUSxDQUFDLENBQUE7SUFDekQsTUFBTSxDQUFDLHNCQUFzQixDQUFDLGlCQUFpQixDQUFDLFNBQVMsQ0FBQyxDQUFBO0FBQzVELENBQUM7QUFuQ0Msb0VBQTRCIn0=