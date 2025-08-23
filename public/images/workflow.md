# Image Optimization Workflow

## 🚀 Quick Start

### 1. Install Dependencies
```bash
cd public/images
npm install
```

### 2. Run Optimization
```bash
npm run optimize
```

## 📋 Workflow Steps

### **Step 1: Prepare Images**
- Place original images in `public/images/`
- Ensure images are high resolution (minimum 1024x1024)
- Use descriptive filenames (e.g., `dr-jan-duffy-portrait.jpg`)

### **Step 2: Run Optimization**
```bash
npm run optimize
```

### **Step 3: Review Results**
- Check `public/images/optimized/` directory
- Verify file sizes are reduced
- Test image quality

### **Step 4: Update Components**
- Update component `src` paths to use optimized images
- Implement responsive images with `srcset`
- Add lazy loading for non-critical images

## 🎯 Optimization Targets

| Format | Quality | Target Size | Use Case |
|--------|---------|-------------|----------|
| JPG    | 85%     | <200KB     | Photos, complex images |
| PNG    | 90%     | <300KB     | Graphics, transparency |
| WebP   | 85%     | <150KB     | Modern browsers |

## 📱 Responsive Image Strategy

### **Breakpoint Mapping**
- **Mobile (xs):** 320px - Small screens
- **Tablet (sm):** 576px - Medium screens  
- **Desktop (md):** 768px - Large screens
- **Large (lg):** 992px - Extra large screens

### **Implementation Example**
```jsx
<Image
  src="/images/dr-jan-duffy.jpg"
  srcSet={`
    /images/dr-jan-duffy-xs.jpg 320w,
    /images/dr-jan-duffy-sm.jpg 576w,
    /images/dr-jan-duffy-md.jpg 768w,
    /images/dr-jan-duffy-lg.jpg 992w
  `}
  sizes="(max-width: 576px) 320px, (max-width: 768px) 576px, (max-width: 992px) 768px, 992px"
  alt="Dr. Jan Duffy"
  width={256}
  height={256}
/>
```

## 🔧 Advanced Configuration

### **Custom Quality Settings**
Edit `image-config.json` to adjust:
- Compression levels
- Target file sizes
- Responsive breakpoints

### **Format Conversion**
- Convert PNG to WebP for better compression
- Maintain JPG fallback for older browsers
- Use progressive JPG for better perceived performance

## 📊 Performance Monitoring

### **Key Metrics**
- **File Size Reduction:** Target 60-80% reduction
- **Loading Speed:** Measure with Lighthouse
- **Core Web Vitals:** Optimize LCP and CLS

### **Tools**
- Chrome DevTools Network tab
- Lighthouse Performance audit
- WebPageTest for detailed analysis

## 🚨 Troubleshooting

### **Common Issues**
1. **Sharp Installation Failed:** Use `npm install --platform=linux --arch=x64 sharp`
2. **Memory Errors:** Process images in smaller batches
3. **Quality Too Low:** Increase quality settings in config

### **Support**
- Check Sharp documentation: https://sharp.pixelplumbing.com/
- Review Next.js Image optimization: https://nextjs.org/docs/basic-features/image-optimization
