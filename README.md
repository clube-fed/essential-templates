# essential-templates-2020
Master repository for the new 2020 Essential Templates.

## Initial Setup
1. Download repository to your local.
2. Edit `style.scss` file and comment/un-comment the appropriate imports (via `//`) based on the selected components in the design (designer should include this info in the handoff).
3. Set up site folder in Amazon S3 sites directory, and create three subfolders for `css`, `js`, and `images` (probably best to use the images folder just for logos so we can relatively reference background image logos in the css).
4. Edit `globalScripts.js` file and do find/replace for the **SiteFolderName** at the top of the file. This sets the correct path for the modules.css append.

## Variables
Most variables exist in the variables.scss. There are some variables, however, that exist in the specific component’s .scss file if it’s not a variable that would be used for all versions of that component. For example, only one of the article versions includes images, so only that version’s .scss file will have variables for the image’s dimensions.

