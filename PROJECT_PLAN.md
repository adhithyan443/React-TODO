texttodo-app/
├── public/
│   └── vite.svg
├── src/
│   ├── assets/
│   │   └── react.svg
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Sidebar.tsx
│   │   │   └── StatsBar.tsx
│   │   ├── tasks/
│   │   │   ├── TaskForm.tsx
│   │   │   ├── TaskItem.tsx
│   │   │   └── TaskList.tsx
│   │   └── ui/
│   │       └── ToastContainer.tsx   # or use react-hot-toast directly
│   ├── types/
│   │   └── index.ts                 # Task interface and other types
│   ├── utils/
│   │   ├── dateUtils.ts             # isOverdue, formatDate, etc.
│   │   └── storage.ts               # localStorage helpers
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── PROJECT_PLAN.md
├── tailwind.config.js
├── postcss.config.js
├── vite.config.ts
├── tsconfig.json
├── tsconfig.node.json
├── package.json
└── README.md