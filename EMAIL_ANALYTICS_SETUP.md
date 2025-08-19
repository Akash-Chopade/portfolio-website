# 🔧 Configuration Management Setup Guide

## 📋 Overview

Your portfolio now uses a **centralized configuration system** that manages all API keys, service IDs, and external integrations in one place. This makes it easy to update credentials and enables/disable features.

## 🗂️ Configuration Files

### 1. **Main Config** (`src/config/config.js`)

- Central configuration for all external services
- Feature flags to enable/disable functionality
- Validation functions to check setup
- Environment-aware settings

### 2. **Environment Variables** (`.env`)

- Secure storage for API keys and secrets
- Different values for development/production
- Never committed to version control

### 3. **Content Management** (`src/data/content.js`)

- All text content and personal information
- Easy to update without touching code

## 🎛️ Configuration Panel

In **development mode**, you'll see a floating settings button (⚙️) in the bottom-right corner:

- **Green**: All configurations are valid
- **Red with number**: Configuration issues detected
- **Click**: Opens detailed configuration status

### Panel Features:

- ✅ **Status Overview**: See which services are configured
- 🔒 **Secret Masking**: Hide/show sensitive values
- ⚠️ **Error Detection**: Identifies missing configurations
- 🎚️ **Feature Flags**: Shows which features are enabled

## 📧 EmailJS Setup (for receiving contact form emails)

### Step 1: Create EmailJS Account

1. Go to [EmailJS.com](https://www.emailjs.com/) and create a free account
2. You get 200 free emails per month with the free plan

### Step 2: Create Email Service

1. In EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions
5. Copy the **Service ID** (you'll need this)

### Step 3: Create Email Template

1. Go to "Email Templates"
2. Click "Create New Template"
3. Use this template structure:

```
Subject: New Contact Form Submission - {{subject}}

From: {{from_name}} ({{from_email}})
Subject: {{subject}}

Message:
{{message}}

---
This email was sent from your portfolio contact form.
```

4. Copy the **Template ID** (you'll need this)

### Step 4: Get Public Key

1. Go to "Account" → "General"
2. Copy your **Public Key**

### Step 5: Update Configuration

**Option 1: Environment Variables (Recommended)**

1. Open `.env` file in your project root
2. Replace the placeholder values:

```env
VITE_EMAILJS_SERVICE_ID=service_xxxxxxx
VITE_EMAILJS_TEMPLATE_ID=template_xxxxxxx
VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
```

**Option 2: Direct Config Update**

1. Open `src/config/config.js`
2. Update the emailjs section:

```javascript
emailjs: {
  serviceId: "service_xxxxxxx",
  templateId: "template_xxxxxxx",
  publicKey: "your_public_key_here",
  toEmail: "your-email@gmail.com", // Your email address
}
```

✅ **Tip**: Use the configuration panel (⚙️ button in dev mode) to check your setup!

## 📊 Google Analytics Setup (for visitor tracking)

### Step 1: Create Google Analytics Account

1. Go to [Google Analytics](https://analytics.google.com/)
2. Create a new account or use existing one
3. Create a new property for your portfolio website

### Step 2: Get Measurement ID

1. In GA4, go to "Admin" → "Data Streams"
2. Create a web stream for your website
3. Copy the **Measurement ID** (format: G-XXXXXXXXXX)

### Step 3: Update Environment Variables

1. In your `.env` file, add:

```env
VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

## 🚀 What This Setup Provides

### Email Functionality:

- ✅ Real contact form that sends emails to your inbox
- ✅ Form validation and error handling
- ✅ Success/error feedback to users
- ✅ Professional email formatting

### Visitor Tracking:

- ✅ Page views and user sessions
- ✅ Geographic location of visitors
- ✅ Device and browser information
- ✅ Contact form submission tracking
- ✅ Social media link click tracking
- ✅ User engagement metrics

### Analytics Dashboard:

You can view visitor data in your Google Analytics dashboard:

- Real-time visitors
- Popular pages
- Traffic sources
- User behavior flow
- Conversion tracking

## 🔧 Testing

1. **Test Email Functionality:**

   - Fill out the contact form on your website
   - Check your email inbox for the message
   - Verify all form fields are included

2. **Test Analytics:**
   - Visit your website
   - Check Google Analytics Real-time reports
   - Verify page views are being tracked

## 🛡️ Security Notes

- Environment variables are not exposed in the built application
- EmailJS handles email sending securely
- Google Analytics data is anonymized by default
- No sensitive data is stored in the frontend code

## 📱 Mobile Compatibility

Both EmailJS and Google Analytics work seamlessly on:

- Desktop browsers
- Mobile browsers
- Progressive Web Apps (PWAs)

## 💰 Cost

- **EmailJS Free Tier:** 200 emails/month
- **Google Analytics:** Completely free
- **Upgrade Options:** Available if you need more email capacity

## 🆘 Troubleshooting

### Email Not Sending:

1. Check EmailJS service configuration
2. Verify environment variables are correct
3. Check browser console for errors
4. Ensure EmailJS service is active

### Analytics Not Tracking:

1. Verify Measurement ID is correct
2. Check if ad blockers are interfering
3. Wait 24-48 hours for data to appear
4. Check Google Analytics Real-time reports first

## 📞 Support

- EmailJS Documentation: https://www.emailjs.com/docs/
- Google Analytics Help: https://support.google.com/analytics/
