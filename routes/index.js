var express = require('express');
var router = express.Router();
var _ = require('lodash');
var config = require('../config/config.js');

var getBrand = (config) => {
  return {
    label: config.brand,
    url: '/'
  };
}

var getMenu = (config) => {
  return _.map(_.cloneDeep(config.pages), (page) => {
    if(page.category) {
      page.pages = getMenu(page);
      delete page.meta
      return page;
    } else return { label: page.title, url: page.meta.url };
  });
}

var getContent = (page) => {
  return _.omit(page, ['meta']);
}

var getAttractionsList = (config) => {
  return config.pages.find((page) => {
    return page.meta.id === 'attractions';
  }).pages.map((page) => {
    return {
      label: page.title,
      url: page.meta.url,
      img: page.img
    }
  });
}

var translate = (lang, arg) => {
  var langs = {
    en: require('../config/en.js'),
    dk: require('../config/dk.js')
  }
  if(arg instanceof Array) {
    _.map(arg, (item) => translate(lang, item));
  } else if(arg instanceof Object) {
    _.forIn(arg, (value, key) => {
      if(value instanceof Object) translate(lang, value);
      else if(typeof value === 'string' && value.slice(0, 4) === '#TR-') {
        arg[key] = langs[lang][value.slice(4, value.length)];
      }
    });
  }
}

var pageRoute = (page) => {
  router.get(page.meta.url, function(req, res, next) {
    var result = _.cloneDeep({
      brand: getBrand(config),
      menu : getMenu(config),
      content: getContent(page),
      attractions: getAttractionsList(config),
      footer: getAttractionsList(config)
    });
    translate(req.cookies.lang? req.cookies.lang : 'en', result);
    res.render(page.meta.template, result);
  });
};

var createRoutes = (config) => {
  _.forEach(config.pages, (page) => {
    if(page.category) createRoutes(page);
    else pageRoute(page);
  });
};

createRoutes(config);

router.post('/experience', function(req, res, next) {
  res.json(req.body);
});

module.exports = router;
