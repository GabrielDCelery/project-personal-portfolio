FILE_CERT=/etc/letsencrypt/live/gabrielzeller.co.uk/fullchain.pem
FILE_KEY=/etc/letsencrypt/live/gabrielzeller.co.uk/privkey.pem

if [ test -f "$FILE_CERT" ] 
  then
    echo "$FILE_CERT exist"
fi

if test -f "$FILE_KEY"; then
  echo "$FILE_KEY exist"
fi