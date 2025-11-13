# Elders & Deacons Photos Guide

## How to Add Photos

The elders-deacons page is now set up to display photos. Here's how to add them:

### Folder Location
Place all photos in: `assets/images/elders-deacons/`

### Photo Naming Convention

**For Elders:**
- `elder1.jpg` - First Elder
- `elder2.jpg` - Second Elder
- `elder3.jpg` - Third Elder
- `elder4.jpg` - Fourth Elder

**For Deacons:**
- `deacon1.jpg` - First Deacon
- `deacon2.jpg` - Second Deacon
- `deacon3.jpg` - Third Deacon
- `deacon4.jpg` - Fourth Deacon
- `deacon5.jpg` - Fifth Deacon
- `deacon6.jpg` - Sixth Deacon

### Supported Image Formats
- `.jpg` or `.jpeg`
- `.png`
- `.webp`

### Photo Requirements
- **Recommended size:** 400x400 pixels or larger (square format works best)
- **Aspect ratio:** Square (1:1) is ideal for circular avatars
- **File size:** Keep under 500KB for faster loading

### How It Works
- If a photo exists at the specified path, it will be displayed
- If a photo doesn't exist or fails to load, the placeholder icon (👤) will automatically appear
- Photos are automatically cropped to fit the circular avatar frame

### Customizing Names and Descriptions
Edit `elders-deacons.html` to update:
- Names: Change "Elder Name" and "Deacon Name" to actual names
- Descriptions: Update the description text for each person

### Example
If you have a photo named `bro_jacob.jpg`, you can:
1. Rename it to `elder1.jpg` (or the appropriate number)
2. Place it in `assets/images/elders-deacons/`
3. Update the corresponding name in `elders-deacons.html`

### Adding More Leaders
If you have more than 4 elders or 6 deacons:
1. Copy an existing leader-card div
2. Update the image path (e.g., `elder5.jpg`, `deacon7.jpg`)
3. Update the name and description
4. Add the photo to the `assets/images/elders-deacons/` folder

