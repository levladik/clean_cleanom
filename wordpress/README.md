# WordPress Headless CMS Setup

This document provides instructions for setting up WordPress as a headless CMS for the cleaning service website.

## Requirements

- WordPress installation (version 5.9 or higher)
- PHP 7.4 or higher
- MySQL 5.7 or higher

## Required Plugins

1. **WPGraphQL** (or REST API extensions)
   - Purpose: Exposes WordPress data via GraphQL API
   - Installation: Download from [https://wordpress.org/plugins/wp-graphql/](https://wordpress.org/plugins/wp-graphql/)

2. **Advanced Custom Fields (ACF)**
   - Purpose: Create custom fields for structured content
   - Installation: Download from [https://wordpress.org/plugins/advanced-custom-fields/](https://wordpress.org/plugins/advanced-custom-fields/)
   - Note: For GraphQL integration, also install ACF to WPGraphQL extension

3. **Custom Post Type UI**
   - Purpose: Create custom post types for services, testimonials, etc.
   - Installation: Download from [https://wordpress.org/plugins/custom-post-type-ui/](https://wordpress.org/plugins/custom-post-type-ui/)

## Content Structure Setup

### Custom Post Types

1. **Services**
   - Fields:
     - Title
     - Description
     - Image
     - Base Price
     - Price per Square Foot/Meter
     - Available Add-ons
     - Frequency Options

2. **Testimonials**
   - Fields:
     - Client Name
     - Client Image
     - Rating
     - Testimonial Text
     - Service Used

3. **FAQ Items**
   - Fields:
     - Question
     - Answer
     - Category

4. **Gallery Items**
   - Fields:
     - Title
     - Before Image
     - After Image
     - Description
     - Service Type

### Options Page

Create an Options Page for global settings:
- Company Information
- Contact Details
- Social Media Links
- Calculator Settings

## API Configuration

### GraphQL API

If using WPGraphQL:
1. Install and activate WPGraphQL plugin
2. Configure access control settings
3. Test API endpoint at `/graphql`

### REST API

If using REST API:
1. Ensure REST API is enabled
2. Consider using JWT authentication for secure access
3. Test API endpoint at `/wp-json/wp/v2/`

## Security Considerations

1. Implement proper authentication for API access
2. Use environment variables for API keys and endpoints
3. Configure CORS settings to allow requests from your Next.js frontend
4. Regularly update WordPress core and plugins

## Deployment Recommendations

1. Host WordPress on a separate server from your Next.js frontend
2. Use a managed WordPress hosting service for better performance and security
3. Set up a caching layer to improve API response times
4. Configure a CDN for media files

## Next Steps

After setting up WordPress:
1. Create sample content for each post type
2. Test API endpoints to ensure data is accessible
3. Configure the Next.js frontend to fetch data from WordPress
