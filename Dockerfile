# ----------- Build Stage -----------
FROM node:lts-alpine3.21 AS builder

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package.json package-lock.json ./

# Install dependencies (only production dependencies will be copied later)
RUN npm ci

# Copy the rest of the application code
COPY . .

# Build the Next.js application
RUN npm run build

# Install only production dependencies
RUN npm ci --omit=dev


# ----------- Runtime Stage -----------
FROM node:lts-alpine3.21 AS runner

# Set working directory
WORKDIR /app

# Copy built Next.js application from the builder stage
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json ./

# Set a non-root user for security
RUN addgroup -S appgroup && adduser -S appuser -G appgroup
USER appuser

# Expose the port
EXPOSE 3000

# Start the Next.js server
CMD ["npm", "run", "start"]
