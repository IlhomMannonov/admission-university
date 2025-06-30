#!/bin/bash

echo "[$(date)] 🚀 Deployment boshlanmoqda..."

# Loyihani joylashgan papkaga o‘tamiz
cd sharq-university || {
  echo "❌ Papka topilmadi"
  exit 1
}

# O'zgarishlarni olish
echo "📥 Git pull ishlayapti..."
git pull origin main || {
  echo "❌ Git pullda xatolik"
  exit 1
}

# Docker konteynerni to‘xtatamiz
echo "🛑 Docker-compose down..."
docker-compose down || {
  echo "❌ Docker-compose downda xatolik"
  exit 1
}

# Docker build (yangi image)
echo "🔧 Docker-compose build..."
docker-compose build || {
  echo "❌ Docker buildda xatolik"
  exit 1
}

# Docker up (konteynerni qayta ishga tushiramiz)
echo "✅ Docker-compose up -d..."
docker-compose up -d || {
  echo "❌ Docker upda xatolik"
  exit 1
}

echo "[$(date)] ✅ Deployment tugadi!"
