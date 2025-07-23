
export const USERS =`CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    name VARCHAR(20) NOT NULL CHECK (char_length(name) >= 3),
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(12) NOT NULL CHECK (char_length(password) >= 6),
    role VARCHAR(10) NOT NULL CHECK (role IN ('Student', 'Teacher')),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);`

export const STUDENT_PROFILE =`CREATE TABLE student_profiles (
    id SERIAL PRIMARY KEY,
    dob DATE,
    user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    standard VARCHAR(50) NOT NULL,
    contact VARCHAR(10) NOT NULL CHECK (contact ~ '^\d{10}$'),
    avatar TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);`

export const  TEACHER_PROFILE=`CREATE TABLE teacher_profiles (
    id SERIAL PRIMARY KEY,
    user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    subjects TEXT[] NOT NULL,
    qualifications TEXT[] NOT NULL,
    price NUMERIC NOT NULL,
    available_days TEXT[],
    available_timings TEXT[] NOT NULL,
    contact VARCHAR(10) NOT NULL CHECK (contact ~ '^\d{10}$'),
    avatar TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);`

export const NOTES = `CREATE TABLE notes (
    id SERIAL PRIMARY KEY,
    teacher_id INTEGER NOT NULL REFERENCES teacher_profiles(id) ON DELETE CASCADE,
    title TEXT NOT NULL,
    description TEXT NOT NULL,
    file_url TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);`

export const RATINGS = `CREATE TABLE ratings (
    id SERIAL PRIMARY KEY,
    student_id INTEGER NOT NULL REFERENCES student_profiles(id) ON DELETE CASCADE,
    teacher_id INTEGER NOT NULL REFERENCES teacher_profiles(id) ON DELETE CASCADE,
    rating INTEGER CHECK (rating >= 1 AND rating <= 5),
    review_text TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);`