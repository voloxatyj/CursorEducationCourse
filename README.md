# CursorEducationCourse
home work area
Base

Створити локальний репозиторій добавити index.html сторінку закомітати. Створити віддалений репозиторій на github, підключити локальний до віддаленого і налаштувати github pages.

Додати в цю html сторiнку шпаргалку за командами гита. Перелік основних команд з якi потрібно записати:

git config --global user.name blabla = вказуємо ім’я користувача котре буде відображатись у комітах 
git config --global user.email blabal@bla = вказуємо пошту користувача котре буде відображатись у комітах
git init створює локальний репозиторій
git status = демонструє стан локального репозиторію, котрі файли затрекані, котрі змінені, 
котрі закомічені, котрі ні
git add = додадє файли у stage area, для подальшого розміщення на віддаленому репозиторію
git commit = об’єднує всі зміни у файлах і надає унікальний ключ SHA
git log = демонструє історію комітів для гілки
git checkout = з її допомогою ми можемо переключитись між гілками 
чи відкатати нашу локальний репо до відбовідної версії
git branch = створює нову гілку репо
git push = загружає всі файли із stage area на віддалений репо
git pull = загружає всі зміни з віддаленого репо на work area нашого локального репо
git merge = проводить зміни між вказаними гілками репозиторію
git clone = копіює вміст відаленого репозиторію на локальний пристрій
.gitignore = з допомогою його ми можемо виключити тип файлів, самі файли чи директорії,
котрі ми не хочемо включати у наш віддалений репозиторій
git revert = відміняє зміни вказані у коміті, з допомогою цієї
команди ми можемо відкатати версію гілки до об’єднання
git reset = з допомогою цієї команди ми можемо почитстити історію коміттів, 
у цієї команди є три методи реалізації soft,hard,mixed
git rebase = це "автоматизований" cherry-pick, котрий переносить всі зроблені зміни до вказаного коміту
git cherry-pick = ми можемо поєднати не цілу гілку, а вибірково певний коміт, котрий нас цікавить
git stash = це тимчасовий буфер з допомогою якого ми можемо зберегти зміни у треканих файлах, 
щоб вони нам не пропали
