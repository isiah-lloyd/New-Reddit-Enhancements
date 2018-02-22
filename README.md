# New-Reddit-Enhancements
Reddit made a big design change, here's some Userscripts to fix some annoying things.

## Fixes

**Distinguish Promoted** - A common complaint about the the redesign is that promotions (or ads) are hidden among normal posts. This script has the option to change promotions to have a yellow background and an outline to distinguish it from other posts
![Image showing the Distinguish Promoted feature](https://i.imgur.com/QVEa2zv.png)
**Hide Username & Hide Moderating** - If you ever use reddit in public or you are streaming your desktop but want to keep your identity anonymous this setting hides your username from the top bar and your moderated subreddits from the sidebar. 

## Installation

Download [Tampermonkey](http://tampermonkey.net/) for your browser and then click [this](https://github.com/isiah-lloyd/New-Reddit-Enhancements/raw/master/new-reddit-enhancements.user.js) link to install New Reddit Enchantments.

## Configuration

You can turn on and off features by editing the script in Tampermonkey. To edit the script go to your Tampermonkey dashboard and click on New Reddit Enchantments to open the editor. From there you should see code that looks like this:

```javascript
    const options = {
        distinguishPromotions: true,
        hideUsername: true,
        hideModerating: true
    };
```
You can turn off features here by setting it's value to `false` and turning it back on by setting it's value to `true`
