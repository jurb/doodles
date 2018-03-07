in this iteration, we use the [ckmeans](http://simplestatistics.org/docs/#ckmeans) algorithm from the [simple-statistics](http://simplestatistics.org/) package to cluster our data. we pick the **minimum** value of each cluster as a break.  we then use these breaks with a [quantile](https://github.com/d3/d3-scale/blob/master/README.md#quantile-scales) scale to map values in the data to colors on the choropleth map.

this is method is my current favorite way to create breaks, or color thresholds, for a choropleth map.

🎩 [@Elijah_Meeks](https://twitter.com/Elijah_Meeks) for [the idea](https://d3js.slack.com/archives/help/p1474482980000316) to try the [ckmeans](http://simplestatistics.org/docs/#ckmeans) algorithm, as it seems to be the new hotness in the choropleth map breaks [scene](https://d3js.slack.com/)

a further 🙏 to [@recifs](https://twitter.com/recifs) for [talking through](https://d3js.slack.com/archives/help/p1474484449000325) where in the [ckmeans](http://simplestatistics.org/docs/#ckmeans) clusters its reasonable to pick breaks from.  
tl;dr `any number between max(class n) and min(class n+1) is OK`

do check out the other examples in this `world map` series:  

[world map 00 original example](https://bl.ocks.org/jeremycflin/b43ab253f3ae02dced07)  
[world map 01 fix tooltip value](https://bl.ocks.org/micahstubbs/01529b106c93f9b649c4006de5c79b80)  
[world map 02 d3 v4](https://bl.ocks.org/micahstubbs/8e15870eb432a21f0bc4d3d527b2d14f)  
[world map 03 es2015 + update code style](https://bl.ocks.org/micahstubbs/281d7b7a7e39a9b59cf80f1b8bd41a72)  
[world map 04 manual breaks + threshold scale](https://bl.ocks.org/micahstubbs/535e57a3a2954a129c13701fe61c681d)  
[world map 05 linear breaks + quantize scale](https://bl.ocks.org/micahstubbs/c14d8bda8e337da6c836a526ad1a7c5a)  
[world map 06 linear breaks + quantiles scale](https://bl.ocks.org/micahstubbs/536bc140537c1f90bf01f0bb9adc87b8)  
[world map 07 Jenks natural breaks](https://bl.ocks.org/micahstubbs/8fc2a6477f5d731dc97887a958f6826d)  
[world map 08 ckmeans cluster max breaks](https://bl.ocks.org/micahstubbs/9c2397c1da11c7b5d331653bcd475c1f)  
**world map 09 ckmeans cluster min breaks**  