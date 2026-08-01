# hangman

> Classic word guessing game with a modern twist — powered by Next.js 15 and real dictionary API

[![Next.js](https://img.shields.io/badge/Next.js-15-black?logo=next.js)](https://nextjs.org)
[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react)](https://reactjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178C6?logo=typescript)](https://www.typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-06B6D4?logo=tailwindcss)](https://tailwindcss.com)
[![Bun](https://img.shields.io/badge/Bun-1.0-black?logo=bun)](https://bun.sh)

---

## 📖 About

**Hangman** is a classic word guessing game where players try to guess a hidden word by suggesting letters. Each incorrect guess brings the hangman closer to completion. The game features:

- 🎲 **Dynamic word generation** — random words from random-words-api.kushcreates.com with definitions from Free Dictionary API
- 🎯 **Three difficulty levels** — Easy (3-4 letters), Medium (5-7 letters), Hard (8-10 letters)
- 📱 **Fully responsive** — works on all screen sizes

---

## ✨ Features

### Core Gameplay

- 🎯 **Guess letters** — click or tap letters to reveal them in the word
- 🚫 **Mistake tracking** — each wrong guess adds a part to the hangman
- 🏆 **Win/Lose states** — clear feedback with word reveal and definition
- 🔄 **Auto-restart** — new game with random difficulty after each round

### Technical Highlights

- ⚡ **Next.js 15 App Router** — server components for performance
- 🎨 **Tailwind CSS 4** — modern utility-first styling
- 📡 **Real dictionary API** — random words from random-words-api.kushcreates.com and definitions from Free Dictionary API
- 🧩 **Feature-Sliced Design (FSD)** — scalable architecture

---

## 🛠️ Tech Stack

| Category            | Technologies            |
| :------------------ | :---------------------- |
| **Framework**       | Next.js 15 (App Router) |
| **Language**        | TypeScript 5.9          |
| **Styling**         | Tailwind CSS 4          |
| **Package Manager** | Bun                     |
| **Linting**         | ESLint, Prettier        |

---

## 🚀 Live Demo

**[https://hangman-eosin-sigma.vercel.app](https://hangman-eosin-sigma.vercel.app)**

---

## 📄 API

- Random Words — https://random-words-api.kushcreates.com/api
- Word Definitions — https://api.dictionaryapi.dev
