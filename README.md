# IFDCE Website (developed by REDA JENHAJI)

A modern, full-stack website for the Institute of Training, Skills Development and Excellence (IFDCE) built with Vite, React, and a robust Laravel backend API.

## 🚀 Features

- **Modern UI/UX**: Clean, professional design showcasing IFDCE's educational programs
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Fast Performance**: Built with Vite for lightning-fast development and production builds
- **Interactive Components**: Dynamic course catalogs, program information, and contact forms
- **Multi-language Support**: French and English content support
- **SEO Optimized**: Meta tags and structured data for better search visibility
- **RESTful API**: Comprehensive Laravel backend API for data management
- **Authentication & Authorization**: Laravel Sanctum secure user management system
- **Database Integration**: Persistent data storage with MySQL database
- **Admin Dashboard**: Content management system for administrators

## 🛠️ Tech Stack

### Frontend
- **Framework**: React 18
- **Build Tool**: Vite
- **Styling**: CSS3 / Tailwind CSS
- **Icons**: Lucide React
- **State Management**: React Context / Redux Toolkit
- **HTTP Client**: Axios

### Backend
- **Framework**: Laravel 10
- **Database**: MySQL
- **ORM**: Eloquent ORM
- **Authentication**: Laravel Sanctum
- **Validation**: Laravel Form Requests
- **File Upload**: Laravel Storage
- **Email Service**: Laravel Mail with SMTP
- **API**: Laravel API Resources

### DevOps & Deployment
- **Frontend Deployment**: Vercel / Netlify
- **Backend Deployment**: DigitalOcean / AWS / Shared Hosting
- **Database Hosting**: MySQL Server / PlanetScale
- **CI/CD**: GitHub Actions

## 📋 Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager
- PHP 8.1 or higher
- Composer
- MySQL 8.0 or higher
- Git

## 🚀 Getting Started

### Full Stack Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/ifdce-website.git
cd ifdce-website
```

2. Install frontend dependencies:
```bash
npm install
# or
yarn install
```

3. Install backend dependencies:
```bash
cd backend
composer install
```

4. Set up environment variables:
```bash
# Frontend (.env)
VITE_API_URL=http://localhost:8000/api
VITE_CONTACT_EMAIL=contact@ifdce.com
VITE_GOOGLE_ANALYTICS_ID=your_ga_id

# Backend (.env)
APP_NAME="IFDCE Website"
APP_ENV=local
APP_KEY=base64:your_app_key_here
APP_DEBUG=true
APP_URL=http://localhost:8000

DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=ifdce_db
DB_USERNAME=your_username
DB_PASSWORD=your_password

SANCTUM_STATEFUL_DOMAINS=localhost:5173,127.0.0.1:5173
SESSION_DOMAIN=localhost

MAIL_MAILER=smtp
MAIL_HOST=smtp.gmail.com
MAIL_PORT=587
MAIL_USERNAME=your_email@gmail.com
MAIL_PASSWORD=your_app_password
MAIL_ENCRYPTION=tls
MAIL_FROM_ADDRESS=noreply@ifdce.com
MAIL_FROM_NAME="${APP_NAME}"

FILESYSTEM_DISK=public
```

5. Set up the Laravel backend:
```bash
cd backend
cp .env.example .env
php artisan key:generate
php artisan migrate
php artisan db:seed
php artisan storage:link
```

6. Start the Laravel backend server:
```bash
cd backend
php artisan serve
```

7. Start the frontend development server:
```bash
cd ..
npm run dev
```

8. Open your browser and navigate to `http://localhost:5173`

## 📝 Available Scripts

### Frontend Scripts
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint for code quality
- `npm run lint:fix` - Fix ESLint issues automatically

### Backend Scripts (Laravel Artisan)
- `php artisan serve` - Start development server
- `php artisan migrate` - Run database migrations
- `php artisan migrate:fresh --seed` - Fresh migration with seeding
- `php artisan db:seed` - Seed database with initial data
- `php artisan make:controller` - Create new controller
- `php artisan make:model` - Create new model
- `php artisan make:migration` - Create new migration
- `php artisan route:list` - List all routes
- `php artisan cache:clear` - Clear application cache
- `php artisan config:clear` - Clear configuration cache

## 📁 Project Structure

```
ifdce-website/
├── public/
│   ├── images/
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── common/
│   │   ├── sections/
│   │   └── ui/
│   ├── pages/
│   ├── services/
│   │   └── api.js
│   ├── hooks/
│   ├── context/
│   ├── utils/
│   ├── App.jsx
│   └── main.jsx
├── backend/
│   ├── app/
│   │   ├── Http/
│   │   │   ├── Controllers/
│   │   │   ├── Middleware/
│   │   │   └── Requests/
│   │   ├── Models/
│   │   └── Mail/
│   ├── database/
│   │   ├── migrations/
│   │   ├── seeders/
│   │   └── factories/
│   ├── routes/
│   │   ├── api.php
│   │   └── web.php
│   ├── storage/
│   │   └── app/public/
│   ├── config/
│   └── resources/views/
├── package.json
└── vite.config.js
```

## 🔌 API Endpoints

### Authentication (Laravel Sanctum)
- `POST /api/register` - User registration
- `POST /api/login` - User login
- `POST /api/logout` - User logout
- `GET /api/user` - Get authenticated user
- `POST /api/forgot-password` - Password reset request
- `POST /api/reset-password` - Reset password

### Programs & Courses
- `GET /api/programs` - Get all programs
- `GET /api/programs/{id}` - Get program by ID
- `POST /api/programs` - Create new program (Admin)
- `PUT /api/programs/{id}` - Update program (Admin)
- `DELETE /api/programs/{id}` - Delete program (Admin)

### Contact & Inquiries
- `POST /api/contact` - Submit contact form
- `GET /api/inquiries` - Get all inquiries (Admin)
- `PUT /api/inquiries/{id}` - Update inquiry status (Admin)

### Users & Admin
- `GET /api/users` - Get all users (Admin)
- `GET /api/users/{id}` - Get user by ID
- `PUT /api/users/{id}` - Update user profile
- `DELETE /api/users/{id}` - Delete user (Admin)

### File Upload
- `POST /api/upload` - Upload files (images, documents)
- `GET /api/files/{filename}` - Get uploaded file

## 🎨 Key Components

### Frontend Components
- **Header**: Navigation with IFDCE logo and menu
- **Hero Section**: Main banner with call-to-action
- **Programs**: Showcase of diploma and certification programs
- **About**: Institution presentation and mission
- **Services**: VAE, online training, and consulting services
- **Contact**: Contact form and institution information
- **Footer**: Links and additional information
- **Admin Dashboard**: Content management interface

### Backend Components (Laravel)
- **Controllers**: Handle HTTP requests and responses
- **Models**: Eloquent ORM models for database interaction
- **Middleware**: Authentication and request filtering
- **Form Requests**: Input validation and authorization
- **Mail Classes**: Email notifications and templates
- **Resources**: API response formatting
- **Seeders**: Database seeding for initial data

## 🌐 Deployment

### Frontend Deployment (Vercel)

```bash
npm run build
vercel --prod
```

### Backend Deployment (DigitalOcean/AWS)

1. Set up your server with PHP 8.1+ and MySQL
2. Clone your repository
3. Install dependencies:
```bash
composer install --no-dev --optimize-autoloader
```
4. Set up environment variables
5. Run migrations:
```bash
php artisan migrate --force
php artisan config:cache
php artisan route:cache
php artisan view:cache
```

### Database Setup (MySQL)

1. Create MySQL database
2. Update .env with database credentials
3. Run migrations and seeders

## 🔧 Configuration

### Environment Variables

Frontend (`.env`):
```env
VITE_API_URL=https://your-backend-url.com/api
VITE_CONTACT_EMAIL=contact@ifdce.com
VITE_GOOGLE_ANALYTICS_ID=your_ga_id
```

Backend (`backend/.env`):
```env
APP_NAME="IFDCE Website"
APP_ENV=production
APP_KEY=base64:your_production_key_here
APP_DEBUG=false
APP_URL=https://your-backend-url.com

DB_CONNECTION=mysql
DB_HOST=your_db_host
DB_PORT=3306
DB_DATABASE=your_production_db
DB_USERNAME=your_db_user
DB_PASSWORD=your_db_password

SANCTUM_STATEFUL_DOMAINS=your-frontend-domain.com
SESSION_DOMAIN=.your-domain.com

MAIL_MAILER=smtp
MAIL_HOST=smtp.gmail.com
MAIL_PORT=587
MAIL_USERNAME=your_email@gmail.com
MAIL_PASSWORD=your_app_password
MAIL_ENCRYPTION=tls
MAIL_FROM_ADDRESS=noreply@ifdce.com
MAIL_FROM_NAME="${APP_NAME}"

FILESYSTEM_DISK=public
```

## 🧪 Testing

### Frontend Testing
```bash
npm run test
npm run test:coverage
```

### Backend Testing (Laravel)
```bash
cd backend
php artisan test
php artisan test --coverage
```

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Team

- **Project Lead & Full-Stack Developer**: REDA JENHAJI
- **Frontend Developer**: [Developer Name]
- **Backend Developer**: [Developer Name]
- **UI/UX Designer**: [Designer Name]
- **DevOps Engineer**: [DevOps Name]

## 📞 Support

For support and questions:
- Email: dev@ifdce.com
- Website: [IFDCE Official Website]
- Issues: [GitHub Issues](https://github.com/yourusername/ifdce-website/issues)

## 🎯 Roadmap

### Phase 1 (Current)
- [x] Frontend implementation with React & Vite
- [x] Laravel backend API development
- [x] MySQL database design
- [x] Laravel Sanctum authentication system
- [x] Axios API integration

### Phase 2 (In Progress)
- [ ] Student portal integration
- [ ] Course enrollment system
- [ ] Payment gateway integration
- [ ] Admin dashboard enhancement
- [ ] File upload system optimization

### Phase 3 (Upcoming)
- [ ] Multi-language content management
- [ ] Advanced search functionality
- [ ] Mobile app companion
- [ ] Real-time notifications
- [ ] Advanced analytics dashboard
- [ ] Laravel Queue implementation

---

Built with ❤️ for IFDCE - Making excellence accessible to everyone, everywhere.