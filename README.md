<div align="center">

# Pipeline Watch
### A full-stack CI/CD pipeline monitoring dashboard.

![React](https://img.shields.io/badge/React_19-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![FastAPI](https://img.shields.io/badge/FastAPI-009688?style=for-the-badge&logo=fastapi&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-4169E1?style=for-the-badge&logo=postgresql&logoColor=white)
![JWT](https://img.shields.io/badge/JWT_Auth-000000?style=for-the-badge&logo=jsonwebtokens&logoColor=white)
![Pytest](https://img.shields.io/badge/Pytest-0A9EDC?style=for-the-badge&logo=pytest&logoColor=white)

A dashboard for tracking the status of CI/CD pipelines across projects built with a FastAPI backend and a React/TypeScript frontend, with JWT-based auth and per-user integrations for GitHub and Discord notifications.

### 🚧 Status: In Progress
This project is actively being built. Auth and the dashboard UI are functional; live pipeline data and notifications are still in development.

**Done:**
- JWT auth (register/login/protected routes)
- Backend test suite (unit, edge case, negative tests)
- Dashboard UI with filtering, pipeline list/rows
- Settings for GitHub token & Discord webhook (storage only)

**In progress / planned:**
- Live GitHub Actions API integration (dashboard currently runs on mock pipeline data)
- Discord webhook notifications on pipeline status change
- Dockerized backend + database setup
- End-to-end tests (Selenium)

</div>

## 🌐 Overview
Pipeline Watch lets a developer log in and see, at a glance, which of their project pipelines are passing, failing, or currently running branch, workflow file, last run time, and duration. It's built as a full-stack app: a FastAPI + SQLAlchemy backend for auth and settings, and a React dashboard for the actual pipeline view.

## ✨ Highlights
- ✔️ JWT-based authentication (register / login / protected routes)
- ✔️ Password hashing with bcrypt
- ✔️ Per-user settings ,GitHub token & Discord webhook for notifications
- ✔️ Filterable pipeline dashboard (passing / failing / running)
- ✔️ Backend test suite (unit, edge case, negative tests) with pytest
- ✔️ Clean, typed React architecture with shadcn/ui components
- ✔️ Fast Vite build & dev experience

## 🚀 Built With

| Technology | Purpose |
|---|---|
| ⚛️ React 19 + TypeScript | Frontend framework |
| ⚡ Vite | Build tool |
| 🎨 Tailwind CSS + shadcn/ui | Styling & UI components |
| 🧭 React Router | Client-side routing |
| 🐍 FastAPI | Backend REST API |
| 🗄 SQLAlchemy + PostgreSQL | ORM & database |
| 🔐 JWT (python-jose) + Passlib (bcrypt) | Authentication |
| ✅ Pytest | Backend testing |

## 📂 Project Structure
```
Backend/
└── app/
    ├── main.py          # FastAPI app & routes
    ├── auth.py           # JWT auth, password hashing
    ├── database.py        # SQLAlchemy engine/session
    ├── models.py          # DB models
    ├── schemas.py         # Pydantic schemas
    └── tests/             # Unit, edge case & negative tests

src/
├── components/
│   ├── Layout/            # Sidebar & page layout
│   └── dashboard/          # Pipeline list, rows, filter pills
├── pages/
│   ├── LoginPage.tsx
│   ├── RegisterPage.tsx
│   └── DashboardPage.tsx
├── lib/api/                # API client (auth)
├── Types/                  # TypeScript types
├── data/                   # Mock pipeline data & navigation
├── App.tsx
└── main.tsx
```

## ⚙️ Installation

**Clone the repository**
```bash
git clone https://github.com/FerdawsAnzer/pipeline-watch.git
cd pipeline-watch
```

**Frontend setup**
```bash
npm install
npm run dev
```

**Backend setup**
```bash
cd Backend
pip install fastapi uvicorn sqlalchemy psycopg2-binary python-jose passlib[bcrypt] python-dotenv
```

Create a `.env` file inside `Backend/` with:
```
DATABASE_URL=postgresql://user:password@localhost/pipeline_watch
SECRET_KEY=your-secret-key
ALGORITHM=HS256
ACCESS_TOKEN_EXPIRE_MINUTES=30
```

**Run the backend**
```bash
uvicorn app.main:app --reload
```

**Run backend tests**
```bash
pytest
```

## 👤 Author
**Ferdaws Anzer**
- Portfolio: [ferdawsanzer.netlify.app](https://ferdawsanzer.netlify.app/)
- GitHub: [@FerdawsAnzer](https://github.com/FerdawsAnzer)
- LinkedIn: [ferdaws-anzer](https://www.linkedin.com/in/ferdaws-anzer-71152b29b)
