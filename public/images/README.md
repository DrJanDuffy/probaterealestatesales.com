# Images Directory

## 🖼️ Image Management & Optimization

This directory contains all images for the Dr. Jan Duffy website, along with optimization tools to ensure fast loading and excellent performance.

## 📸 Dr. Jan Duffy Photo

**File Name:** `dr-jan-duffy.jpg`

**Description:** Professional portrait of Dr. Jan Duffy for use throughout the website

**Requirements:**
- Professional, waist-up portrait
- High resolution (minimum 512x512 pixels, recommended 1024x1024)
- Professional attire (royal blue blazer, black turtleneck)
- Friendly, approachable expression
- Plain, light background
- JPG format

**Usage:** This photo is used in multiple components:
- Hero section (circular, 192x192)
- WhyChooseUs component (rounded rectangle, 256x256)
- Testimonials component (rounded rectangle, 224x224)
- ContactSection component (rounded rectangle, 240x240)

## 🚀 Quick Optimization

### **Windows Users:**
```bash
cd public/images
optimize.bat
```

### **Mac/Linux Users:**
```bash
cd public/images
chmod +x optimize.sh
./optimize.sh
```

### **Manual Setup:**
```bash
cd public/images
npm install
npm run optimize
```

## 📁 Directory Structure

```
public/images/
├── README.md                 # This file
├── package.json             # Optimization dependencies
├── optimize-images.js       # Main optimization script
├── image-config.json        # Optimization settings
├── workflow.md              # Detailed workflow guide
├── optimize.bat             # Windows batch script
├── optimize.sh              # Unix/Linux shell script
├── .gitattributes          # Git file handling
├── [your-images].jpg       # Original images
└── optimized/               # Generated optimized images
    ├── optimized-[image].jpg
    ├── [image]-xs.jpg      # 320px
    ├── [image]-sm.jpg      # 576px
    ├── [image]-md.jpg      # 768px
    └── [image]-lg.jpg      # 992px
```

## 🎯 Optimization Features

- **Automatic Compression:** Reduces file sizes by 60-80%
- **Responsive Images:** Creates multiple sizes for different devices
- **Format Optimization:** Supports JPG, PNG, and WebP
- **Quality Control:** Maintains visual quality while reducing size
- **Batch Processing:** Optimizes all images at once

## 📱 Responsive Image Implementation

After optimization, update your components to use responsive images:

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

## 🔧 Configuration

Edit `image-config.json` to customize:
- Compression quality levels
- Target file sizes
- Responsive breakpoints
- Supported formats

## 📊 Performance Benefits

- **Faster Loading:** Reduced file sizes improve page speed
- **Better SEO:** Faster sites rank higher in search results
- **Improved UX:** Users see content faster
- **Mobile Optimization:** Responsive images for all devices
- **Bandwidth Savings:** Reduced data usage for visitors

## 🚨 Troubleshooting

- **Sharp Installation Issues:** Use `npm install --platform=linux --arch=x64 sharp`
- **Memory Errors:** Process images in smaller batches
- **Quality Concerns:** Adjust quality settings in `image-config.json`

## 📚 Additional Resources

- [Workflow Guide](workflow.md) - Detailed optimization steps
- [Image Configuration](image-config.json) - Customization options
- [Next.js Image Optimization](https://nextjs.org/docs/basic-features/image-optimization)
- [Sharp Documentation](https://sharp.pixelplumbing.com/)
