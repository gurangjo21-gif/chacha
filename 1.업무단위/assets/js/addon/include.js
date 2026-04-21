/**
 * Dynamic Include javascripts and stylesheets
 * @alias  Include
 * @version 0.6b
 * @param  {fileName} file name or file names string.
 * @license MIT Style license
 * @author firejune <to [at] firejune [dot] com>
 * 
 * @requires 
 *   - prototype <http://www.prototypejs.org>
 *   - scriptaculous <http://script.aculo.us>
 *
 * @usage
 * ex1) new Include('fileName.js');
 * ex2) new Include('http://site.net/fileName1.css, /javascripts/fileName2.js');
 * ex3) var FunctionName = function(element) {
 *        new Include('fileName.js', function() {
 *          new FunctionName(element);
 *        });
 *      };
 * 
 *
 *  edited by hsboy for using 'amz' extention
 */


// if debug console not found
if (typeof debug != 'function') debug = Prototype.emptyFunction;

var Include = Class.create();
Include.prototype = {
  initialize: function(files, options, onComplete) {
    // second argument has attributes a function
    if (typeof options == 'function') {
      onComplete = options;
      options = '';
    }

    // option extend
    options = Object.extend({
      duplicate : false,
      JSPath : '/js/', // javascripts default path
      CSSPath : '/css/', // stylesheets default path
      onComplete : typeof onComplete == 'function' ? onComplete : ''
    }, options || {});

    this.duplicate = options.duplicate;
    var element, elements = [];
    this.getArray(files).each(function(file) {
      file = this.getExpand(file); // file analysis

      // check bad filename
      if (!file.ext || !file.ext.match(/amz|js|css/)) {
        debug.error(file.name, ' load failed, bad filename');
        return;
      }

      switch (file.ext) {
        case 'js':
        case 'amz':
          file.path = !file.path? options.JSPath : file.path;
          element = document.createElement('script');
          element.type = 'text/javascript';
          // add url rewrite by hsboy
          element.src = file.path + file.name +  '?' + Math.random(0, 1000) + '=' + Math.random(0, 1000);
          break;
        case 'css':
          file.path = !file.path? options.CSSPath : file.path;
          element = document.createElement('link');
          element.rel = 'stylesheet';  
          element.type = 'text/css';
          element.href = file.path + file.name ;
          element.media = 'screen';
          break;
      }

      // check loaded file
      if (!this.isLoaded(element)) {
        // push file in header
        document.getElementsByTagName('head')[0].appendChild(element);
        debug(file.name, ' load accomplish');
      } else debug.warn(file.name, ' load failed, duplicate use in this page');

      elements.push(element);

    }.bind(this));

    try {
      // observe onComplete event
      //alert( element.tagName );
      if (element.tagName == 'SCRIPT' &&
        this.isLoaded(element) && typeof options.onComplete == 'function') {
        if (Prototype.Browser.WebKit) {
          var timer = setInterval(function() {
            if (/loaded|complete/.test(document.readyState)) {
              clearInterval(timer);
              options.onComplete();
            }
          }, 10);
        } else if (Prototype.Browser.IE6 && elements.length > 1) {
          var checkIndex = 0;
          var checkElements = function() {
            checkIndex++;
            if (checkIndex == elements.length) setTimeout(options.onComplete, 120);
          }
          elements.each(function(el) {
            el.onreadystatechange = function() {
              if (this.readyState == "complete" || this.readyState == "loaded") checkElements();
            };
          });
        } else if (Prototype.Browser.IE) {
          element.onreadystatechange = function() {
            if (this.readyState == "complete" || this.readyState == "loaded") options.onComplete();
          };
        } else if (Prototype.Browser.Opera) {
          if (element.readyState == 'complete' || element.readyState == 'loaded') options.onComplete();
        } else element.onload = options.onComplete;
        element = null; // fix memoryleak for IE
      }
    } catch(e) {
      debug.error(file.name, e.name + ': ' + e.message);
    }
  },
  // analysis file utility
  getExpand: function(src) {
    var fileName, filePath, fileExt; 
    if (src.match('/')) {
      fileName = src.split('/')[src.split('/').length - 1];
      filePath = src.split(fileName)[0];
    } else fileName = src;
    fileExt = fileName.match(/\./)? fileName.split('?')[0].split('.')[fileName.split('?')[0].split('.').length - 1] : '';
    return { name: fileName, ext: fileExt, path: filePath };
  },
  // change array type
  getArray: function(files) {
    var array = [];
    files.split(',').each(function(file) {
      array.push(file.strip());
    }.bind(this));
    return array;
  },
  // check duplicate use in this page
  isLoaded: function(element) {
    var isLoaded = false;
    if (this.duplicate) return isLoaded;
    var tags = element.tagName;
    var src = tags == 'SCRIPT'? element.src : element.href;
    try {
      $$(tags).each(function(tag) {
          tag = tags == 'SCRIPT'? tag.src : tag.href; 
          if (tag.match(src)) {
            isLoaded = true;
            throw $break;
          }
      });
    } catch(e) {
      return isLoaded;
    }
    return isLoaded;
  }
};

Object.extend(Include, {
  state: function(tagName) {
    if (!tagName) tagName = ['SCRIPT', 'LINK'];
    else tagName = [tagName];
    tagName.each(function(tags, i) {
      tagName[i] = tagName[i] + ' tag(' + $$(tags).length + ')';
      $$(tags).each(function(tag) {
        tagName.push(tag);
      });
    });
    return tagName;
  }
});

Include.all = Include.state();
Include.javascripts = Include.state('SCRIPT');
Include.stylesheets = Include.state('LINK');

/**
 * End of file.
 */