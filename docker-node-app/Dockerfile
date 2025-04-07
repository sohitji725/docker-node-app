# Step 1: Base image
FROM node:18

# Step 2: App directory banana
WORKDIR /app

# Step 3: package.json copy karo
COPY package.json .

# Step 4: Dependencies install karo
RUN npm install

# Step 5: Baaki code copy karo
COPY . .

# Step 6: App run karne ka command
CMD ["node", "index.js"]

# Step 7: Port expose karo
EXPOSE 3000
