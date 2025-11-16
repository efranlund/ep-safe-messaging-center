# Elite Prospects Safe Messaging Center

A secure messaging platform for parents to monitor their children's communications with scouts, coaches, and agents on Elite Prospects.

## 📁 Project Structure

This repository contains:

- **`safe-messaging-poc/`** - The main Next.js application
- **`elite-prospects_safe_messaging_strategy.md`** - Strategy documentation

## 🚀 Deployment to Vercel

This project is configured for automatic deployment to Vercel when pushing to the main branch.

### Initial Setup

1. **Import the repository to Vercel:**
   - Go to [Vercel Dashboard](https://vercel.com/dashboard)
   - Click "Add New Project"
   - Import the `ep-safe-messaging-center` repository
   - Vercel will automatically detect the Next.js app in the `safe-messaging-poc` subdirectory

2. **Configure Environment Variables:**
   - In the Vercel project settings, go to "Environment Variables"
   - Add the following variables (see `safe-messaging-poc/.env.example` for reference):
     - `NEXTAUTH_URL` - Your production URL (e.g., `https://your-app.vercel.app`)
     - `NEXTAUTH_SECRET` - Generate a secure random string (use `openssl rand -base64 32`)
     - `GOOGLE_CLIENT_ID` - Your Google OAuth client ID
     - `GOOGLE_CLIENT_SECRET` - Your Google OAuth client secret
     - `EMAIL_SERVER` - Your SMTP server configuration
     - `EMAIL_FROM` - Email address for sending emails

3. **Deploy:**
   - Vercel will automatically build and deploy on the first import
   - Future pushes to the main branch will trigger automatic deployments

### Configuration

The `vercel.json` file at the root configures Vercel to:
- Use `safe-messaging-poc` as the root directory
- Run build commands from that directory
- Automatically detect Next.js framework settings

## 🛠️ Local Development

See the [README in safe-messaging-poc](./safe-messaging-poc/README.md) for local development instructions.

## 📝 Notes

- The `.env.local` file is gitignored and should not be committed
- Environment variables must be set in Vercel's dashboard for production
- The app uses NextAuth.js for authentication (Google OAuth + Magic Link)

