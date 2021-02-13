import elasticlunr from "elasticlunr";
import "elasticlunr-search-widget";

const idx = elasticlunr(function () {
  this.addField("title");
  this.addField("summary");
  this.addField("url");
  this.addField("tags");
});
