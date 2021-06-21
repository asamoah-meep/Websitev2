const withTM = require('next-transpile-modules')(['d3-selection', 'd3-scale', 'd3-array', 'd3-time', 'internmap'
,'d3-interpolate', 'd3-color', 'd3-format']);
module.exports =  withTM({
    webpack5: false
});