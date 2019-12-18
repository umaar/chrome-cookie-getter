
# Cookies

```sh
# in terminal tab 1
/Applications/Google\ Chrome\ Canary.app/Contents/MacOS/Google\ Chrome\ Canary  --remote-debugging-port=9222 https://brilliant.org/profile/user-name-here/ --user-data-dir="$HOME/Library/Application Support/Google/Chrome Canary"

# Log into brilliant if not already, and close the browser

# in terminal tab 2
node get-cookies.js

# in terminal tab 1
/Applications/Chromium.app/Contents/MacOS/Chromium --remote-debugging-port=9222

# Verify you're not logged into brilliant

# in terminal tab 2
node set-cookies.js

# Verify you're logged into brilliant
```