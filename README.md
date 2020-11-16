# performance
前端性能优化


## [RAIL测量模型](https://web.dev/rail/)
RAIL
- Response  在 100 毫秒以内响应（处理事件应在50ms内完成）
- Animation 理论上是16ms生成一帧（在 10 毫秒内生成一帧）
- Idle 最大程度增加空闲时间
- Load 在1000ms以内呈现内容

## 性能测试工具
- Chrome DevTools开发调试、性能评测
- Lighthouse 网站整体质量评估
- WebPageTest 多测试地点、全面性能报告
  - waterfall char 请求瀑布图
  - first view 首次访问
  - repeat view 二次访问

### lighthouse的使用
```javascript
yarn global add lighthouse
lighthouse + url
```
会得到一个report.html文件。文件中包含各种性能分析。

