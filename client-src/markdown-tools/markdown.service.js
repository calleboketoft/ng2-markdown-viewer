"use strict";
var commonmark = require('commonmark');
var hljs = require('highlight.js');
var commonmarkReader = new commonmark.Parser();
var commonmarkWriter = new commonmark.HtmlRenderer();
function generateHtmlFromMarkdown(markdownText) {
    var parsed = commonmarkReader.parse(markdownText);
    var markdownHtml = commonmarkWriter.render(parsed);
    var div = document.createElement('div');
    div.className = 'markdown-body';
    div.innerHTML = markdownHtml;
    return div;
}
exports.generateHtmlFromMarkdown = generateHtmlFromMarkdown;
function applyHighlightingToHtml(domElement) {
    // pure function, clone the input
    var domElCopy = domElement.cloneNode(true);
    Array.prototype.slice.call(domElCopy.querySelectorAll('pre code'))
        .forEach(function (block) {
        hljs.highlightBlock(block);
    });
    return domElCopy;
}
exports.applyHighlightingToHtml = applyHighlightingToHtml;
function cleanCurlyBraces(htmlText) {
    // Handle curly braces within text (Angular 2 doesn't like)
    var htmlTextFixed = htmlText.replace(/{/g, '&#123;');
    htmlTextFixed = htmlTextFixed.replace(/}/g, '&#125;');
    return htmlTextFixed;
}
exports.cleanCurlyBraces = cleanCurlyBraces;
function getCleanHtmlTextFromMarkdown(mdText) {
    var mdHtmlEl = generateHtmlFromMarkdown(mdText);
    var mdHtmlElHighlight = applyHighlightingToHtml(mdHtmlEl);
    return cleanCurlyBraces(mdHtmlElHighlight.outerHTML);
}
exports.getCleanHtmlTextFromMarkdown = getCleanHtmlTextFromMarkdown;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFya2Rvd24uc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm1hcmtkb3duLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLElBQVksVUFBVSxXQUFNLFlBQzVCLENBQUMsQ0FEdUM7QUFDeEMsSUFBWSxJQUFJLFdBQU0sY0FFdEIsQ0FBQyxDQUZtQztBQVNwQyxJQUFJLGdCQUFnQixHQUFHLElBQUksVUFBVSxDQUFDLE1BQU0sRUFBRSxDQUFBO0FBQzlDLElBQUksZ0JBQWdCLEdBQUcsSUFBSSxVQUFVLENBQUMsWUFBWSxFQUFFLENBQUE7QUFFcEQsa0NBQW1DLFlBQW9CO0lBQ3JELElBQUksTUFBTSxHQUFHLGdCQUFnQixDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsQ0FBQTtJQUNqRCxJQUFJLFlBQVksR0FBRyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUE7SUFFbEQsSUFBSSxHQUFHLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQTtJQUN2QyxHQUFHLENBQUMsU0FBUyxHQUFHLGVBQWUsQ0FBQTtJQUMvQixHQUFHLENBQUMsU0FBUyxHQUFHLFlBQVksQ0FBQTtJQUM1QixNQUFNLENBQUMsR0FBRyxDQUFBO0FBQ1osQ0FBQztBQWpCQyxnQ0FBd0IsNEJBaUJ6QjtBQUVELGlDQUFrQyxVQUF1QjtJQUN2RCxpQ0FBaUM7SUFDakMsSUFBSSxTQUFTLEdBQWdCLFVBQVUsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUE7SUFDdkQsS0FBSyxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxnQkFBZ0IsQ0FBQyxVQUFVLENBQUMsQ0FBQztTQUMvRCxPQUFPLENBQUMsVUFBQyxLQUFLO1FBQ2IsSUFBSSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQTtJQUM1QixDQUFDLENBQUMsQ0FBQTtJQUNKLE1BQU0sQ0FBQyxTQUFTLENBQUE7QUFDbEIsQ0FBQztBQTFCQywrQkFBdUIsMkJBMEJ4QjtBQUVELDBCQUEyQixRQUFRO0lBQ2pDLDJEQUEyRDtJQUMzRCxJQUFJLGFBQWEsR0FBRyxRQUFRLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxRQUFRLENBQUMsQ0FBQTtJQUNwRCxhQUFhLEdBQUcsYUFBYSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsUUFBUSxDQUFDLENBQUE7SUFDckQsTUFBTSxDQUFDLGFBQWEsQ0FBQTtBQUN0QixDQUFDO0FBaENDLHdCQUFnQixvQkFnQ2pCO0FBRUQsc0NBQXVDLE1BQU07SUFDM0MsSUFBSSxRQUFRLEdBQUcsd0JBQXdCLENBQUMsTUFBTSxDQUFDLENBQUE7SUFDL0MsSUFBSSxpQkFBaUIsR0FBRyx1QkFBdUIsQ0FBQyxRQUFRLENBQUMsQ0FBQTtJQUN6RCxNQUFNLENBQUMsZ0JBQWdCLENBQUMsaUJBQWlCLENBQUMsU0FBUyxDQUFDLENBQUE7QUFDdEQsQ0FBQztBQXJDQyxvQ0FBNEIsZ0NBcUM3QiJ9