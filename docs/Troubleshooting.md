### Task 'installDebug' not found in project ':app'.

`export ANDROID_HOME=\$HOME/Library/Android/sdk`

```
### FAILURE: Build failed with an exception.

* What went wrong:
A problem occurred configuring project ':@react-native-community_netinfo'.
> SDK location not found. Define location with an ANDROID_SDK_ROOT environment variable or by setting the sdk.dir path in your project's local properties file at '/Users/<username>/Projects/SDC/android/local.properties'.

```

Create a file `android/local.properties`

sdk.dir=/Users/yajanarao/Library/Android/sdk
