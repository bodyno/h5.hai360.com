module.exports = function () {
  //var cdnRoot = require('../config').cdnDomain["prod"] || '';
  var cdnRoot='';
  return {
    // look under this files
    css: '<%=yo.dist%>/static/**/*.css',
    html: '<%=yo.dist%>/**/*.html',
    js: '<%=yo.dist%>/static/**/*.js',
    options: {
      // 配置cdn
      patterns: require('../usemin-pattern').pattern(cdnRoot)
    }
  };
};
