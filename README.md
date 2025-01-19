
# LeWallet App Frontend

LeWallet is a modern web application that helps users manage their accounts and budgets effectively. This repository contains the frontend code built with React, TypeScript, and Material Tailwind.

## Features

- 📊 **Dashboard**: Visual overview of financial status with charts and summaries
- 💰 **Account Management**: Track multiple accounts and their balances
- 📅 **Budget Planning**: Create and monitor budgets for different categories
- 💸 **Transaction Tracking**: Record and categorize income, expenses and transfers
- 📈 **Financial Reports**: Generate detailed reports and analytics
- ⚙️ **Settings**: Customize currency, notifications and exchange rates

## Tech Stack

- [React](https://reactjs.org/) - Frontend library
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Material Tailwind](https://material-tailwind.com/) - UI components
- [Recharts](https://recharts.org/) - Data visualization
- [React Router](https://reactrouter.com/) - Navigation
- [SWR](https://swr.vercel.app/) - Data fetching
- [Vite](https://vitejs.dev/) - Build tool

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js 18.x or higher
- vite 1.x or higher
- Git

## Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/lewallet.git
cd lewallet/client
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
Create a `.env` file in the root directory and add:
```
VITE_API_URL=your_backend_api_url
```

## Development

To start the development server:

```bash
bun run dev
```

The app will be available at `http://localhost:5173`

## Building for Production

To create a production build:

```bash
bun run build
```

The built files will be in the 

dist

 directory.

## Project Structure

```
src/
├── components/         # Reusable UI components
│   ├── Account/       # Account-related components
│   ├── Budget/        # Budget-related components
│   ├── ui/           # Common UI components
│   └── ...
├── constants/         # Constants and static data
├── hooks/            # Custom React hooks
├── pages/            # Page components
├── root/             # Root layout components
└── main.tsx         # Application entry point
```

## Contributing

1. Fork the repository
2. Create your feature branch:
```bash
git checkout -b feature/YourFeature
```
3. Commit your changes:
```bash
git commit -m 'Add some feature'
```
4. Push to the branch:
```bash
git push origin feature/YourFeature
```
5. Open a Pull Request

## Available Scripts

- `bun run dev` - Start development server
- `bun run build` - Build for production
- `bun run lint` - Run ESLint
- `bun run preview` - Preview production build locally

## Code Style

- We use ESLint for code linting
- Follow TypeScript best practices
- Use functional components and hooks
- Follow Material Tailwind design guidelines

## API Integration

The frontend communicates with the backend API using axios. All API calls are wrapped in custom hooks using SWR for efficient data fetching and caching.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Deployment

The app can be deployed to any static hosting service. We recommend:

- Netlify
- Vercel
- GitHub Pages

A 

netlify.toml

 configuration is included for Netlify deployments.

## Known Issues

See the [Issues](https://github.com/sagacode/lewallet-client/issues) page for current bugs and feature requests.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
```

This README provides comprehensive documentation covering installation, development, project structure, and contribution guidelines. Feel free to customize it further based on your specific project needs!
This README provides comprehensive documentation covering installation, development, project structure, and contribution guidelines. Feel free to customize it further based on your specific project needs!

Similar code found with 1 license type