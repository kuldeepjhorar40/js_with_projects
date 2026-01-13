
#!/bin/bash

while true
do
  git add .
  git commit -m "Auto commit $(date '+%Y-%m-%d %H:%M:%S')" || true
  sleep 600
done

