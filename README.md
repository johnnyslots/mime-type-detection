# MIME Type Detection and Verification

Deployed app at https://johnnyslots.github.io/mime-type-detection

This app detecs and verifies the following MIME types:
- video/mp4
- video/quicktime
- video/x-msvideo
- video/x-ms-wmv
- video/webm
- video/ogg
- video/mpeg

Note that the last one on the list was added for support beyond the basic requirements.

I considered different approaches for implementation and after some thought I decided to build this client-side only. Of course, there are trade-offs, but for this purpose I thought a wiser choice is performing the validation on the frontend while avoiding unnecessary waste of network bandwith and server resource. If backend validation is required, I am happy to add that here, as well.

I used a JavaScript object to store the first few characters converted from the hex signature of each file as the keys, and the corresponding file type as their values. I chose an object for constant time lookup as opposed to an array, which would have, at worst, linear, or O(n) time complexity.

Please let me know if you have any questions!

Yoni Slotwiner
