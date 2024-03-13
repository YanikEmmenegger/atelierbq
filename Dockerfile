# Verwenden eines offiziellen Node.js Basisbildes
FROM node:latest

# Setzen des Arbeitsverzeichnisses im Container
WORKDIR /app

# Kopieren der package.json (und package-lock.json, falls vorhanden) in das Arbeitsverzeichnis
COPY package*.json ./

# Installieren von Abhängigkeiten
RUN npm install

# Kopieren des gesamten Projektcodes in das Arbeitsverzeichnis
COPY . .


# Ausführen des Next.js Entwicklungsservers
CMD ["npm", "run", "dev"]
