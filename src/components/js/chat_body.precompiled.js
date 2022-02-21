(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['chat_body.hbs'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"chat_body__header\">\n     <div class=\"chat_body__avatar\">\n         <div class=\"chat_body__avatar_img\"></div>\n         <div class=\"chat_body__avatar_name text-m text-semi\">"
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"name") || (depth0 != null ? lookupProperty(depth0,"name") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"name","hash":{},"data":data,"loc":{"start":{"line":4,"column":62},"end":{"line":4,"column":70}}}) : helper)))
    + "</div>\n     </div>\n    <button class=\"chat_body__menu\"></button>\n</div>\n<div class=\"chat_body__content\"></div>\n<div class=\"chat_body__footer\">\n    <button class=\"chat_body__attach\"></button>\n    <input class=\"chat_body__message text-m\" type=\"text\" name=\"message\" placeholder=\"Сообщение\" onfocus=\"this.placeholder=''\" onblur=\"this.placeholder='Сообщение'\">\n    <button class=\"chat_body__send\"></button>\n</div>";
},"useData":true});
})();