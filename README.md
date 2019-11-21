# essential-templates-2020
Master repository for the new 2020 Essential Templates.

## Admin console setup
### Display Theme
Create a display theme and select it from the Display Theme dropdown in admin console like normal. This will essentially only be used for displaying heading styles accurately within the Editor, since we don't have the ability to insert anything different into its head tag. This is purpose of the `ClientSpecificTheme.scss` file in the downloaded package.
### Mobile Web tab
Append in `<head>` above scripts:
```
[FAVICON HTML HERE]
[FONT LINK HERE]
<link href="//clubessential.s3.amazonaws.com/fonts/glyph/css/nucleo-glyph.css" rel="stylesheet" type="text/css">
<link href="//clubessential.s3.amazonaws.com/fonts/outline/css/nucleo-outline.css" rel="stylesheet" type="text/css">
<link href="//clubessential.s3.amazonaws.com/fonts/mini/css/nucleo-mini.css" rel="stylesheet" type="text/css">
<script src="//clubessential.s3.amazonaws.com/libs/bs4/js/bootstrap.min.js"></script>
<link rel="stylesheet" type="text/css" href="//clubessential.s3.amazonaws.com/libs/bs4/css/bootstrap.min.css"/>
<link href="//clubessential.s3.amazonaws.com/sites/SITEFOLDERNAME/css/style.css" rel="stylesheet" type="text/css">
```
Append directly above `</body>`:
```
<script src="//clubessential.s3.amazonaws.com/sites/SITEFOLDERNAME/js/globalScripts.js"></script>
```

### Other tab
*** **Leave Enable Bootstrap disabled.** ***

Head Tag Top:
```
[FONT LINK HERE]
<link href="//clubessential.s3.amazonaws.com/fonts/glyph/css/nucleo-glyph.css" rel="stylesheet" type="text/css">
<link href="//clubessential.s3.amazonaws.com/fonts/outline/css/nucleo-outline.css" rel="stylesheet" type="text/css">
<link href="//clubessential.s3.amazonaws.com/fonts/mini/css/nucleo-mini.css" rel="stylesheet" type="text/css">
```
Head Tag Bottom:
```
<script src="//clubessential.s3.amazonaws.com/libs/bs4/js/bootstrap.min.js"></script>
<script>$j('link[href*="_axisGlobal/global.css"]').before('<link rel="stylesheet" type="text/css" href="//clubessential.s3.amazonaws.com/libs/bs4/css/bootstrap.min.css"/>');</script>
<link href="//clubessential.s3.amazonaws.com/sites/SITEFOLDERNAME/css/style.css" rel="stylesheet" type="text/css">
```
Body Tag Bottom:
```
<script src="//clubessential.s3.amazonaws.com/js/overridePhotoAlbum.min.js"></script>
<script src="//clubessential.s3.amazonaws.com/js/responsiveAlbum.min.js"></script>
<script src="//clubessential.s3.amazonaws.com/sites/SITEFOLDERNAME/js/globalScripts.js"></script>
```

## SASS Setup
1. Download repository to your local.
2. Edit `style.scss` file and comment/un-comment the appropriate imports (via `//`) based on the selected components in the design (designer should include this info in the handoff).
3. Set up site folder in Amazon S3 sites directory, and create three subfolders for `css`, `js`, and `images` (probably best to use the images folder just for logos so we can relatively reference background image logos in the css).
4. Edit `globalScripts.js` file and do find/replace for the **SiteFolderName** at the top of the file. This sets the correct path for the modules.css append.

## Variables
Most variables exist in the `variables.scss`. There are some variables, however, that exist in the specific component’s .scss file if it’s not a variable that would be used for all versions of that component. For example, only one of the article versions includes images, so only that version’s .scss file will have variables for the image’s dimensions.

