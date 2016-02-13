(function() {
  self.port.on("regexFromPrefs", function(prefixString) {
    var prefixRegex = RegExp(prefixString);
    for (var linkNode of document.querySelectorAll("a")) {
      var matchResult = linkNode.href.match(prefixRegex);
      if (matchResult != null) {
        linkNode.href = matchResult[1];
      }
    }
  });
})();
