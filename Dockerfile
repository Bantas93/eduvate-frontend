# --- Stage 1: Build ---
FROM node:18-alpine AS builder

# Set working directory
WORKDIR /app

# Copy package.json & package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy semua source code
COPY . .

# Build Next.js (hasilnya di folder .next)
RUN npm run build

# --- Stage 2: Run production ---
FROM node:18-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production

# Copy package.json & node_modules dari builder
COPY --from=builder /app/package.json ./
COPY --from=builder /app/node_modules ./node_modules

# Copy hasil build & public assets
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public

# Expose port
EXPOSE 3000

# Start Next.js
CMD ["npm", "start"]
