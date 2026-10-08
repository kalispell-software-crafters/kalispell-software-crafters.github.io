# Performance Analysis Skill

This skill is used to analyze and improve the performance of the Kalispell Software Crafters website. It focuses on Core Web Vitals, asset optimization, and runtime efficiency.

## Scope
- **Frontend Performance**: Analyzing LCP (Largest Contentful Paint), FID (First Input Delay), and CLS (Cumulative Layout Shift).
- **Asset Optimization**: Checking image sizes, CSS/JS minification, and font loading strategies.
- **Runtime Analysis**: Identifying bottlenecks in `index.js` and optimizing DOM manipulations.
- **Network Efficiency**: Analyzing request counts and payload sizes.

## Workflow
1. **Audit**: Use browser developer tools (Lighthouse, Performance tab) to establish a baseline.
2. **Analyze**: Identify the largest assets and slowest execution paths.
3. **Optimize**: 
    - Implement lazy loading for images.
    - Optimize SCSS compilation and CSS delivery.
    - Refactor JavaScript for better execution speed.
4. **Verify**: Re-run audits to quantify improvements.

## Tools & Techniques
- **Lighthouse**: For overall performance scoring and suggestions.
- **Chrome DevTools Performance Tab**: For flame chart analysis of JS execution.
- **Network Tab**: For analyzing resource loading sequences.
- **PageSpeed Insights**: For real-world user experience data.

## Guidelines
- Prioritize "above-the-fold" content loading.
- Minimize third-party script impact.
- Ensure images are served in modern formats (WebP) and appropriately sized.
