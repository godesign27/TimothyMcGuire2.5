# EmailJS Configuration Documentation

## Environment Variables

The following environment variables are required for EmailJS to work:

- `VITE_EMAILJS_SERVICE_ID`: Your EmailJS service ID
- `VITE_EMAILJS_TEMPLATE_ID`: Your EmailJS template ID  
- `VITE_EMAILJS_PUBLIC_KEY`: Your EmailJS public key
- `VITE_EMAILJS_TO_EMAIL`: Recipient email address

## Template Configuration

Your EmailJS template should be configured with these variables:

### Required Variables:
- `{{from_name}}` - Sender's name
- `{{from_email}}` - Sender's email address
- `{{reply_to}}` - Reply-to email address
- `{{message}}` - Message content
- `{{subject}}` - Email subject

### Optional Variables:
- `{{company}}` - Sender's company
- `{{phone}}` - Sender's phone number
- `{{project}}` - Project type selected

### Recipient Configuration:

**Option 1: Fixed Recipient (Recommended)**
Set the template's "To Email" field to: `godesigngo@gmail.com`

**Option 2: Dynamic Recipient**
Set the template's "To Email" field to: `{{to_email}}`

## Current Configuration

The app is currently set up to work with both options:
- Sends `to_email` parameter with the recipient address
- If your template uses a fixed recipient, the `to_email` parameter will be ignored
- If your template uses `{{to_email}}`, it will use the provided recipient

## Troubleshooting

1. **Recipients address is empty**: Check that your template's "To Email" field is properly configured
2. **Template not found**: Verify TEMPLATE_ID matches your EmailJS dashboard
3. **Service not found**: Verify SERVICE_ID matches your EmailJS dashboard
4. **Invalid public key**: Verify PUBLIC_KEY matches your EmailJS dashboard

## Testing

Open browser console when submitting the form to see:
- All configuration values
- Template parameters being sent
- EmailJS response or error details