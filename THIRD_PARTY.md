# 3rd-party dependencies

All npm packages, used by this project, are listed in the
`packages.json` file.  To list the first-level dependencies and its
licenses, you can use the tool [license-report](https://github.com/ironSource/license-report)
```
license-report --only=prod --output=table --fields=name --fields=licenseType --fields=definedVersion --fields=link
```

Current list (06.07.2022)
```
name                     license type  defined version  link
----                     ------------  ---------------  ----
@koumoul/vjsf            MIT           ^2.11.3          git+https://github.com/koumoul-dev/vuetify-jsonschema-form.git
core-js                  MIT           ^3.8.3           git+https://github.com/zloirock/core-js.git
just-clone               MIT           ^5.0.1           git+https://github.com/angus-c/just.git
konva                    MIT           ^8.3.5           git://github.com/konvajs/konva.git
register-service-worker  MIT           ^1.7.2           git+https://github.com/yyx990803/register-service-worker.git
roboto-fontface          Apache-2.0    *                git+https://github.com/choffmeister/roboto-fontface-bower.git
vue                      MIT           ^2.6.14          git+https://github.com/vuejs/vue.git
vue-router               MIT           ^3.5.1           git+https://github.com/vuejs/vue-router.git
vuetify                  MIT           ^2.6.0           git+https://github.com/vuetifyjs/vuetify.git
vuex                     MIT           ^3.6.2           git+https://github.com/vuejs/vuex.git
```
