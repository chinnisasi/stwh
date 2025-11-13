# STWH 60th Anniversary Website

A modern, responsive static website for Shalem Telugu Worship Home's 60th Anniversary celebration.

## Features

- **Responsive Design**: Works seamlessly on mobile, tablet, and desktop devices
- **Modern UI**: Clean, contemporary design with smooth animations
- **Photo Gallery**: Filterable gallery with sections for different ministries
- **Testimonials**: Dedicated page for sharing stories of God's faithfulness
- **Contact Form**: Easy-to-use contact form for inquiries
- **Church History**: Timeline showcasing 60 years of ministry

## Pages

1. **Home (index.html)**: Main landing page with church history and overview
2. **Photos (photos.html)**: Photo gallery with filtering by ministry type
3. **Testimonials (testimonials.html)**: Stories from church members
4. **Contact Us (contact.html)**: Contact information and inquiry form

## Photo Gallery Categories

- Youth Ministry
- Kids Ministry
- Sister Ministry
- Fellowship
- Special Meeting
- Ministry & Fellowship

## Adding Photos

To add photos to the gallery:

1. Place your images in the appropriate folder:
   - `assets/images/youth/` - Youth Ministry photos
   - `assets/images/kids/` - Kids Ministry photos
   - `assets/images/sister/` - Sister Ministry photos
   - `assets/images/fellowship/` - Fellowship photos
   - `assets/images/special/` - Special Meeting photos
   - `assets/images/ministry/` - Ministry & Fellowship photos

2. Update `photos.html` to replace the placeholder divs with actual images:
   ```html
   <div class="gallery-item" data-category="youth">
       <div class="gallery-item-inner">
           <img src="assets/images/youth/your-photo.jpg" alt="Youth Ministry">
           <div class="gallery-overlay">
               <span class="gallery-category">Youth Ministry</span>
           </div>
       </div>
   </div>
   ```

## Customization

### Colors
Edit the CSS variables in `styles.css`:
```css
:root {
    --primary-color: #2c5f8d;
    --secondary-color: #d4a574;
    /* ... other colors ... */
}
```

### Contact Information
Update the contact details in `contact.html`:
- Address
- Phone numbers
- Email addresses
- Service times

### Church History
Modify the timeline content in `index.html` to reflect your actual church history.

### Testimonials
Add or edit testimonials in `testimonials.html`.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## File Structure

```
STWH/
├── index.html          # Home page
├── photos.html         # Photo gallery
├── testimonials.html   # Testimonials page
├── contact.html        # Contact page
├── styles.css          # Main stylesheet
├── script.js           # JavaScript functionality
├── README.md          # This file
└── assets/
    └── images/
        ├── youth/
        ├── kids/
        ├── sister/
        ├── fellowship/
        ├── special/
        └── ministry/
```

## Usage

Simply open `index.html` in a web browser to view the website. No build process or server required - it's a fully static website.

For production deployment, you can:
- Upload all files to any web hosting service
- Use GitHub Pages
- Deploy to Netlify, Vercel, or similar platforms

## Notes

- The contact form currently shows a success message but doesn't actually send emails. You'll need to integrate with a backend service or email service provider for actual form submission.
- Photo placeholders are currently shown. Replace them with actual images as described above.
- Update all placeholder text with your actual church information.

## License

© 2024 Shalem Telugu Worship Home. All rights reserved.

