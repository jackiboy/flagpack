# Flagpack
_A lightweight flag icon toolkit for the web_

![Flagpack Screenshot](https://flag.pk/og.jpg)

[visit site](https://flag.pk/world)


## Install
flagpack can be installed with npm.

```
npm install flagpack 
```
## Use in your project

### CSS
you can import the built css file directly into your project. this will include all the css classes & flag icons.

### examples

**Default flag:** `bo` is the country code (Bolivia 🇧🇴 is used in these examples).

`<span class="fp bo"></span>`

**medium:**

`<span class="fp fp-md bo"></span>`

**large:**

`<span class="fp fp-lg bo"></span>`

**rounded:**

`<span class="fp fp-rounded bo"></span>`

**square variant:**

`<span class="fp fp-square bo"></span>`


_[visit flag.pk](https://flag.pk/world) to quickly copy your countries code for your project._

---

### SASS
Flagpack is built with SASS (SCSS). There are a few variables that are `!default` so that you can override them easily.

**Set custom prefix:**  
Set the class prefix (the default is `fp`).

```
$fp-prefix: 'fp' !default;
```

**Prepend Prefix:**  
Prepend the prefix to the country code e.g. `fp-bo` instead of `bo` (the default is set to false).

```
$fp-prepend: false !default;
```

**Set default icon size:**  
This will also mofify the `fp-md`, `fp-lg` & `fp-rounded` sizes.

```
$fp-size: 1em !default;
```

**Size Helpers:**  
By default Flagpack has a medium `.md` and large `.lg` helper class. you can disable generating these size classes if you don't need them.

```
$fp-size-md: true !default;
```

```
$fp-size-lg: true !default;
```


**Countries:**  
If you would like to include only a few countries you can override this variable. Just Include the country codes you want.

```
$fp-countries: "ac", "ad", "ae", "af", "ag", "ai", "al", "am", "ao", "ar", "as",
  "at", "au", "aw", "ax", "az", "ba", "bb", "bd", "be", "bf", "bg", "bh", "bi",
  "bj", "bl", "bm", "bn", "bo", "bq", "br", "bs", "bt", "bv", "bw", "by", "bz",
  "ca", "cc", "cd", "cf", "cg", "ch", "ci", "ck", "cl", "cm", "cn", "co", "cr",
  "cu", "cv", "cw", "cx", "cy", "cz", "de", "dj", "dk", "dm", "do", "dz", "ec",
  "ee", "eg", "eh", "er", "es", "et", "eu", "fi", "fj", "fk", "fm", "fo", "fr",
  "ga", "gb-eng", "gb-nir", "gb-sct", "gb-wls", "gb-zet", "gb", "gd", "ge", "gf",
  "gg", "gh", "gi", "gl", "gm", "gn", "gp", "gq", "gr", "gs", "gt", "gu", "gw",
  "gy", "hk", "hm", "hn", "hr", "ht", "hu", "id", "ie", "il", "im", "in", "io",
  "iq", "ir", "is", "it", "je", "jm", "jo", "jp", "ke", "kg", "kh", "ki", "km",
  "kn", "kp", "kr", "kw", "ky", "kz", "la", "lb", "lc", "lgbt", "li", "lk", "lr",
  "ls", "lt", "lu", "lv", "ly", "ma", "mc", "md", "me", "mf", "mg", "mh", "mk",
  "ml", "mm", "mn", "mo", "mp", "mq", "mr", "ms", "mt", "mu", "mv", "mw", "mx",
  "my", "mz", "na", "nc", "ne", "nf", "ng", "ni", "nl", "no", "np", "nr", "nu",
  "nz", "om", "pa", "pe", "pf", "pg", "ph", "pk", "pl", "pm", "pn", "pr", "ps",
  "pt", "pw", "py", "qa", "re", "ro", "rs", "ru", "rw", "sa", "sb", "sc", "sd",
  "se", "sg", "sh", "si", "sj", "sk", "sl", "sm", "sn", "so", "sr", "ss", "st",
  "sv", "sx", "sy", "sz", "ta", "tc", "td", "tf", "tg", "th", "tj", "tk", "tl",
  "tm", "tn", "to", "tr", "tt", "tv", "tw", "tz", "ua", "ug", "um", "us", "uy",
  "uz", "va", "vc", "ve", "vg", "vi", "vn", "vu", "wf", "ws", "xk", "ye", "yt",
  "za", "zm", "zw" !default;
```

**Enable/Disable Formats:**  
You can optionally turn off flag formats if you would only like to use one format (both formats are enabled by default).

```
$fp-enable-4x3: true !default;
```
```
$fp-enable-1x1: true !default;
```
```
$fp-enable-rounded: true !default;
```

**Flag SVG paths:**  
You will always need to override these variables if you are going to use the sass files directly in your project. 

* `$fp-4x3-path` is for the **4x3** (rectangle) formats. 
* `$fp-1x1-path` is for the **1x1** (square) formats.

```
$fp-4x3-path: '../flags/4x3/' !default;
```
```
$fp-1x1-path: '../flags/1x1/' !default;
```

## Why use this library?
Most flag libraries out there either use low quality png's or overly complex svg's that don't scale down well. Flagpack is around `125kb gzipped` this is including all the svgs (both **1x1** and **4x3** formats) plus the css. making it about **10x** smaller than [flag-icon-css](https://github.com/lipis/flag-icon-css).

Using only **1x1** or **4x3** formats will reduce the size to around `60kb`.

## Credits
flagpack uses the [flagkit](https://github.com/madebybowtie/FlagKit) as the base for it's icons plus a few custom additions. if you are looking for flags for IOS & Android please use this library.
