/**
 * Extract ngClass configuration and return array of all classes found
 * @param {string} value
 */
function extractClassesFromNgClass(value) {
    var found = [], rxp = /{([^}]+)}/g, curMatch;
    while ((curMatch = rxp.exec(value))) {
        found.push(curMatch[1].replace(/\n/g, "").replace(/ /g, ""));
    }
    var classes = [];
    if (found.length > 0) {
        classes = found[0].split(",").map(function (e) { return e.split(":")[0]; });
    }
    return classes;
}
//# sourceMappingURL=extractClassesFromNgClass.js.map