#Change to your company details
country=GB
state=Surrey
locality=Guildford
organization=foo.net
organizationalunit=bar
commonname=bar
email=foo@bar.net

openssl req -newkey rsa:2048 -nodes \
-keyout /certs/my_site_key_file.pem -x509 -days 365 -out /certs/my_site_crt_file.pem \
-subj "/C=$country/ST=$state/L=$locality/O=$organization/OU=$organizationalunit/CN=$commonname/emailAddress=$email"