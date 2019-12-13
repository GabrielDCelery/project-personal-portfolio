FILE_CERT=/etc/letsencrypt/live/gabrielzeller.co.uk/fullchain.pem
FILE_KEY=/etc/letsencrypt/live/gabrielzeller.co.uk/privkey.pem

if [[ ! -f "$FILE_CERT" || ! -f "$FILE_KEY" ]]; then
  mkdir -p /etc/letsencrypt/live/gabrielzeller.co.uk

  country=GB
  state=Surrey
  locality=Guildford
  organization=foo.net
  organizationalunit=bar
  commonname=bar
  email=foo@bar.net

  openssl req -newkey rsa:2048 -nodes \
  -keyout $FILE_KEY \
  -x509 -days 365 \
  -out $FILE_CERT \
  -subj "/C=$country/ST=$state/L=$locality/O=$organization/OU=$organizationalunit/CN=$commonname/emailAddress=$email"
fi