# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# Surprise Beauty Parlour

A modern, secure web application for a beauty parlour that allows customers to book appointments and view services.

## 🔒 Security Features

- Input Sanitization using DOMPurify
- reCAPTCHA v2 integration for form protection
- Secure environment variable handling
- XSS protection
- CSRF protection
- Content Security Policy implementation
- Secure HTTP headers

## 🚀 Quick Start

### Prerequisites

- Node.js (v18 or higher)
- npm (v9 or higher)
- A valid reCAPTCHA site key
- Cloudinary account for image management

### Environment Variables

Create a `.env` file in the root directory with the following variables:

```env
VITE_RECAPTCHA_SITE_KEY=your_recaptcha_site_key
VITE_CLOUDINARY_NAME=your_cloudinary_cloud_name
VITE_BACKEND_URL=your_backend_api_url
```

⚠️ **Security Note**: Never commit the `.env` file to version control. Make sure it's listed in `.gitignore`.

### Installation

1. Clone the repository:

```bash
git clone [repository-url]
cd surprise
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. For production build:

```bash
npm run build
```

## 🛡️ Security Best Practices

### Frontend Security

1. **Input Validation**

   - All user inputs are validated both client-side and server-side
   - Implemented DOMPurify for sanitizing user inputs
   - Form validation with proper error handling

2. **reCAPTCHA Integration**

   - Protects against automated form submissions
   - Implements proper error handling and accessibility
   - Includes expiry and error callbacks

3. **Content Security**

   - Implements strict CSP headers
   - Prevents XSS attacks
   - Secure resource loading

4. **API Security**
   - All API calls use HTTPS
   - Implements proper error handling
   - Rate limiting on form submissions

### Data Protection

1. **User Data**

   - No sensitive data stored in localStorage/sessionStorage
   - Form data is sanitized before transmission
   - Secure handling of user inputs

2. **Image Security**
   - Cloudinary secure image handling
   - Proper access control for media assets
   - Secure image transformation and delivery

## 🔧 Configuration

### Content Security Policy

Add the following to your web server configuration:

```nginx
add_header Content-Security-Policy "
    default-src 'self';
    script-src 'self' https://www.google.com/recaptcha/ https://www.gstatic.com/;
    frame-src 'self' https://www.google.com/;
    style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
    img-src 'self' data: https://res.cloudinary.com;
    font-src 'self' https://fonts.gstatic.com;
";
```

### Secure Headers

Implement the following security headers:

```nginx
add_header X-Frame-Options "SAMEORIGIN";
add_header X-XSS-Protection "1; mode=block";
add_header X-Content-Type-Options "nosniff";
add_header Referrer-Policy "strict-origin-when-cross-origin";
```

## 🚫 Security Checklist

Before deploying to production:

- [ ] Update all dependencies to latest secure versions
- [ ] Enable HTTPS only
- [ ] Configure proper CORS settings
- [ ] Set up rate limiting
- [ ] Implement proper error logging
- [ ] Configure security headers
- [ ] Test reCAPTCHA implementation
- [ ] Validate form inputs
- [ ] Secure API endpoints
- [ ] Review Content Security Policy
- [ ] Check for exposed sensitive data
- [ ] Implement proper session handling
- [ ] Set up monitoring and alerts

## 🔄 Regular Security Maintenance

1. **Dependencies**

   ```bash
   # Check for vulnerable dependencies
   npm audit

   # Update dependencies
   npm update
   ```

2. **Security Headers Check**

   - Use [Security Headers](https://securityheaders.com) to verify configuration
   - Regular testing of CSP implementation

3. **Monitoring**
   - Set up error monitoring
   - Configure security alerts
   - Regular security scans

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## ⚠️ Security Reporting

To report security vulnerabilities, please email [security@yourdomain.com](mailto:security@yourdomain.com) with:

- Description of the vulnerability
- Steps to reproduce
- Potential impact
- Suggested fix (if any)

Do not create public issues for security vulnerabilities.

## 🤝 Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct and the process for submitting pull requests.

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a new Pull Request

## 📚 Documentation

For detailed documentation, please visit the [docs](docs/) directory.

## 🙏 Acknowledgments

- React.js team for the framework
- Cloudinary for image management
- Google reCAPTCHA team
- All contributors to this project
