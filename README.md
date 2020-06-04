# Prisma Graphql Bolierplate

### Prerequisites
* node >=0.12.8
* npm ^3.10.0

## Quick Start:

```shell

# Browse to project folder
cd /path/to/project/this/folder

# Install browserSync and other dependencies
npm install

# Postgres Setup
Create postgres db and get postgres url

Example:
DATABASE_URL="postgresql://prisma_user:prisma@localhost:5432/prisma_db?schema=public"

# Migrate Schema
npx prisma migrate save --name init --experimental
npx prisma migrate up --experimental
npx prisma generate

# Start Server
npm start

```
