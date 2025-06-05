# Contributing to Surprise Beauty Parlour

Thank you for your interest in contributing to our project! We take security seriously and ask all contributors to follow these guidelines.

## Security Guidelines

### 1. Code Contributions

- Never commit sensitive information (API keys, credentials, etc.)
- Always sanitize user inputs
- Use prepared statements for database queries
- Implement proper error handling
- Follow the principle of least privilege
- Use secure dependencies and keep them updated

### 2. Development Environment

- Use `.env` files for environment variables
- Never commit `.env` files
- Keep your development environment updated
- Use secure connections (HTTPS) for API calls

### 3. Pull Request Process

1. Ensure any install or build dependencies are removed
2. Update the README.md with details of changes if applicable
3. Run security checks before submitting:
   ```bash
   npm audit
   npm run lint
   npm test
   ```
4. Include security considerations in your PR description

### 4. Security Best Practices

#### Frontend

- Implement proper input validation
- Use Content Security Policy (CSP)
- Implement proper CORS settings
- Use secure session management
- Implement proper authentication/authorization

#### API Endpoints

- Validate all inputs
- Implement rate limiting
- Use proper HTTP methods
- Return appropriate status codes
- Handle errors securely

### 5. Reporting Security Issues

- Do not create public issues for security vulnerabilities
- Email security concerns to [security@yourdomain.com](mailto:security@yourdomain.com)
- Include detailed information about the vulnerability
- Wait for confirmation before making any public disclosures

## Development Process

1. Fork the Repository
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Run Security Checks
5. Push to the Branch (`git push origin feature/AmazingFeature`)
6. Open a Pull Request

## Code Review Process

All submissions require review. We use GitHub pull requests for this purpose.

1. Create a pull request
2. Address any automated check failures
3. Wait for review from maintainers
4. Make requested changes if any
5. Once approved, your code will be merged

## Security Checklist

Before submitting your PR, ensure:

- [ ] No sensitive data in code
- [ ] All inputs are validated
- [ ] Error handling is implemented
- [ ] Dependencies are up to date
- [ ] Security tests pass
- [ ] No new vulnerabilities introduced
- [ ] Documentation is updated

## Code Style

- Follow existing code style
- Use meaningful variable names
- Comment complex logic
- Keep functions small and focused
- Use TypeScript where possible
- Follow React best practices

## Testing

- Write unit tests for new features
- Include security tests where relevant
- Test edge cases
- Test error scenarios
- Verify CSRF protection
- Test input validation

## Documentation

- Update README.md if needed
- Document security considerations
- Include setup instructions
- Document environment variables
- Update API documentation

## Questions?

If you have questions about contributing, please:

1. Read our documentation
2. Check existing issues
3. Contact the maintainers

Thank you for helping make this project more secure!
