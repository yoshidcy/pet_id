A.
While the microservice's remote port forwarding and Express server is active, data should be requested by local port forwarding with the following CLI command:
    ssh -NL 3000:localhost:5000 yoshidcy@flip2.engr.oregonstate.edu
This will prompt for Cyan Yoshida's ONID password. After entering the password, send a GET request to the root directory of localhost port 3000 with the attribute 'url' set to a string containing the url which is to be converted.

B.
Data should be received automatically as an svg file of the QR code in the GET response.

C.
[project]   [microservice]
    |             |
    |             |
   | |           | |
   | |==========>| |
   | |  GET req  | |
   | |   (URL)   | |
   | |           | |
   | |<----------| |
   | |  GET res  | |
   | | (QR code) | |
   | |           | |
   | |            |
   | |            |
   | |            |
    |             |
