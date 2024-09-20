# hello-git-workflow-team
```
mai

1: tạo git
2: Copy hết phần khung này  echo "# hello-git-workflow-team" >> README.md ...  git push -u origin main
3: git branch develop ( tạo nhánh develop) (main)
4: git branch ( ktra nhánh), -> git checkout develop -> git checkout main
5: git push -u origin develop (từ main push lên)
6: git checkout -b feature/1-add-cart.model-file develop (main) 
7: git status (feature/1-add-cart.model-file)
8: tạo cart.model.js
9: git add cart.model.js (feature/1-add-cart.model-file)
10: git commit -m '#1 - anonystick update  model cart' (feature/1-add-cart.model-file)
11: git push (feature/1-add-cart.model-file)  git push --set-upstream origin feature/1-add-cart.model-file
12: lên git merge vào develop
13: git checkout develop
14: git pull
15: git checkout -b release-1.0.0 develop (develop) (Tạo thêm nhánh release-1.0.0)
16: git tag 'v1.0.0' (release-1.0.0)
17: git merge develop (release-1.0.0)
18: git push (release-1.0.0)
19: lên git merge
20: git checkout main
21: git pull
22: git push --tag (main)
23: git checkout -b hostfix (main)
24: fix lỗi
25: git add (hostfix)
26: git add cart.model.js (hostfix)
27: git commit -m '#1 fix' (hostfix)
28: git push (hostfix)
29: git checkout main
30: git pull
31: Xong hết thì xóa các nhánh không cần thiết 
32: git brach -d hostfix (localhost)
33: git push origin -d hostfix (remote)
Xóa hết chỉnh giữ lại 2 branch chính main, develop
```
git checkout -b feature/1-add-cart.model-file develop

# SCSS
``` 
1. Cài Đặt Sass
npm install -g sass
2 styles.scss biên dịch nó thành styles.css
sass styles.scss styles.css

sass styleSCSS.scss styleCSS.css

sass ./scss/styleSCSS.scss ./scss/styleCSS.css
```

# Tailwind 
```
Installation 
1. Install Tailwind CSS 
npm install -D tailwindcss
npx tailwindcss init

2. Configure your template paths (vào tailwind.config.js thêm path vào content)
content: ["./src/**/*.{html,js}"],

3. Add the Tailwind directives to your CSS ( tạo 1 file input.css thêm vào)
@tailwind base;
@tailwind components;
@tailwind utilities;

4. Start the Tailwind CLI build process  (biên dịch từ file input.css thành output.css)
npx tailwindcss -i ./src/input.css -o ./src/output.css --watch

5. Start using Tailwind in your HTML


```



