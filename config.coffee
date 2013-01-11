exports.config =
  framework: "backbone"
  
  paths:
    public: "public"

  files:
    javascripts:
      defaultExtension: "coffee"
      joinTo:
        "scrpits/application.js":(path) -> true

    stylesheets:
      defaultExtension: "less"
      joinTo:
        "styles/application.css":(path) -> true

    templates:
      defaultExtensoin: "hbs"
      joinTo:
        "scripts/application.js"