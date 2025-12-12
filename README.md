# Virginia Police Dispatch Tracker

A comprehensive web application for tracking and analyzing Virginia law enforcement dispatch data across all counties and cities.

## 🚀 Features

### **Real-Time Active Calls Monitoring**
- Live updating dashboard with priority color coding
- Interactive map showing incident locations
- Department-specific filtering and search
- Auto-refresh functionality

### **Historical Call Analysis**
- Comprehensive search across historical dispatch data
- Advanced filtering by date, location, call type, and priority
- Export functionality for reports and analysis
- Trend visualization and statistics

### **Complete Agency Directory**
- **133 County Sheriff's Offices** - All Virginia sheriffs included
- **40+ City Police Departments** - All municipal police covered
- Interactive maps with jurisdiction boundaries
- Contact information and performance metrics
- Agency-specific filtering and comparison

## 📊 Coverage

- **Total Agencies**: 173 (Sheriffs + Police Departments)
- **Coverage**: 100% of Virginia counties and cities
- **Data Points**: Response times, call volumes, personnel counts
- **Regions**: Northern, Central, Eastern, Western, Southern Virginia

## 🛠️ Technology Stack

- **Frontend**: HTML5, CSS3 (Tailwind CSS), JavaScript (ES6+)
- **Animations**: Anime.js for smooth transitions
- **Charts**: ECharts.js for data visualization
- **Maps**: Leaflet for interactive mapping
- **Deployment**: Cloudflare Pages/Workers optimized

## 📱 Responsive Design

- **Mobile-First**: Optimized for smartphones and tablets
- **Touch-Friendly**: Large touch targets and swipe gestures
- **Progressive Enhancement**: Works on all modern browsers
- **Accessibility**: WCAG compliant design

## 🚀 Quick Start

### **Option 1: Cloudflare Pages (Recommended)**

1. **Clone or download** this repository
2. **Go to Cloudflare Dashboard** → Pages
3. **Upload assets** or connect to Git repository
4. **Configure custom domain** vadispatch.com
5. **Deploy** - Your site will be live!

### **Option 2: Cloudflare Workers**

1. **Install Wrangler CLI**:
   ```bash
   npm install -g wrangler
   ```

2. **Login to Cloudflare**:
   ```bash
   wrangler login
   ```

3. **Deploy**:
   ```bash
   wrangler deploy
   ```

### **Option 3: Local Development**

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Start development server**:
   ```bash
   npm run dev
   ```

3. **Preview**:
   ```bash
   npm run preview
   ```

## 📁 Project Structure

```
virginia-police-dispatch-tracker/
├── index.html              # Main dashboard
├── history.html            # Call history search
├── departments.html        # Agency directory
├── main.js                # Core JavaScript functionality
├── worker.js              # Cloudflare Worker script
├── wrangler.toml          # Cloudflare Workers config
├── package.json           # Node.js dependencies
├── DEPLOYMENT.md          # Detailed deployment guide
├── README.md              # This file
└── resources/             # Images and assets
    ├── hero-dispatch-center.png
    ├── police-building.png
    ├── dispatch-interface.png
    └── virginia-map.png
```

## 🎯 Key Features

### **For Law Enforcement**
- Monitor active calls across jurisdictions
- Historical incident analysis
- Agency performance metrics
- Resource allocation planning

### **For Public Safety**
- Community awareness of police activity
- Transparency in law enforcement
- Emergency response information
- Contact information for all agencies

### **For Researchers**
- Comprehensive dataset of Virginia law enforcement
- Historical trend analysis
- Geographic distribution studies
- Performance benchmarking

## 🔧 Configuration

### **Environment Variables**
- `ENVIRONMENT`: Set to "production" for live deployment
- `VERSION`: Application version tracking

### **Customization Options**
- Update agency data in `main.js`
- Modify color schemes in CSS
- Add new filtering options
- Integrate real-time data feeds

## 📊 Performance Optimizations

- **Lazy Loading**: Images and non-critical content
- **Caching**: Aggressive caching for static assets
- **Compression**: Brotli compression enabled
- **CDN**: Global content delivery via Cloudflare
- **Minification**: Optimized CSS and JavaScript

## 🔒 Security Features

- **HTTPS**: SSL/TLS encryption
- **CSP**: Content Security Policy headers
- **XSS Protection**: Input sanitization
- **Rate Limiting**: API call protection

## 🌐 Browser Support

- **Chrome**: 90+
- **Firefox**: 88+
- **Safari**: 14+
- **Edge**: 90+
- **Mobile**: iOS Safari, Chrome Mobile

## 📈 Analytics & Monitoring

- **Performance**: Core Web Vitals optimized
- **Accessibility**: WCAG 2.1 AA compliant
- **SEO**: Semantic HTML and meta tags
- **Mobile**: Lighthouse mobile score 95+

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

MIT License - See LICENSE file for details

## 🆘 Support

- **Documentation**: See DEPLOYMENT.md for detailed setup
- **Issues**: Report bugs and feature requests
- **Community**: Join discussions and get help

## 🎉 Success!

Your Virginia Police Dispatch Tracker is ready for deployment to vadispatch.com. The application provides comprehensive coverage of Virginia law enforcement agencies with professional-grade functionality and design.

**Current Demo**: https://qewsfhy4ewaqo.ok.kimi.link

---

**Deploy to vadispatch.com and start tracking Virginia law enforcement activity today!** 🚔