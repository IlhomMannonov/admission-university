FROM node:18

# LibreOffice va Chrome kutubxonalarini o‘rnatamiz
RUN apt-get update && apt-get install -y \
    wget \
    ca-certificates \
    fonts-liberation \
    libappindicator3-1 \
    libasound2 \
    libatk-bridge2.0-0 \
    libatk1.0-0 \
    libcups2 \
    libdbus-1-3 \
    libdrm2 \
    libgbm1 \
    libgtk-3-0 \
    libnspr4 \
    libnss3 \
    libx11-xcb1 \
    libxcomposite1 \
    libxdamage1 \
    libxrandr2 \
    xdg-utils \
    libreoffice \
    --no-install-recommends \
 && apt-get clean \
 && rm -rf /var/lib/apt/lists/*

# Ishchi papkani belgilaymiz
WORKDIR /app

# package va tsconfig fayllarni ko'chiramiz
COPY package*.json ./
COPY tsconfig.json ./

# TypeScript global install (agar kerak bo‘lsa)
RUN npm install -g typescript

# Kutubxonalarni o‘rnatamiz
RUN npm install

# src/ va qolgan fayllarni konteynerga nusxalaymiz
COPY ./src ./src

# TypeScript build
RUN npm run build

# Tizim porti
EXPOSE 8080

# Appni ishga tushiramiz
CMD ["npm", "start"]
