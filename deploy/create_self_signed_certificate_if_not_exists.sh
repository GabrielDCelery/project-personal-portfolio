FILE_CERT=/etc/letsencrypt/live/gabrielzeller.co.uk/fullchain.pem
FILE_KEY=/etc/letsencrypt/live/gabrielzeller.co.uk/privkey.pem

if [[ -f "$FILE_CERT" && -f "$FILE_KEY" ]]; then
  echo "they exist"
fi