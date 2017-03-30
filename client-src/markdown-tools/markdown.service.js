// Use 3rd party libs to generate HTML from Markdown
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFya2Rvd24uc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm1hcmtkb3duLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsb0RBQW9EOzs7QUFFcEQsdUNBQXdDO0FBQ3hDLG1DQUFvQztBQVNwQyxJQUFJLGdCQUFnQixHQUFHLElBQUksVUFBVSxDQUFDLE1BQU0sRUFBRSxDQUFBO0FBQzlDLElBQUksZ0JBQWdCLEdBQUcsSUFBSSxVQUFVLENBQUMsWUFBWSxFQUFFLENBQUE7QUFFcEQsdUNBQXdDLFlBQW9CO0lBQzFELElBQUksTUFBTSxHQUFHLGdCQUFnQixDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsQ0FBQTtJQUNqRCxJQUFJLFlBQVksR0FBRyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUE7SUFFbEQsSUFBSSxHQUFHLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQTtJQUN2QyxHQUFHLENBQUMsU0FBUyxHQUFHLGVBQWUsQ0FBQTtJQUMvQixHQUFHLENBQUMsU0FBUyxHQUFHLFlBQVksQ0FBQTtJQUM1QixNQUFNLENBQUMsR0FBRyxDQUFBO0FBQ1osQ0FBQztBQWpCQyxzRUFBNkI7QUFtQi9CLGlDQUFrQyxVQUF1QjtJQUN2RCxpQ0FBaUM7SUFDakMsSUFBSSxTQUFTLEdBQWdCLFVBQVUsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUE7SUFDdkQsS0FBSyxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxnQkFBZ0IsQ0FBQyxVQUFVLENBQUMsQ0FBQztTQUMvRCxPQUFPLENBQUMsVUFBQyxLQUFLLElBQUssT0FBQSxJQUFJLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxFQUExQixDQUEwQixDQUFDLENBQUE7SUFDakQsTUFBTSxDQUFDLFNBQVMsQ0FBQTtBQUNsQixDQUFDO0FBeEJDLDBEQUF1QjtBQTBCekIsZ0NBQWlDLFFBQVE7SUFDdkMsMkRBQTJEO0lBQzNELElBQUksYUFBYSxHQUFHLFFBQVEsQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLFFBQVEsQ0FBQyxDQUFBO0lBQ3BELGFBQWEsR0FBRyxhQUFhLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxRQUFRLENBQUMsQ0FBQTtJQUNyRCxNQUFNLENBQUMsYUFBYSxDQUFBO0FBQ3RCLENBQUM7QUE5QkMsd0RBQXNCO0FBZ0N4QixzQ0FBdUMsTUFBTTtJQUMzQyxJQUFJLFFBQVEsR0FBRyw2QkFBNkIsQ0FBQyxNQUFNLENBQUMsQ0FBQTtJQUNwRCxJQUFJLGlCQUFpQixHQUFHLHVCQUF1QixDQUFDLFFBQVEsQ0FBQyxDQUFBO0lBQ3pELE1BQU0sQ0FBQyxzQkFBc0IsQ0FBQyxpQkFBaUIsQ0FBQyxTQUFTLENBQUMsQ0FBQTtBQUM1RCxDQUFDO0FBbkNDLG9FQUE0QiJ9