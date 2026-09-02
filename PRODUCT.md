# Product: Fernando Figuera — Portfolio Landing

## Users
Reclutadores tech, managers de equipo, clientes potenciales y la comunidad developer que visitan desde LinkedIn, GitHub o tarjeta de contacto. Deciden en ~15 segundos si seguir leyendo.

## Product Purpose
Una landing page que presenta a Fernando Figuera, TSU en Informática y estudiante de Ingeniería en Sistemas en Venezuela. Comunica identidad profesional, stack técnico, trayectoria y proyectos destacados. Es la puerta de entrada a su carrera.

## Register
brand

## Tone
Técnica, limpia y confiada. Estética terminal-native dark (no el cliché "hacker green"), con acento azul real sobre casi-negro. Se comunica como un dev con criterio de diseño: preciso, sin ruido, con personalidad.

## Brand Voice Words
- Precisa
- Técnica
- Cálida (no fría a pesar del dark mode)

## Anti-References
- Nada de pasteleo SaaS-cream (Inter, cards genéricas con icono+título+texto)
- Nada de editorial-magazine (Fraunces italic, drop caps, mono labels sobrerestringidos)
- Nada de "hacker green en negro" cliché
- Nada de gradientes de texto ni glassmorphism decorativo

## Strategic Principles
1. Dark mode como base, con toggle a light. La escena real: reclutador en monitor a diurno o nocturno.
2. Bilingüe ES/EN con toggle (i18next). Audiencia local e internacional.
3. Tech stack honesto y completo: Python, Django, Java, C#, VB.NET, Git, MySQL, PostgreSQL, Linux, Bash, IA tools.
4. Tres proyectos: portfolio Reflex (real, link externo), ecommerce Django + RAG chatbot (proyecto nuevo, sin screenshots, se muestra con mockup de conversación), juego Ahorcado (screenshot real + link GitHub).
5. Las imágenes se usan con propósito: Fernando.webp como retrato hero, Ahorcado.webp como screenshot del juego.

## Design Constraints
- Stack: Astro + Tailwind CSS, i18next, animaciones con Intersection Observer.
- Colores en OKLCH con tinte hacia el hue frío (260) y acento azul real (hue 255).
- Tipografía: Space Grotesk (display/body) + JetBrains Mono (labels/stats).
- Dark/Light via Tailwind `class` strategy, persistencia en localStorage.
