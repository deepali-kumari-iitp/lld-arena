@"
# LLD Arena

> **Practice. Design. Improve.**

🚀 **Live Demo:** https://lld-arena.vercel.app

LLD Arena is an interactive Low-Level Design practice platform built to help developers solve real-world system design problems by thinking in objects, defining responsibilities, modelling relationships, and improving through structured evaluation.

---

## ✨ Features

- 🧩 **Real-world LLD Challenges**
  - Practice system design problems inspired by real-world applications.
  - Start with the Parking Lot challenge and expand to more systems.

- 🎨 **Interactive Design Canvas**
  - Create classes visually.
  - Add attributes and methods.
  - Connect classes using relationships.
  - Model inheritance, composition, aggregation, association, and dependency.

- 📝 **Design Explanation**
  - Explain the reasoning behind your design.
  - Document responsibilities and architectural decisions.

- 🤖 **Structured Evaluation**
  - Evaluate designs across important LLD dimensions:
    - Responsibility
    - Abstraction
    - Relationships
    - Extensibility
    - Design Patterns

- 📊 **Attempts & Progress**
  - Track previous submissions.
  - Review evaluation results.
  - Improve designs through repeated practice.

- 🌙 **Premium Developer-focused UI**
  - Dark-first interface
  - Glassmorphism
  - Orange accent system
  - Responsive layouts
  - Interactive animations

---

## 🏗️ Current Learning Flow

```text
Landing Page
     ↓
Explore Challenges
     ↓
Select Parking Lot
     ↓
Read Requirements
     ↓
Design Classes
     ↓
Define Relationships
     ↓
Explain Design
     ↓
Submit Solution
     ↓
Evaluation
     ↓
Review Score
     ↓
Attempts / Improve
```

🅿️ Current Challenge
Parking Lot System

The first fully functional challenge focuses on designing a Parking Lot system.

The challenge covers concepts such as:

Object-Oriented Design
Encapsulation
Abstraction
Inheritance
Composition
Aggregation
Association
Responsibility Assignment
Extensibility
Design Patterns

The system requires the designer to think about different vehicle types, parking spots, parking operations, and relationships between domain objects.

🛠️ Tech Stack
Frontend
Next.js
React
TypeScript
Tailwind CSS
Motion
Lucide React
Interactive Design
React Flow (@xyflow/react)
Forms & Validation
React Hook Form
Zod
Backend / Data
Next.js Route Handlers
Prisma
PostgreSQL-ready architecture
📁 Project Structure
lld-arena/
│
├── app/
│   ├── api/
│   │   └── submissions/
│   ├── attempts/
│   ├── challenges/
│   │   └── parking-lot/
│   └── evaluation/
│       └── parking-lot/
│
├── components/
│   ├── home/
│   ├── layout/
│   ├── problems/
│   └── ui/
│
├── lib/
│   └── utils/
│
├── prisma/
│   └── schema.prisma
│
├── public/
│
├── .env.example
├── package.json
├── tsconfig.json
└── README.md
🚀 Getting Started
1. Clone the repository
git clone git@github.com:deepali-kumari-iitp/lld-arena.git
cd lld-arena
2. Install dependencies
npm install
3. Configure environment variables

Create a local .env file:

cp .env.example .env

On Windows PowerShell:

Copy-Item .env.example .env

Add the required environment variables to .env.

Never commit .env or API keys to GitHub.

4. Run the development server
npm run dev

Open:

http://localhost:3000
5. Create a production build
npm run build
6. Start production server
npm run start
🧪 Development

Run the development server:

npm run dev

Build the project:

npm run build

Run linting:

npm run lint
