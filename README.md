# Modern Todo List Application

A beautiful and feature-rich todo list application built with Next.js 15, TypeScript, Tailwind CSS, and Shadcn UI. Try it out here: [Todo List App](https://todo-list-ruddy-nine.vercel.app/)

## Features

- 🎯 Create, edit, and delete todos
- 🔍 Search functionality
- 🔄 Filter by status (All, Active, Completed)
- 📊 Sort by date, priority, or title
- 🌓 Dark/Light mode support
- 💾 Persistent storage
- 📱 Responsive design
- ✨ Beautiful animations
- ♿ Accessible components

## Prerequisites

- Node.js 18.17.0 or later
- pnpm (recommended) or npm

## Installation

1. Clone the repository:
```bash
git clone https://github.com/your-username/todo-list.git
cd todo-list
```

2. Install dependencies:
```bash
pnpm install
# or
npm install
```

3. Run the development server:
```bash
pnpm dev
# or
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Tech Stack

- [Next.js 15](https://nextjs.org/) - React framework
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [Shadcn UI](https://ui.shadcn.com/) - UI components
- [Zustand](https://zustand-demo.pmnd.rs/) - State management
- [Framer Motion](https://www.framer.com/motion/) - Animations

## Project Structure

```
todo-list/
├── app/              # Next.js app router
├── components/       # React components
│   ├── todo/        # Todo-specific components
│   └── ui/          # Shadcn UI components
├── hooks/           # Custom React hooks
├── lib/             # Utilities and store
└── public/          # Static assets
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Live Demo

Check out the live demo: [https://todo-list-ruddy-nine.vercel.app/](https://todo-list-ruddy-nine.vercel.app/)
