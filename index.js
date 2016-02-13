(function() {
  require("sdk/page-mod").PageMod({
    include: "*",
    contentScriptFile: "./unprefix.js",
    onAttach: function (worker) {
      worker.port.emit(
        "regexFromPrefs",
        require('sdk/simple-prefs').prefs['prefixRegex']
      )
    }
  });
})();
