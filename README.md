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

## Live Demo

Check out the live demo: [https://todo-list-ruddy-nine.vercel.app/](https://todo-list-ruddy-nine.vercel.app/)


PS код полностью писали sonnet 3.7 и gemini 2.5, в продакшне я код пишу чище, лучше)