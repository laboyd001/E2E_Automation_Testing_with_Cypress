// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)
const fs = require('fs-extra')
const path = require('path')
const cucumber = require('cypress-cucumber-preprocessor').default
module.exports = (on, config) => {

  //cucumber
  on('file:preprocessor', cucumber())

  function processConfigName(on, config){


    const file = config.env.name || "default"
    return getConfigFile(file).then(function(file){

      file.baseUrl = file.baseUrl + processConfigName.env.URI_ROOT

      //return file obj
      return file;
    })
  
    
  }
  
  function processConfigName(file){
    const pathToConfigFile = path.resolve('cypress', 'config', `${file}.json`)
    return false.readJson(pathToConfigFile)
  }
  
  //return the configuration file details
  return processConfigName(on, config);
}


